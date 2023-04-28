from django.shortcuts import get_object_or_404
from rest_framework.pagination import LimitOffsetPagination
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet

from .models import Todolist, Todo
from .serializers import TodoSerializerBase, TodolistSerializer, TodoSerializer, TodolistShortSerializer, \
    TodolistSerializerBase, TodolistParticipantsSerializer
from .filters import TodolistFilter, TodoFilter


class TodolistLimitOffsetPagination(LimitOffsetPagination):
    default_limit = 10


class TodoLimitOffsetPagination(LimitOffsetPagination):
    default_limit = 20


class TodolistViewSet(ModelViewSet):
    queryset = Todolist.objects.all()
    filterset_class = TodolistFilter
    pagination_class = TodolistLimitOffsetPagination

    def get_serializer_class(self):
        if self.request.method in ['GET']:
            return TodolistSerializer
        return TodolistSerializerBase

    def list(self, request):
        title = request.query_params.get('title')
        queryset = self.get_queryset()
        if title is not None:
            queryset = queryset.filter(title__contains=title)

        page = self.paginate_queryset(queryset)
        if page is not None:
            serializer = TodolistShortSerializer(page, many=True)
            return self.get_paginated_response(serializer.data)

        serializer = TodolistShortSerializer(self.queryset, many=True)
        return Response(serializer.data)


class TodoViewSet(ModelViewSet):
    queryset = Todo.objects.all()
    filterset_class = TodoFilter

    def get_serializer_class(self):
        if self.request.method in ['GET']:
            return TodoSerializer
        return TodoSerializerBase

    def list(self, request):
        todolist_id = request.query_params.get('todolist')
        queryset = self.get_queryset()

        if todolist_id is not None:
            todolist = get_object_or_404(Todolist, id=todolist_id)
            queryset = queryset.filter(todolist__id=todolist_id)
            serialized_todolist = TodolistParticipantsSerializer(todolist).data

        serialized_todo = TodoSerializer(queryset, many=True).data

        custom_data = {
            'todolist': serialized_todolist,
            'results': serialized_todo,
        }
        return Response(custom_data)

    def destroy(self, request, pk=None):
        todo = get_object_or_404(Todo, pk=pk)
        todo.is_active = False
        todo.save()
        serializer = TodoSerializer(todo, context={'request': request})
        return Response(serializer.data)
