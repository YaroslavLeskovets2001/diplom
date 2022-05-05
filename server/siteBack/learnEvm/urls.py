from rest_framework import routers

from django.db import router

from .views import UserViewSet


router = routers.DefaultRouter(trailing_slash=True)
router.register(r'users', UserViewSet, basename='newsusers')
urlpatterns = [
    *router.urls,
]