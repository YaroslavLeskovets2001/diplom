from .models import Todo
from rest_framework import serializers


class TodoSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=200)
    password = serializers.CharField(max_length=200)
        
    def create(self, validated_data):
        """Describes create function"""
        return Todo.objects.create(**validated_data)

    def update(self, instance, validated_data):
        """Descrives update function"""
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
            instance.save()        
        return instance
