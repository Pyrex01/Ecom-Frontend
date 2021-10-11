from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.auth.hashers import make_password
from rest_framework import status
from .models import *
from rest_framework.authtoken.models import Token
import random
import datetime
@api_view(['POST'])
def signup(request):
    try:
        Users.objects.get(Email=request.data["Email"])
        return Response(data={"Email already in use"},status=status.HTTP_226_IM_USED)
    except Users.DoesNotExist:
        request.data["password"]= make_password(request.data["password"])
        request.data["Gender"] = Gender.objects.get(pk=request.data["Gender"])
        user = UnVerifiedUser(**request.data)
        user.OTP=random.randint(99999,999999)
        user.save()
        print(user.id)
        return Response(data={"signup_token":str(user.id)},status=status.HTTP_201_CREATED)


@api_view(['POST'])
def confirmOTP(request):
    try:
        user = UnVerifiedUser.objects.get(id=request.data["token"],OTP=request.data["otp"])
        if datetime.datetime(minute=5)>datetime.now()-user.Generated_Date:
            return Response(status=status.HTTP_410_GONE)
        cuser = Users(First_Name=user.First_Name,Second_Name=user.Second_Name,Email=user.Email,Gender=user.Gender,Photo=user.Photo,password=user.password)
        cuser.save()
        user.delete()
        return Response(status=status.HTTP_202_ACCEPTED)
    except Exception as e:
        print("execpiton",e)
        return Response(data={"wrong info"},status=status.HTTP_404_NOT_FOUND)

@api_view(["POST"])
def login(request):
    try:
        user = Users.objects.get(Email=request.data["Email"])
        if user.check_password(request.data["password"]):
            token = Token.objects.get_or_create(user=user)[0]
            data = {"login_token":token.key,"First_name":user.First_Name,"Second_Name":user.Second_Name,"Photo":user.Photo}
            return Response(data=data,status=status.HTTP_202_ACCEPTED)

    except Exception as E:
        return Response(data="wrong info",status=status.HTTP_403_FORBIDDEN)