from django.shortcuts import get_object_or_404
from rest_framework.pagination import LimitOffsetPagination
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet
from .models import Todolist, Todo
from .serializers import TodolistSerializer, TodoSerializer, TodolistShortSerializer, TodoSerializerBase, \
    TodolistSerializerBase
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
        project_name = request.query_params.get('name')
        queryset = self.get_queryset()
        if project_name is not None:
            queryset = queryset.filter(name__contains=project_name)

        page = self.paginate_queryset(queryset)
        if page is not None:
            serializer = TodolistShortSerializer(page, many=True)
            return self.get_paginated_response(serializer.data)

        serializer = TodolistShortSerializer(self.queryset, many=True)
        return Response(serializer.data)


class TodoViewSet(ModelViewSet):
    queryset = Todo.objects.all()
    filterset_class = TodoFilter
    pagination_class = TodoLimitOffsetPagination

    def get_serializer_class(self):
        if self.request.method in ['GET']:
            return TodoSerializer
        return TodoSerializerBase

    def destroy(self, request, pk=None):
        todo = get_object_or_404(Todo, pk=pk)
        todo.is_active = False
        todo.save()
        serializer = TodoSerializer(todo, context={'request': request})
        return Response(serializer.data)
