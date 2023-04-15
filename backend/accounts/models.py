from django.contrib.auth.models import AbstractUser
from django.db import models


class CustomUser(AbstractUser):
    email = models.EmailField(blank=False, unique=True)

    @property
    def get_full_name(self):
        if self.first_name or self.last_name:
            full_name = f'{self.first_name} {self.last_name}'
        else:
            full_name = self.username
        return full_name

    def __str__(self):
        return self.username

    class Meta:
        verbose_name = 'пользователь'
        verbose_name_plural = 'пользователи'
