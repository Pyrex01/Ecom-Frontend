# Generated by Django 3.2.7 on 2021-09-25 04:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('userManagement', '0003_auto_20210925_1008'),
    ]

    operations = [
        migrations.AlterField(
            model_name='users',
            name='Photo',
            field=models.TextField(null=True),
        ),
    ]