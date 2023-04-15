from django.contrib import admin

from .models import Todolist, Todo


class TodoItemInline(admin.TabularInline):
    model = Todo


class TodolistAdmin(admin.ModelAdmin):
    inlines = [
        TodoItemInline,
    ]
    list_display = (
        'pk',
        'title',
        'details',
        'preview_image',
        'is_active',
        'is_completed',
        'created_at',
    )


admin.site.register(Todolist, TodolistAdmin)
