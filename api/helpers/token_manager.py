from hfarm.models import User, Token, CallApplication, Call
from secrets import token_urlsafe


def create_token_for_user(user: User) -> str:
    new_token = token_urlsafe(32)
    token_object = Token(token=new_token, user=user)
    token_object.save()
    return token_object.token


def get_applicants(call: Call):
    from api.helpers.mappers import applications_mapper
    call_id = call.id
    applications = CallApplication.objects.filter(
        application_target__id=call.id)
    return list(map(applications_mapper, applications))


def get_user_applications(user: User):
    user_id = user.uid
    applications = CallApplication.objects.filter(applicant__uid=user_id)
    return list(map(lambda x: x.application_target.id, applications))
