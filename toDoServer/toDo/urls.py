from rest_framework import routers
from django.db import router
from .views import TodoViewSet


router = routers.DefaultRouter(trailing_slash=True)
router.register(r'todos', TodoViewSet, basename='todo') 
urlpatterns = [
    *router.urls,
]
