# Generated by Django 2.2.28 on 2023-07-06 10:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0003_auto_20230706_0944'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='sdft',
            name='xvvss',
        ),
        migrations.AddField(
            model_name='sdft',
            name='xvvss12',
            field=models.BigIntegerField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='sdft',
            name='cbdd',
            field=models.BigIntegerField(blank=True),
        ),
    ]
