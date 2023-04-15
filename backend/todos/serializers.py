from rest_framework.relations import StringRelatedField, SlugRelatedField
from rest_framework.serializers import ModelSerializer

from accounts.serializers import UserShortSerializer
from .models import Todolist, Todo


class TodoSerializer(ModelSerializer):
    project = StringRelatedField(read_only=True)
    executor = SlugRelatedField(
        read_only=True,
        slug_field='get_full_name'
    )

    class Meta:
        model = Todo
        fields = '__all__'


class TodoSerializerBase(ModelSerializer):
    class Meta:
        model = Todo
        fields = '__all__'


class TodolistSerializerBase(ModelSerializer):
    class Meta:
        model = Todolist
        fields = '__all__'


class TodoShortSerializer(ModelSerializer):
    executor = SlugRelatedField(
        read_only=True,
        slug_field='get_full_name'
    )

    class Meta:
        model = Todo
        fields = ['id', 'title', 'content', 'is_completed', 'executor']


class TodolistSerializer(ModelSerializer):
    todo = TodoSerializer(many=True, read_only=True)
    participants = UserShortSerializer(
        many=True
    )

    class Meta:
        model = Todolist
        fields = '__all__'


class TodolistShortSerializer(ModelSerializer):
    todo = TodoShortSerializer(many=True)
    participants = UserShortSerializer(
        many=True
    )

    class Meta:
        model = Todolist
        fields = '__all__'
