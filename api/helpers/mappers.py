from hfarm.models import Call, CallApplication


def calls_mapper(call: Call):
    return {
        'id': call.id,
        'title': call.title,
        'poster': call.poster.uid,
        'clientId': call.poster.client_id,
        'type': call.type,
        'timePosted': call.time_posted.isoformat()
    }


def calls_mapper_complete(call: Call):
    from api.helpers.token_manager import get_applicants
    return {
        'id': call.id,
        'title': call.title,
        'poster': call.poster.uid,
        'clientId': call.poster.client_id,
        'type': call.type,
        'timePosted': call.time_posted.isoformat(),
        'applications': get_applicants(call)
    }


def remove_target_from_favorites(id):
    def inner(favorite):
        if favorite == id:
            return False
        else:
            return True
    return inner


def applications_mapper(application: CallApplication):
    return {
        'applicantId': application.applicant.uid,
        'applicantName': application.applicant.username,
        'applicantSeniority': application.seniority,
        'applicationStatus': application.status,
        'timeApplied': application.time_applied.isoformat(),
        'applicantType': application.applicant.account_type,
        'id': application.id
    }


def applications_mapper_with_target_id(application: CallApplication):
    return {
        'applicantId': application.applicant.uid,
        'applicantName': application.applicant.username,
        'applicantSeniority': application.seniority,
        'applicationStatus': application.status,
        'timeApplied': application.time_applied.isoformat(),
        'id': application.id,
        'target': {'id': application.application_target.id,
                   'title': application.application_target.title,
                   'poster': application.application_target.poster.uid,
                   'clientId': application.application_target.poster.client_id,
                   'type': application.application_target.type,
                   'timePosted': application.application_target.time_posted.isoformat()}
    }
