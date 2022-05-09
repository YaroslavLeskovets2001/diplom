from rest_framework import viewsets
from rest_framework.response import Response
from .models import Todo
from django.shortcuts import get_object_or_404
from .serializers import TodoSerializer
import json


class TodoViewSet(viewsets.ViewSet):
    serializer_class = TodoSerializer
    queryset = Todo.objects.all()

    def list(self, request):
        queryset = Todo.objects.all()
        queryset = queryset.order_by('id')
        serializer = TodoSerializer(queryset, many=True)
        return Response(serializer.data)  
  
    def retrieve(self, request, pk=None):
        queryset = Todo.objects.all()
        todo = get_object_or_404(queryset, pk=pk)
        serializer = TodoSerializer(todo)
        return Response(serializer.data)

    def create(self, request):
        newTodo = json.loads(self.request.body)
        Todo.objects.create(name=newTodo.get('name'),
        password = newTodo.get('password'))
        return Response()
