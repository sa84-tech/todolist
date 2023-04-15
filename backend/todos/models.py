from django.db import models

from config import settings


class Todolist(models.Model):
    participants = models.ManyToManyField(
        settings.AUTH_USER_MODEL,
        related_name='todolist'
    )

    title = models.CharField(
        verbose_name='название',
        max_length=64,
    )

    details = models.TextField(
        verbose_name='описание',
        blank=True
    )

    preview_image = models.CharField(
        verbose_name='превью',
        max_length=256,
        blank=True
    )

    is_active = models.BooleanField(  # False - удален
        verbose_name='активен',
        default=True
    )

    is_completed = models.BooleanField(
        verbose_name='выполнен',
        default=False
    )

    created_at = models.DateTimeField(
        verbose_name="создан",
        auto_now_add=True
    )

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'список задач'
        verbose_name_plural = 'списки задач'


class Todo(models.Model):
    todolist = models.ForeignKey(
        Todolist,
        related_name='todo',
        on_delete=models.CASCADE,
        verbose_name='Список дел'
    )

    executor = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name='executor',
        verbose_name='исполнитель'
    )

    title = models.CharField(
        verbose_name='название',
        max_length=64,
    )

    content = models.TextField(
        verbose_name='текст',
        blank=True
    )

    is_active = models.BooleanField(  # False - удалена
        verbose_name='активен',
        default=True
    )

    is_completed = models.BooleanField(
        verbose_name='выполнен',
        default=False
    )

    created_at = models.DateTimeField(
        verbose_name="создан",
        auto_now_add=True
    )

    updated_at = models.DateTimeField(
        verbose_name='обновлен',
        auto_now=True,
    )

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'задача'
        verbose_name_plural = 'задачи'
