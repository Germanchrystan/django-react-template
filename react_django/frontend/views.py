from django.shortcuts import render
from django.http import JsonResponse
import requests

def index(request):
	return render(request, 'frontend/index.html')
 """
def apitest(request):
	url = 'https://www.breakingbadapi.com/api/characters'
	r = requests.get(url).json() 
	return JsonResponse(r[2],safe=False)
"""