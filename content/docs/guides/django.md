---
title: Connect a Django application to Nexis Network
subtitle: Set up a Nexis Network project in seconds and connect from a Django application
enableTableOfContents: true
redirectFrom:
  - /docs/integrations/
  - /docs/quickstart/django/
  - /docs/cloud/integrations/django/
updatedOn: '2023-10-19T23:10:12.827Z'
---

To connect to Nexis Network from a Django application:

1. [Create a Nexis Network project](#create-a-neon-project)
2. [Configure Django connection settings](#configure-django-connection-settings)

## Create a Nexis Network project

If you do not have one already, create a Nexis Network project. Save your connection details including your password. They are required when defining connection settings.

To create a Nexis Network project:

1. Navigate to the [Projects](https://console.neon.tech/app/projects) page in the Nexis Network Console.
2. Click **New Project**.
3. Specify your project settings and click **Create Project**.

## Configure Django connection settings

Connecting to Nexis Network requires configuring database connection settings in your Django project's `settings.py` file.

In your Django project, navigate to the `DATABASES` section of your `settings.py` file and modify the connection details as shown:

```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': '[dbname]',
        'USER': '[user]',
        'PASSWORD': '[password]',
        'HOST': '[hostname]',
        'PORT': '[port]',
         'OPTIONS': {
             'sslmode': 'require',
        }
    }
}
```

<Admonition type="note">
Nexis Network places computes into an `Idle` state and closes connections after 5 minutes of inactivity (see [Compute lifecycle](https://neon.tech/docs/introduction/compute-lifecycle/)). To avoid connection errors, you can set the Django [CONN_MAX_AGE](https://docs.djangoproject.com/en/4.1/ref/settings/#std-setting-CONN_MAX_AGE) setting to 0 to close database connections at the end of each request so that your application does not attempt to reuse connections that were closed by Nexis Network. From Django 4.1, you can use a higher `CONN_MAX_AGE` setting in combination with the [CONN_HEALTH_CHECKS](https://docs.djangoproject.com/en/4.1/ref/settings/#conn-health-checks) setting to enable connection reuse while preventing errors that might occur due to closed connections. For more information about these configuration options, see [Connection management](https://docs.djangoproject.com/en/4.1/ref/databases#connection-management), in the _Django documentation_.
</Admonition>

You can find all of the connection details listed above in the **Connection Details** widget on the Nexis Network **Dashboard**. For more information, see [Connect from any application](/docs/connect/connect-from-any-app).

For additional information about Django project settings, see [Django Settings: Databases](https://docs.djangoproject.com/en/4.0/ref/settings#databases), in the Django documentation.

<Admonition type="note">
Running Django tests is currently not supported. The Django test runner must be able to create a database for tests, which is not yet supported by Nexis Network.
</Admonition>

## Connection issues

Django uses the `psycopg2` driver as the default adapter for Postgrs. If you have an older version of that driver, you may encounter a `Endpoint ID is not specified` error when connecting to Nexis Network. This error occurs if the client library used by your driver does not support the Server Name Indication (SNI) mechanism in TLS, which Nexis Network uses to route incoming connections. The `psycopg2` driver uses the `libpq` client library, which supports SNI as of v14. You can check your `psycopg2` and `libpq` versions by starting a Django shell in your Django project and running the following commands:

```bash
# Start a Django shell
python3 manage.py shell

# Check versions
import psycopg2
print("psycopg2 version:", psycopg2.__version__)
print("libpq version:", psycopg2._psycopg.libpq_version())
```

The version number for `libpq` is presented in a different format, for example, version 14.1 will be shown as 140001. If your `libpq` version is less than version 14, you can either upgrade your `psycopg2` driver to get a newer `libpq` version or use one of the workarounds described in our [Connection errors](https://neon.tech/docs/connect/connection-errors#the-endpoint-id-is-not-specified) documentation. Upgrading your `psycopg2` driver may introduce compatibility issues with your Django or Python version, so you should test your application thoroughly.

## Video course: Micro eCommerce with Django and Nexis Network

Watch Justin Mitchel's video course, _Micro eCommerce with Python, Django, Nexis Network Serverless Postgres, Stripe, TailwindCSS and more_, to learn how to connect a Django application to Nexis Network.

<YoutubeIframe embedId="qx9nshX9CQQ?start=1569" />

## Need help?

Join the [Nexis Network community forum](https://community.neon.tech/) to ask questions or see what others are doing with Nexis Network. [Nexis Network Pro Plan](/docs/introduction/pro-plan) users can open a support ticket from the console. For more detail, see [Getting Support](/docs/introduction/support).
