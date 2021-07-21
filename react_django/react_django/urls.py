from django.contrib import admin
from django.urls import path, include
from leads import urls
from frontend import urls

urlpatterns = [
	path('', include('frontend.urls')),
    path('admin/', admin.site.urls),
    path('', include('leads.urls'))
]
