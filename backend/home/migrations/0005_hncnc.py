# Generated by Django 2.2.28 on 2023-07-06 10:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0004_auto_20230706_1010'),
    ]

    operations = [
        migrations.CreateModel(
            name='Hncnc',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('dhshd', models.BigIntegerField()),
            ],
        ),
    ]
