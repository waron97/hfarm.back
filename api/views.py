
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.db import IntegrityError
from django.core.exceptions import ObjectDoesNotExist
from django.http import HttpResponse, HttpRequest, HttpResponseBadRequest, HttpResponseForbidden, HttpResponseServerError
import api.helpers.common_validators as validators
import json
from json.decoder import JSONDecodeError
from hfarm.models import User, Token, Call, CallApplication
import api.helpers.token_manager as operations
import api.helpers.mappers as mappers

# Create your views here.


@csrf_exempt
def authenticate_with_token(request: HttpRequest):
    """
    METODO: POST
    Riceve token in headers/authorization e se il token esiste
    ritorna l'oggetto utente autenticato.
    """
    if not request.method == "POST":
        return HttpResponseForbidden('must_be_post')
    if not validators.is_authorization_header_present(request):
        return HttpResponseBadRequest('no_token')
    try:
        auth_token = request.headers['authorization']
        user = validators.check_token_valid_return_user(auth_token)
        client_id = user.client_id if user.account_type == 'external' else 'NOID'
        user_object = {
            'uid': user.uid,
            'username': user.username,
            'favorites': user.favorites,
            'accountType': user.account_type,
            'token': auth_token,
            'clientId': client_id,
            'applications': operations.get_user_applications(user)
        }
        return HttpResponse(json.dumps(user_object))

    except ObjectDoesNotExist:
        return HttpResponseBadRequest('token_expired')
    except KeyError:
        return HttpResponseBadRequest('no_token')
    except Exception as e:
        print(type(e), e)
        return HttpResponseServerError('server_failure')


@csrf_exempt
def authenticate_with_username_and_password(request: HttpRequest):
    """
    METODO: POST
    Riceve username e password in POST-REQUEST. Se l'utente esiste,
    ritorna un session-token valido. Il client usa il token creato
    per chiamare authenticateWithToken
    """
    if not request.method == "POST":
        return HttpResponseForbidden('must_be_post')
    try:
        body = json.loads(request.body)
        username = body['username']
        password = body['password']
        user: User = User.objects.get(username=username)
        if user.password == password:
            client_id = user.client_id if user.account_type == 'external' else 'NOID'
            token = operations.create_token_for_user(user)
            return HttpResponse(token)
        else:
            print('wrong creds')
            return HttpResponseBadRequest('wrong_credentials')

    except KeyError:
        print('bad json')
        return HttpResponseBadRequest('invalid_json')
    except ObjectDoesNotExist:
        print('wrong creds')
        return HttpResponseBadRequest('wrong_credentials')
    except:
        return HttpResponseServerError('server_failure')


@csrf_exempt
def register_user(request: HttpRequest):
    """
    METODO: POST
    Riceve in POST:
        - username
        - password
        - tipo account (internal, external) + client_id
    Se l'account è creato con successo, ritorna un session-token utente valido
    """
    if not request.method == "POST":
        return HttpResponseForbidden('must_be_post')
    try:
        body = json.loads(request.body)
        username = body["username"]
        password = body["password"]
        account_type = body["type"]
        if (account_type == "external"):
            client_id = body["clientId"]
            new_user = User(username=username, password=password,
                            account_type='external', client_id=client_id, favorites=[])
            new_user.save()
        else:
            client_id = 'NOID'
            new_user = User(username=username, password=password,
                            account_type='internal', favorites=[], client_id=client_id)
            new_user.save()
        token = operations.create_token_for_user(new_user)
        json_user_object = {
            'username': new_user.username,
            'favorites': new_user.favorites,
            'accountType': new_user.account_type,
            'token': token,
            'clientId': new_user.client_id
        }
        return HttpResponse(json.dumps(json_user_object))

    # except JSONDecodeError:
    #     return HttpResponseBadRequest('invalid_json')
    # except IntegrityError as e:
    #     print(type(e), e)
    #     return HttpResponseBadRequest('existing_username')
    # except KeyError:
    #     return HttpResponseBadRequest('invalid_json')
    except Exception as e:
        print(type(e), e)
        return HttpResponseServerError('server_failure')


@csrf_exempt
def get_job_calls(request: HttpRequest):
    """
    METODO: GET
    Riceve AUTHORIZATION nei HEADER, contenente il token di sessione.
    Ritorna un JsonArray di Call nel Database.
    Ritorna solo titolo, tipo, e data di creazione.

    TODO:
        - Non ritornare tutte le entry nel database immediatamente. Implementa pagine. 
    """
    if not validators.is_authorization_header_present(request):
        return HttpResponseBadRequest('no_token')

    try:
        token = request.headers['authorization']
        if (validators.check_token_valid(token)):
            call_objects = Call.objects.all()
            calls = list(map(mappers.calls_mapper, call_objects))
            return HttpResponse(json.dumps(calls))
        else:
            return HttpResponseBadRequest('token_expired')
    except KeyError:
        return HttpResponseBadRequest('no_token')
    except ObjectDoesNotExist:
        return HttpResponseBadRequest('token_expired')
    except Exception as e:
        print(type(e), e)
        return HttpResponseServerError('server_failure')


@csrf_exempt
def get_job_call_details(request: HttpRequest, callid):
    """
    METODO: GET
    Riceve AUTHORIZATION nei HEADER, contenente il token di sessione.
    Ritorna l'intero oggetto Call nel database.
    Se l'utente richiedente è il poster della Call, ritorna anche application alla call.
    """
    if not validators.is_authorization_header_present(request):
        return HttpResponseBadRequest('no_token')
    try:
        token = request.headers['authorization']
        user: User = validators.check_token_valid_return_user(token)
        call: Call = Call.objects.get(id=callid)
        if (user.uid == call.poster.uid):
            client_id = call.client_id if call.type == 'external' else 'NOID'
            return HttpResponse(json.dumps({
                'id': call.id,
                'type': call.type,
                'poster': call.poster.uid,
                'title': call.title,
                'description': call.description,
                'clientId': client_id,
                'applications': operations.get_applicants(call),
                'timePosted': call.time_posted.isoformat()

            }))
        else:
            client_id = call.client_id if call.type == 'external' else 'NOID'
            return HttpResponse(json.dumps({
                'id': call.id,
                'type': call.type,
                'poster': call.poster.uid,
                'title': call.title,
                'description': call.description,
                'clientId': client_id,
                'timePosted': call.time_posted.isoformat()
            }))
    except KeyError:
        return HttpResponseBadRequest('invalid_json')
    except ObjectDoesNotExist:
        return HttpResponseBadRequest('no_token')
    # except Exception as e:
    #     print(type(e), e)
    #     return HttpResponseBadRequest('server_failure')


@csrf_exempt
def create_job_call(request: HttpRequest):
    """
    METODO: POST
    Riceve AUTHORIZATION nei HEADER, contenente il token di sessione.
    In POST-REQUEST-BODY riceve i dati relativi alla Call da creare.
    Ritorna l'id della call creata.
    """
    if not validators.is_authorization_header_present(request):
        return HttpResponseBadRequest('no_token')
    if not validators.check_token_valid(request.headers['authorization']):
        return HttpResponseBadRequest('no_token')
    if not request.method == "POST":
        return HttpResponseForbidden('must_be_post')
    try:
        token = request.headers['authorization']
        user: User = Token.objects.get(token=token).user
        title = json.loads(request.body)['title']
        description = json.loads(request.body)['description']
        client_id = user.client_id if user.account_type == 'external' else 'NOID'
        call = Call(title=title, description=description, poster=user,
                    client_id=client_id, type=user.account_type)
        call.save()
        return HttpResponse('ok')
    except KeyError:
        return HttpResponseBadRequest('invalid_json')
    except JSONDecodeError:
        return HttpResponseBadRequest('invalid_json')
    except ObjectDoesNotExist:
        return HttpResponseBadRequest('no_token')
    except AttributeError:
        pass
    except:
        return HttpResponseServerError('server_failure')


@csrf_exempt
def create_job_application(request: HttpRequest):
    """
    METODO: POST
    Riceve AUTHORIZATION nei HEADER, contenente il token di sessione.
    In POST-REQUEST-BODY riceve i dati relativi alla Call a cui candidarsi.
    Ritorna l'id della application creata.
    """
    if not validators.is_authorization_header_present(request):
        return HttpResponseBadRequest('no_token')
    if not validators.check_token_valid(request.headers['authorization']):
        return HttpResponseBadRequest('no_token')
    if not request.method == "POST":
        return HttpResponseForbidden('must_be_post')
    try:
        token = request.headers['authorization']
        call_id = json.loads(request.body)['callId']
        seniority = json.loads(request.body)['seniority']
        user = validators.check_token_valid_return_user(token)
        call = Call.objects.get(id=call_id)
        application = CallApplication(
            status='received', application_target=call, applicant=user, seniority=seniority)
        application.save()
        return HttpResponse('ok')
    except KeyError:
        return HttpResponseServerError('server_failure')
    except JSONDecodeError:
        return HttpResponseBadRequest('invalid_json')
    except ObjectDoesNotExist:
        return HttpResponseBadRequest('invalid_json')
    except AttributeError:
        pass
    except:
        return HttpResponseServerError('server_failure')


@csrf_exempt
def update_user_favorites(request: HttpRequest):
    """
    METODO: POST
    Riceve AUTHORIZATION nei HEADER, contenente il token di sessione.
    Aggiunge o toglie l'id in POST-REQUEST-BODY dai preferiti dell'utente autenticato.
    Ritorna 200.
    """
    if not validators.is_authorization_header_present(request):
        return HttpResponseBadRequest('no_token')
    if not request.method == "POST":
        return HttpResponseForbidden('must_be_post')
    try:
        token = request.headers['authorization']
        user = Token.objects.get(token=token).user
        favorites = user.favorites
        target_favorite = json.loads(request.body)['id']
        operation = json.loads(request.body)['operation']
        if operation == "add":
            favorites.append(target_favorite)
            user.favorites = favorites
            user.save()
            return HttpResponse('ok')
        elif operation == 'remove':
            new_favorites = list(
                filter(mappers.remove_target_from_favorites(target_favorite), favorites))
            user.favorites = new_favorites
            user.save()
            return HttpResponse('ok')
        else:
            return HttpResponseBadRequest('invalid_json')
    except KeyError:
        pass
    except JSONDecodeError:
        return HttpResponseBadRequest('invalid_json')
    except ObjectDoesNotExist:
        pass
    except AttributeError:
        pass
    except:
        return HttpResponseServerError('server_failure')


@csrf_exempt
def update_application_status(request: HttpRequest):
    """
    METODO: POST
    Riceve AUTHORIZATION nei HEADER, contenente il token di sessione.
    Riceve in POST-BODY l'id della application da modificare e il nuovo stato da assegnare.
    Ritorna 200.

    TODO
        - Implementa: utente può modificare solo le proprie application
            (al momento con id e token esistenti si può modificare tutto)
    """
    if not validators.is_authorization_header_present(request):
        return HttpResponseBadRequest('no_token')
    if not request.method == "POST":
        return HttpResponseForbidden('must_be_post')
    if not validators.check_token_valid(request.headers['authorization']):
        return HttpResponseBadRequest('no_token')
    try:
        application_id = json.loads(request.body)['applicationId']
        new_status = json.loads(request.body)['newStatus']
        application: CallApplication = CallApplication.objects.get(
            id=application_id)
        application.status = new_status
        application.save()
        return HttpResponse('ok')
    except KeyError:
        pass
    except JSONDecodeError:
        return HttpResponseBadRequest('invalid_json')
    except ObjectDoesNotExist:
        pass
    except AttributeError:
        pass
    except:
        return HttpResponseServerError('server_failure')


@csrf_exempt
def get_user_posts(request: HttpRequest):
    """
    METODO: GET
    Riceve AUTHORIZATION nei HEADER, contenente il token di sessione.
    Ritorna i le call pubblicate dall'utente.
    """
    if not validators.is_authorization_header_present(request):
        return HttpResponseBadRequest('no_token')
    if not validators.check_token_valid(request.headers['authorization']):
        return HttpResponseBadRequest('no_token')
    try:
        token = request.headers['authorization']
        user = validators.check_token_valid_return_user(token)
        calls = Call.objects.filter(poster=user.uid)
        mapped_calls = list(map(mappers.calls_mapper_complete, calls))
        return HttpResponse(json.dumps(mapped_calls))
    except KeyError:
        pass
    except JSONDecodeError:
        return HttpResponseBadRequest('invalid_json')
    except ObjectDoesNotExist:
        pass
    except AttributeError:
        pass
    except:
        return HttpResponseServerError('server_failure')


@csrf_exempt
def get_user_applications(request: HttpRequest):
    """
    METODO: GET
    Riceve AUTHORIZATION nei HEADER, contenente il token di sessione.
    Ritorna le candidature dell'utente.
    """
    if not validators.is_authorization_header_present(request):
        return HttpResponseBadRequest('no_token')
    if not validators.check_token_valid(request.headers['authorization']):
        return HttpResponseBadRequest('no_token')
    try:
        token = request.headers['authorization']
        user = validators.check_token_valid_return_user(token)
        applications = CallApplication.objects.filter(applicant__uid=user.uid)
        mapped_applications = list(
            map(mappers.applications_mapper_with_target_id, applications))
        return HttpResponse(json.dumps(mapped_applications))
    except KeyError:
        pass
    except JSONDecodeError:
        return HttpResponseBadRequest('invalid_json')
    except ObjectDoesNotExist:
        pass
    except AttributeError:
        pass
    except Exception as e:
        print(type(e), e)
        return HttpResponseServerError('server_failure')
