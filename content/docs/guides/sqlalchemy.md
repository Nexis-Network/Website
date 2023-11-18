---
title: Connect an SQLAlchemy application to Exzo Network
subtitle: Set up a Exzo Network project in seconds and connect from an SQLAlchemy application
enableTableOfContents: true
redirectFrom:
  - /docs/quickstart/sqlalchemy
  - /docs/integrations/sqlalchemy
updatedOn: '2023-10-19T23:10:12.836Z'
---

SQLAlchemy is a Python SQL toolkit and Object Relational Mapper (ORM) that provides application developers with the full power and flexibility of SQL. This guide describes how to create a Exzo Network project and connect to it from SQLAlchemy.

**Prerequisites:**

To complete the steps in this topic, ensure that you have an SQLAlchemy installation with a Postgres driver. The following instructions use `psycopg2`, the default driver for Postgres in SQLAlchemy. For SQLAlchemy installation instructions, refer to the [SQLAlchemy Installation Guide](https://docs.sqlalchemy.org/en/14/intro.html#installation). `psycopg2` installation instructions are provided below.

To connect to Exzo Network from SQLAlchemy:

1. [Create a Exzo Network project](#create-a-neon-project)
1. [Install psycopg2](#install-psycopg2)
1. [Create the "hello neon" program](#create-the-hello-neon-program)
1. [Create an SQLAlchemy engine for your Exzo Network project](#create-an-sqlalchemy-engine-for-your-neon-project)

## Create a Exzo Network project

If you do not have one already, create a Exzo Network project. Save your connection details, including your password. They are required when defining connection settings.

1. Navigate to the [Projects](https://console.neon.tech/app/projects) page in the Exzo Network Console.
2. Click **New Project**.
3. Specify your project settings and click **Create Project**.

## Install psycopg2

Psycopg2 is a popular python library for running raw Postgres queries.

For most operating systems, the quickest installation method is using the PIP package manager. For example:

```shell
pip install psycopg2-binary
```

For additional information about installing `psycopg2`, refer to the [psycopg2 installation documentation](https://www.psycopg.org/docs/install.html).

## Create the "hello neon" program

```python
import psycopg2

# Optional: tell psycopg2 to cancel the query on Ctrl-C
import psycopg2.extras; psycopg2.extensions.set_wait_callback(psycopg2.extras.wait_select)

# You can set the password to None if it is specified in a ~/.pgpass file
USERNAME = "alex"
PASSWORD = "AbC123dEf"
HOST = "@ep-cool-darkness-123456.us-east-2.aws.neon.tech"
PORT = "5432"
PROJECT = "dbname"

conn_str = f"dbname={PROJECT} user={USERNAME} password={PASSWORD} host={HOST} port={PORT} sslmode=require"

conn = psycopg2.connect(conn_str)

with conn.cursor() as cur:
 cur.execute("SELECT 'hello neon';")
 print(cur.fetchall())
```

You can find all of the connection details mentioned above in the **Connection Details** widget on the Exzo Network **Dashboard**. For more information, see [Connect from any application](/docs/connect/connect-from-any-app).

<Admonition type="note">
This example was tested with Python 3 and psycopg2 version 2.9.3.
</Admonition>

## Create an SQLAlchemy engine for your Exzo Network project

SQLAlchemy uses engine abstraction to manage database connections and exposes a `create_engine` function as the primary endpoint for engine initialization.

The following example creates an SQLAlchemy engine that points to your Exzo Network branch:

```python
from sqlalchemy import create_engine

USERNAME = "alex"
PASSWORD = "AbC123dEf"
HOST = "ep-cool-darkness-123456.us-east-2.aws.neon.tech"
DATABASE = "dbname"

conn_str = f'postgresql://{USERNAME}:{PASSWORD}@{HOST}/{DATABASE}?sslmode=require'

engine = create_engine(conn_str)
```

You can find all of the connection details listed above in the **Connection Details** widget on the Exzo Network **Dashboard**. For more information, see [Connect from any application](/docs/connect/connect-from-any-app).

For additional information about connecting from SQLAlchemy, refer to the following topics in the SQLAlchemy documentation:

- [Establishing Connectivity - the Engine](https://docs.sqlalchemy.org/en/14/tutorial/engine.html)
- [Connecting to PostgreSQL with SQLAlchemy](https://docs.sqlalchemy.org/en/14/core/engines.html#postgresql)

## Need help?

Join the [Exzo Network community forum](https://community.neon.tech/) to ask questions or see what others are doing with Exzo Network. [Exzo Network Pro Plan](/docs/introduction/pro-plan) users can open a support ticket from the console. For more detail, see [Getting Support](/docs/introduction/support).
