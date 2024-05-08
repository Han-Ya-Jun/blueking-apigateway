# Generated by Django 3.2.25 on 2024-05-07 10:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0039_auto_update_1_13'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='sslcertificate',
            name='gateway',
        ),
        migrations.AlterUniqueTogether(
            name='sslcertificatebinding',
            unique_together=None,
        ),
        migrations.RemoveField(
            model_name='sslcertificatebinding',
            name='gateway',
        ),
        migrations.RemoveField(
            model_name='sslcertificatebinding',
            name='ssl_certificate',
        ),
        migrations.RemoveField(
            model_name='stageitem',
            name='api',
        ),
        migrations.AlterUniqueTogether(
            name='stageitemconfig',
            unique_together=None,
        ),
        migrations.RemoveField(
            model_name='stageitemconfig',
            name='api',
        ),
        migrations.RemoveField(
            model_name='stageitemconfig',
            name='stage',
        ),
        migrations.RemoveField(
            model_name='stageitemconfig',
            name='stage_item',
        ),
        migrations.RemoveField(
            model_name='proxy',
            name='backend_config_type',
        ),
        migrations.RemoveField(
            model_name='proxy',
            name='backend_service',
        ),
        migrations.AlterField(
            model_name='publishevent',
            name='name',
            field=models.CharField(blank=True, choices=[('validata_configuration', '配置校验'), ('generate_release_task', '生成发布任务'), ('distribute_configuration', '下发配置'), ('parse_configuration', '解析配置'), ('apply_configuration', '应用配置'), ('load_configuration', '加载配置')], max_length=64),
        ),
        migrations.DeleteModel(
            name='BackendService',
        ),
        migrations.DeleteModel(
            name='SslCertificate',
        ),
        migrations.DeleteModel(
            name='SslCertificateBinding',
        ),
        migrations.DeleteModel(
            name='StageItem',
        ),
        migrations.DeleteModel(
            name='StageItemConfig',
        ),
    ]
