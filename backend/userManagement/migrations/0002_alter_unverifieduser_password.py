# Generated by Django 3.2.7 on 2021-09-09 16:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('userManagement', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='unverifieduser',
            name='password',
            field=models.CharField(max_length=128),
        ),
    ]
