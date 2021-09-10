# Generated by Django 3.2.7 on 2021-09-09 16:03

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('userManagement', '0001_initial'),
        ('addressCollection', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Belongs',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Sub_Categorie', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='Categorie',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Type', models.CharField(max_length=30)),
            ],
        ),
        migrations.CreateModel(
            name='CompletedOrders',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Order_date', models.DateField(auto_now_add=True)),
                ('Delivery_Date', models.DateField()),
                ('Quantity', models.IntegerField()),
                ('Tracking_ID', models.CharField(max_length=20)),
                ('Address_ID', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='addressCollection.address')),
                ('Customers_ID', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='userManagement.users')),
            ],
        ),
        migrations.CreateModel(
            name='Items',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Name', models.CharField(max_length=60)),
                ('Price', models.CharField(max_length=10)),
                ('Product_details', models.JSONField()),
                ('Quantity', models.IntegerField()),
                ('Belongs_ID', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='store.belongs')),
            ],
        ),
        migrations.CreateModel(
            name='Wish_List',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Items_ID', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='store.items')),
                ('User_ID', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='userManagement.users')),
            ],
        ),
        migrations.CreateModel(
            name='Return_Items',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Pick_up_date', models.DateField()),
                ('Tracking_ID', models.CharField(max_length=20)),
                ('Recived_Date', models.DateField()),
                ('CompletedOrders_ID', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='store.completedorders')),
            ],
        ),
        migrations.CreateModel(
            name='Orders',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Status', models.CharField(choices=[('O', 'ORDERED'), ('D', 'DISPATCHED'), ('S', 'SHIPED'), ('OD', 'OUT FOR DELIVERY'), ('D', 'DONE')], max_length=2)),
                ('Order_date', models.DateField(auto_now_add=True)),
                ('Quantity', models.IntegerField()),
                ('Tracking_ID', models.CharField(max_length=20)),
                ('Address_ID', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='addressCollection.address')),
                ('Customers_ID', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='userManagement.users')),
                ('Items_ID', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='store.items')),
            ],
        ),
        migrations.AddField(
            model_name='completedorders',
            name='Items_ID',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='store.items'),
        ),
        migrations.CreateModel(
            name='Cart',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Items_ID', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='store.items')),
                ('User_ID', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='userManagement.users')),
            ],
        ),
        migrations.AddField(
            model_name='belongs',
            name='Categorie_ID',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='store.categorie'),
        ),
    ]
