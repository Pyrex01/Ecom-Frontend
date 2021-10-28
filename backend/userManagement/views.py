from rest_framework.decorators import api_view , authentication_classes
from rest_framework.response import Response
from django.contrib.auth.hashers import make_password
from rest_framework.authentication import TokenAuthentication
from rest_framework.authtoken.models import Token
from rest_framework import status
from django.core import mail
from django.conf.global_settings import EMAIL_HOST_USER
from .models import *
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
        print("------------------------------------ OTP:",user.OTP,"----------------------------")
        email = mail.EmailMessage(subject="Django Otp verification",body=f"you have signed up to shoping bazar here is your otp {user.OTP}",from_email=EMAIL_HOST_USER,to=[user.Email])
        email.send(fail_silently=False)
        user.save()
        return Response(data={"signup_token":str(user.id)},status=status.HTTP_201_CREATED)
    except KeyError:
        return Response(status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def confirmOTP(request):
    try:
        user = UnVerifiedUser.objects.get(id=request.data["token"],OTP=request.data["otp"])
        # if datetime.datetime(minute=5)>datetime.now()-user.Generated_Date:
        #     return Response(status=status.HTTP_410_GONE)
        cuser = Users(First_Name=user.First_Name,Second_Name=user.Second_Name,Email=user.Email,Gender=user.Gender,Photo=user.Photo,password=user.password)
        cuser.save()
        user.delete()
        return Response(status=status.HTTP_202_ACCEPTED)
    except KeyError as e:
        return Response(data={"wrong info"},status=status.HTTP_400_BAD_REQUEST)

@api_view(["POST"])
def login(request):
    try:
        user = Users.objects.get(Email=request.data["Email"])
        if user.check_password(request.data["password"]):
            token = Token.objects.get_or_create(user=user)[0]
            data = {"login_token":token.key,"First_name":user.First_Name,"Second_Name":user.Second_Name,"Photo":user.Photo}
            return Response(data=data,status=status.HTTP_202_ACCEPTED)
        else:
            return Response(status=status.HTTP_403_FORBIDDEN)

    except Exception as E:
        return Response(data="wrong info",status=status.HTTP_403_FORBIDDEN)

    except KeyError as E:
        return Response(status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
@authentication_classes((TokenAuthentication,))
def logout(request):
    print(request)
    try:
        Token.objects.get(user = request.user).delete()
        return Response(status=status.HTTP_200_OK)
    except Exception as E:
        return Response(status=status.HTTP_400_BAD_REQUEST)
        

# mail.EmailMessage(subject="Django Otp verification",body='''<div style="flex:inline;"><h1>you have requested otp</h1> <div style="width:10px; height:10px;background:rgb(202, 235, 16);text:white"> 99999 </div> </div>''',from_email=EMAIL_HOST_USER,to=["khanshafique.ahamed@gmail.com"]).send(fail_silently=False)