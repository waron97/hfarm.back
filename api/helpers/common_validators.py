from django.http import HttpRequest
from hfarm.models import Token, User
from django.core.exceptions import ObjectDoesNotExist


def is_authorization_header_present(request: HttpRequest) -> bool:
    try:
        request.headers['authorization']
        return True
    except:
        return False


def is_token_valid(token: str) -> bool:
    from hfarm.models import Token
    try:
        Token.objects.get(token=token)
        return True
    except:
        return False


def check_token_valid_return_user(token: str) -> User:
    token = Token.objects.get(token=token)
    return token.user


def check_token_valid(token) -> bool:
    try:
        Token.objects.get(token=token)
        return True
    except:
        return False
