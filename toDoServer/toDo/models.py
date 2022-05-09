from django.db import models


class Todo(models.Model):
    name = models.CharField(max_length=255)
    password = models.CharField(max_length=255, default='none12')

    def __str__(self):
        return self.name
