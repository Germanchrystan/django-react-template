from django.urls import path
from . import views

urlpatterns = [
	path('', views.index),
	path('api/test/', views.apitest)
]