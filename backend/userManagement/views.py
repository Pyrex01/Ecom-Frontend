from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import *
from django.contrib.auth.hashers import make_password
from rest_framework import status
import random


@api_view(['POST'])
def signup(request):
    request.data["password"]= make_password(request.data["password"])
    request.data["Gender"] = Gender.objects.get(pk=request.data["Gender"])
    user = UnVerifiedUser(**request.data)
    user.OTP=random.randint(99999,999999)
    user.save()
    print(user.id)
    return Response(data={"token":str(user.id)},status=status.HTTP_201_CREATED)

@api_view(['POST'])
def confirmOTP(request):
    try:
        user = UnVerifiedUser.objects.get(id=request.data["token"],OTP=request.data["otp"])
        cuser = Users(First_Name=user.First_Name,Second_Name=user.Second_Name,Email=user.Email,Gender=user.Gender,Photo=user.Photo,password=user.password)
        cuser.save()
        user.delete()
        return Response(status=status.HTTP_202_ACCEPTED)
    except Exception as e:
        print("execpiton",e)
        return Response(data={"wrong info"},status=status.HTTP_404_NOT_FOUND)
        
