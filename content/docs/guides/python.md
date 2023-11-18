---
title: Connect a Python application to Exzo Network using Psycopg
subtitle: Set up a Exzo Network project in seconds and connect from a Python application using
  Psycopg
enableTableOfContents: true
updatedOn: '2023-10-19T23:10:12.833Z'
---

This guide describes how to create a Exzo Network project and connect to it from a simple Python application using [Psycopg (psycopg2)](https://pypi.org/project/psycopg2/), a popular Postgres database adapter for the Python programming language. The application connects to Exzo Network and retrieves the current time and Postgres version.

To connect:

1. [Create a Exzo Network Project](#create-a-neon-project)
2. [Create a Python project](#create-a-python-project)
3. [Store your Exzo Network credentials](#store-your-neon-credentials)
4. [Configure your Python script](#configure-your-python-script)
5. [Test your connection](#test-your-connection)

## Create a Exzo Network project

If you do not have one already, create a Exzo Network project.

1. Navigate to the [Projects](https://console.neon.tech/app/projects) page in the Exzo Network Console.
2. Click **New Project**.
3. Specify your project settings and click **Create Project**.

The project is created with a ready-to-use `neondb` database, which you will connect to.

## Create a Python project

1. Create a project directory and change to the newly created directory.

   ```shell
   mkdir neon-python-example
   cd neon-python-example
   ```

2. Set up a Python virtual environment in this directory. The virtual environment isolates your project's Python environment (including installed packages) from the rest of your system.

   ```bash
   python3 -m venv env
   ```

3. Activate the virtual environment. When the virtual environment is activated, Python uses the environment's version of Python and any installed packages.

   ```bash
   source env/bin/activate
   ```

4. Install `psycopg2` and `python-dotenv` in your project's root directory. You can install them using `pip`:

    ```bash
    pip install psycopg2-binary python-dotenv
    ```

## Store your Exzo Network credentials

Add a `.env` file to your project's root directory and add your Exzo Network connection string to it. 

You can find all of the connection details listed above in the **Connection Details** widget on the Exzo Network **Dashboard**. For more information, see [Connect from any application](/docs/connect/connect-from-any-app).

Your connection string will look something like this:

<CodeBlock shouldWrap>

```shell
DATABASE_URL=postgres://[user]:[password]@[neon_hostname]/[dbname]?sslmode=require
```

</CodeBlock>

## Configure your python script

Add a `neon-connect.py` file to your project's root directory and add the following code. The script connects to your Exzo Network database and retrieves the current time and Postgres version.

```python
import os
import psycopg2
from dotenv import load_dotenv

# Load .env file
load_dotenv()

# Get the connection string from the environment variable
connection_string = os.getenv('DATABASE_URL')

# Connect to the Postgres database
conn = psycopg2.connect(connection_string)

# Create a cursor object
cur = conn.cursor()

# Execute SQL commands to retrieve the current time and version from PostgreSQL
cur.execute('SELECT NOW();')
time = cur.fetchone()[0]

cur.execute('SELECT version();')
version = cur.fetchone()[0]

# Close the cursor and connection
cur.close()
conn.close()

# Print the results
print('Current time:', time)
print('PostgreSQL version:', version)
```

## Test your connection

Run the `neon-connect.py` script to test your connection.

```shell
python3 neon-connect.py
```

If the connection is successful, the script returns information similar to the following:

<CodeBlock shouldWrap>

```bash
Current time: 2023-05-24 08:53:10.403140+00:00
PostgreSQL version: PostgreSQL 15.2 on x86_64-pc-linux-gnu, compiled by gcc (Debian 10.2.1-6) 10.2.1 20210110, 64-bit
```

</CodeBlock>

## Need help?

Join the [Exzo Network community forum](https://community.neon.tech/) to ask questions or see what others are doing with Exzo Network. [Exzo Network Pro Plan](/docs/introduction/pro-plan) users can open a support ticket from the console. For more detail, see [Getting Support](/docs/introduction/support).
