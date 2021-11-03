from rest_framework.generics import ListAPIView
from store.pagination import ListPage
from store.models import *
from rest_framework.decorators import api_view
from rest_framework.response import Response
from store.serializer import ItemsInList , SingleItem

class getItems(ListAPIView):
    queryset = Items.objects.all()
    serializer_class = ItemsInList
    pagination_class = ListPage

class getSortItems(ListAPIView):
    queryset = Items.objects.all()
    serializer_class = ItemsInList
    pagination_class = ListPage
    def get_queryset(self):
        queryset = Items.objects.all()
        data = self.request.GET
        if "categories" in data.keys():
            sub = Belongs.objects.get(Categorie_ID=data["categories"])
            queryset = queryset.filter(Belongs_ID__in=sub)
        if "sub_categorie"in data.keys():
            queryset = queryset.filter(Belongs_ID=data["sub_categorie"])
        if "by_price" in data.keys():
            if data["by_price"]==1:
                queryset = queryset.order_by("Price")
            if data["by_price"]==0:
                queryset = queryset.order_by("-Price")
        return queryset

@api_view(['GET'])
def getItem(request):
    try:
        item = Items.objects.get(pk=request.GET["product_ID"])
        item = SingleItem(item)
        return Response(data=item.data,status=200)
    except Items.DoesNotExist as E:
        return Response(status=404)