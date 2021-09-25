from django.db import models
from django.contrib.auth.models import BaseUserManager ,AbstractBaseUser , PermissionsMixin



class MyUserManager(BaseUserManager):
    def create_user(self, First_Name,Second_Name,Email,is_admin ,Gender ,Photo, password):
        """
        Creates and saves a User with the given name, date of
        birth and password.
        """
        if not First_Name:
            raise ValueError('Users must have an name First Name')
        user = self.model(
            First_Name=First_Name,
            Second_Name=Second_Name,
            Email=Email,
            is_admin=is_admin,
            Gender=Gender,
            Photo=Photo
        )
        user.set_password(password)
        user.save(using=self._db)
        return user
    def create_superuser(self, First_Name,Second_Name,Email , password):
        """
        Creates and saves a superuser with the given name, date of
        birth and password.
        """
        user = self.model(
            First_Name=First_Name,
            Second_Name=Second_Name,
            Email=Email,
        )
        user.is_superuser =True
        user.is_admin = True
        user.is_staff = True
        user.set_password(password)
        user.save(using=self._db)
        return user


class Gender(models.Model):
    type= models.CharField(max_length=10)
    def __str__(self):
        return self.type

class Users(AbstractBaseUser,PermissionsMixin):
    First_Name = models.CharField(max_length=40,)
    Second_Name = models.CharField(max_length=40)
    Email = models.EmailField(unique=True)
    is_admin = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)
    Gender = models.ForeignKey(Gender,on_delete=models.CASCADE,null=True)
    Photo = models.TextField(null=True,blank=True)
    objects = MyUserManager()
    USERNAME_FIELD = 'Email'
    REQUIRED_FIELDS = ['First_Name','Second_Name',]
    def __str__(self):
        return self.First_Name + ":" + self.Email



class UnVerifiedUser(models.Model):
    First_Name = models.CharField(max_length=40,)
    Second_Name = models.CharField(max_length=40)
    Email = models.EmailField()
    is_admin = models.BooleanField(default=False)
    Gender = models.ForeignKey(Gender,on_delete=models.CASCADE)
    Photo = models.TextField()
    password = models.CharField(max_length=128)
    OTP = models.CharField(max_length=6)
    Generated_Date = models.DateField(auto_now_add=True)