from rest_framework.routers import SimpleRouter

from .views import TodolistViewSet, TodoViewSet

router = SimpleRouter()
router.register('todolist', TodolistViewSet, basename='todolists')
router.register('todo', TodoViewSet, basename='todos')

urlpatterns = router.urls
