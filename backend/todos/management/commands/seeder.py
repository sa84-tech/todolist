import json
import os

from django.core.management import BaseCommand
from environs import Env

from accounts.models import CustomUser
from django.db import IntegrityError

from config.settings import BASE_DIR
from todos.models import Todolist, Todo

env = Env()
env.read_env()

ADM_PASSWD = env.str('INIT_ADM_PSWD', default='Admin00')
USR_PASSWD = env.str('INIT_USR_PSWD', default='User00')


class Command(BaseCommand):
    def handle(self, *args, **options):
        super_user = CustomUser.objects.filter(is_superuser=True)
        if not super_user:
            super_user = CustomUser.objects.create_superuser('admin', 'admin@example.com', ADM_PASSWD)
            super_user.first_name = "Александр"
            super_user.last_name = "Матросов"
            super_user.save()
            print(f'** superuser created ** ({super_user})')
        else:
            print('super user already exits ', super_user.username)
        try:
            file_path = os.path.join(BASE_DIR, 'todos', 'management', 'commands', 'fake_data.json')
            with open(file_path, 'r', encoding='utf-8') as read_file:
                data = json.load(read_file)

            if data.get('users'):
                for user in data['users']:
                    try:
                        new_user = CustomUser.objects.create_user(**user, password=USR_PASSWD)
                        new_user.save()
                        print(f'** New User Created ({new_user.username}) **')
                    except IntegrityError:
                        print(f'** User Already Exists **')

            if data.get('todolists'):
                for project in data['todolists']:
                    new_project, is_created = Todolist.objects.get_or_create(**project['data'])
                    if is_created:
                        new_project.participants.set(project['participants'])
                        new_project.save()
                        print(f'** New Todolist Created ({new_project}) **')
                    else:
                        print(f'** Todolist Already Exists ({new_project}) **')

            if data.get('todos'):
                for todo in data['todos']:
                    new_todo, is_created = Todo.objects.get_or_create(**todo)
                    if is_created:
                        new_todo.save()
                        print(f'** New Todo Created ({new_todo}) **')
                    else:
                        print(f'** Todo Already Exists ({new_todo}) **')

        except IOError as error:
            print('!!!', error)
            return
