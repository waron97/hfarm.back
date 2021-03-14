from django.db import models

# Create your models here.


class User(models.Model):
    uid = models.AutoField(primary_key=True)
    username = models.CharField(max_length=30, unique=True)
    password = models.CharField(max_length=30)
    account_type = models.CharField(max_length=20)
    client_id = models.CharField(max_length=100, null=True)
    favorites = models.JSONField()

    def to_dict(self):
        pass


class Token(models.Model):
    id = models.AutoField(primary_key=True)
    token = models.CharField(max_length=200)
    user = models.ForeignKey(User, on_delete=models.CASCADE)


class Call(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=40)
    description = models.CharField(max_length=200)
    poster = models.ForeignKey(User, on_delete=models.CASCADE)
    client_id = models.CharField(max_length=100, null=True)
    type = models.CharField(max_length=20)
    time_posted = models.DateTimeField(auto_now_add=True)

    def to_dict(self):
        pass


class CallApplication(models.Model):
    id = models.AutoField(primary_key=True)
    status = models.CharField(max_length=50)
    application_target = models.ForeignKey(Call, on_delete=models.CASCADE)
    applicant = models.ForeignKey(User, on_delete=models.CASCADE)
    seniority = models.CharField(max_length=20)
    time_applied = models.DateTimeField(auto_now_add=True)

    def to_dict(self):
        return {
            'id': self.id,
            'status': 'self.status',
            'target': self.application_target.to_dict(),
            'applicant': self.applicant.to_dict(),
            'seniority': self.seniority,
            'timeApplied': self.time_applied.isoformat()
        }
