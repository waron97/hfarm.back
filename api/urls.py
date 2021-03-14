from django.urls import path, re_path
import api.views as views

urlpatterns = [
    path('authenticateWithToken', views.authenticate_with_token),
    path("authenticateWithUsernameAndPassword",
         views.authenticate_with_username_and_password),
    path('registerUser', views.register_user),
    path('getJobCalls', views.get_job_calls),
    path('getJobCallDetails/<int:callid>', views.get_job_call_details),
    path('createJobCall', views.create_job_call),
    path('createJobApplication', views.create_job_application),
    path('updateUserFavorites', views.update_user_favorites),
    path('updateApplicationStatus', views.update_application_status),
    path('getUserPosts', views.get_user_posts),
    path('getUserApplications', views.get_user_applications),
    path('editCall', views.edit_call)
]
