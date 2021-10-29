from django.urls import path
from store.views import getItems
from store import views

urlpatterns = [
    path("getItems/",getItems.as_view())
]