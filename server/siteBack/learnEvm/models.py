from django.db import models
from django.contrib.auth.models import AbstractBaseUser

from .managers import UserManager
# Create your models here.
class News(models.Model):
    author = models.ManyToManyField(User, related_name='user_author')
    tags = models.ManyToManyField(Tags, related_name='user_tags')
    topic = models.CharField(max_length=64)
    text = models.CharField(max_length=256)

    def __str__(self):
        return self.text