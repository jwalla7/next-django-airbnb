from . import views
from django.urls import path

urlpatterns = [
    path('properties/', views.PropertyListCreateView.as_view()),
    path('properties/<int:pk>/', views.PropertyRetrieveUpdateDestroyView.as_view()),
    path('bookings/', views.BookingListCreateView.as_view()),
    path('bookings/<int:pk>/', views.BookingRetrieveUpdateDestroyView.as_view()),
    # path('/auth/github/', GitHubLogin.as_view(), name='github_login')
]