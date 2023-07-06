# Generated by Django 3.2.18 on 2023-07-06 03:58

import django.db.models.deletion
import jsonfield.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0028_auto_20230227_2006'),
    ]

    operations = [
        migrations.CreateModel(
            name='PublishEvent',
            fields=[
                ('created_time', models.DateTimeField(auto_now_add=True, null=True)),
                ('updated_time', models.DateTimeField(auto_now=True, null=True)),
                ('created_by', models.CharField(blank=True, max_length=32, null=True)),
                ('updated_by', models.CharField(blank=True, max_length=32, null=True)),
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(blank=True, choices=[('generate release task', 'GenerateTask'), ('distribute configuration', 'DistributeConfiguration'), ('parse configuration', 'ParseConfiguration'), ('apply configuration', 'ApplyConfiguration'), ('load configuration', 'LoadConfiguration')], max_length=64)),
                ('step', models.IntegerField()),
                ('status', models.CharField(choices=[('success', 'SUCCESS'), ('failure', 'FAILURE'), ('pending', 'PENDING'), ('doing', 'DOING')], default='pending', max_length=16, verbose_name='status')),
                ('_detail', jsonfield.fields.JSONField(db_column='detail', default='{}', help_text='detail', null=True)),
                ('gateway', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='+', to='core.gateway')),
                ('publish_id', models.ForeignKey(db_column='publish_id', on_delete=django.db.models.deletion.CASCADE, related_name='+', to='core.releasehistory')),
                ('stage', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='+', to='core.stage')),
            ],
            options={
                'verbose_name': 'PublishEvent',
                'verbose_name_plural': 'PublishEvent',
                'db_table': 'core_publish_event',
                'unique_together': {('gateway_id', 'publish_id')},
            },
        ),
    ]
