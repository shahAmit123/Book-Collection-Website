from django.contrib.auth.models import User , Group
from rest_framework import viewsets
from .serializers import BookSerializer
from .models import Book

class MovieViewSet(viewsets.ModelViewSet):
    queryset = Book.objects.all()
    serializer_class = BookSerializer
