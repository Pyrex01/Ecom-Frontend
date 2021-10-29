from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import status
from rest_framework.generics import ListAPIView
from store.pagination import ListPage
from store.models import Items
from store.serializer import ItemsInList

class getItems(ListAPIView):
    queryset = Items.objects.all()
    serializer_class = ItemsInList
    pagination_class = ListPage