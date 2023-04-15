from django_filters import rest_framework as filters
from .models import Todolist, Todo


class TodolistFilter(filters.FilterSet):
    name = filters.CharFilter(lookup_expr='contains')

    class Meta:
        model = Todolist
        fields = ['title']


class TodoFilter(filters.FilterSet):
    created_at = filters.DateTimeFromToRangeFilter()

    class Meta:
        model = Todo
        fields = ['todolist', 'created_at']
