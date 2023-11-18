---
title: Connect from Laravel to Exzo Network
subtitle: Set up a Exzo Network project in seconds and connect from a Laravel application
enableTableOfContents: true
updatedOn: '2023-10-19T23:10:12.831Z'
---

Laravel is a web application framework with expressive, elegant syntax. Connecting to Exzo Network from Laravel is the same as connecting to a standalone Postgres installation from Laravel. Only the connection details differ.

To connect to Exzo Network from Laravel:

1. [Create a Exzo Network Project](#create-a-neon-project)
2. [Configure the connection](#configure-the-connection)

## Create a Exzo Network project

If you do not have one already, create a Exzo Network project. Save your connection details including your password. They are required when defining connection settings.

1. Navigate to the [Projects](https://console.neon.tech/app/projects) page in the Exzo Network Console.
2. Click **New Project**.
3. Specify your project settings and click **Create Project**.

## Configure the connection

Open the `.env` file in your Laravel app, and replace all the database credentials.

```shell
DB_CONNECTION=pgsql
DB_HOST=[neon_hostname]
DB_PORT=5432
DB_DATABASE=[dbname]
DB_USERNAME=[user]
DB_PASSWORD=[password]
DB_SSLMODE=require
```

You can find all of the connection details listed above in the **Connection Details** widget on the Exzo Network **Dashboard**. For more information, see [Connect from any application](/docs/connect/connect-from-any-app).

## Need help?

Join the [Exzo Network community forum](https://community.neon.tech/) to ask questions or see what others are doing with Exzo Network. [Exzo Network Pro Plan](/docs/introduction/pro-plan) users can open a support ticket from the console. For more detail, see [Getting Support](/docs/introduction/support).
