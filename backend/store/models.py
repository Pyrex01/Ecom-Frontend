from django.db import models
from userManagement.models import Users
from addressCollection.models import Address


class Categorie(models.Model):
    Type = models.CharField(max_length=30)

class Belongs(models.Model):
    Categorie_ID = models.ForeignKey(Categorie, on_delete=models.CASCADE)
    Sub_Categorie = models.CharField(max_length=50)
    class Meta:
        db_table = "sub Categorie"

class Items(models.Model):
    Name = models.CharField(max_length=60)
    Price = models.CharField(max_length=10)
    Belongs_ID = models.ForeignKey(Belongs,on_delete=models.SET_NULL,null=True)
    Product_details = models.JSONField()
    Quantity = models.IntegerField()


class Cart(models.Model):
    User_ID = models.ForeignKey(Users,on_delete=models.CASCADE)
    Items_ID = models.ForeignKey(Items,on_delete=models.CASCADE)

class Wish_List(models.Model):
    User_ID = models.ForeignKey(Users,on_delete=models.CASCADE)
    Items_ID = models.ForeignKey(Items,on_delete=models.CASCADE)

class Orders(models.Model):
    STATUS = [
        ('O',"ORDERED"),
        ('D',"DISPATCHED"),
        ('S',"SHIPED"),
        ('OD',"OUT FOR DELIVERY"),
        ('D',"DONE")
    ]
    Items_ID = models.ForeignKey(Items,on_delete=models.CASCADE)
    Customers_ID = models.ForeignKey(Users,on_delete=models.CASCADE)
    Status = models.CharField(max_length=2,choices=STATUS)
    Order_date = models.DateField(auto_now_add=True)
    Quantity = models.IntegerField()
    Tracking_ID = models.CharField(max_length=20)
    Address_ID = models.ForeignKey(Address,on_delete=models.CASCADE)


class CompletedOrders(models.Model):
    Items_ID = models.ForeignKey(Items,on_delete=models.SET_NULL,null=True)
    Customers_ID = models.ForeignKey(Users,on_delete=models.SET_NULL,null=True)
    Order_date = models.DateField(auto_now_add=True)
    Delivery_Date = models.DateField()
    Quantity = models.IntegerField()
    Tracking_ID = models.CharField(max_length=20)
    Address_ID = models.ForeignKey(Address,on_delete=models.CASCADE)

class Return_Items(models.Model):
    STATUS = [
        ('P',"PICKED"),
        ('S',"SHIPED"),
        ('R',"RECIVED")
    ]
    CompletedOrders_ID = models.ForeignKey(CompletedOrders,on_delete=models.CASCADE)
    Pick_up_date = models.DateField()
    Status = models.CharField(max_length=2,choices=STATUS)
    Tracking_ID = models.CharField(max_length=20)

class Completed_Return_Items(models.Model):
    Return_Items_ID = models.ForeignKey(Return_Items,on_delete=models.CASCADE)
    Pick_up_date = models.DateField()
    Tracking_ID = models.CharField(max_length=20)
    Recived_Date = models.DateField()
