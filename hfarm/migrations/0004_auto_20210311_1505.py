# Generated by Django 3.1 on 2021-03-11 14:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('hfarm', '0003_auto_20210310_1851'),
    ]

    operations = [
        migrations.AddField(
            model_name='callapplication',
            name='seniority',
            field=models.CharField(default='Junior', max_length=20),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='user',
            name='applications',
            field=models.JSONField(default='[]'),
        ),
    ]
