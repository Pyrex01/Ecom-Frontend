from django.urls import path
from . import views
urlpatterns = [
    path("signup",views.signup,name="signup"),
    path('confirm',views.confirmOTP,name="OTP confirm")
]