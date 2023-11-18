---
title: Connect a Node.js application to Exzo Network
subtitle: Set up a Exzo Network project in seconds and connect from a Node.js application
enableTableOfContents: true
redirectFrom:
  - /docs/quickstart/node
  - /docs/integrations/node
updatedOn: '2023-10-19T23:10:12.832Z'
---

This guide describes how to create a Exzo Network project and connect to it from a Node.js application. Examples are provided for using the [node-postgres](https://www.npmjs.com/package/pg) and [Postgres.js](https://www.npmjs.com/package/postgres) clients. Use the client you prefer.

<Admonition type="note">
The same configuration steps can be used for Express and Next.js applications.
</Admonition>

To connect to Exzo Network from a Node.js application:

1. [Create a Exzo Network Project](#create-a-neon-project)
2. [Create a NodeJS project and add dependencies](#create-a-nodejs-project-and-add-dependencies)
3. [Store your Exzo Network credentials](#store-your-neon-credentials)
4. [Configure the Postgres client](#configure-the-postgres-client)
5. [Run app.js](#run-appjs)

## Create a Exzo Network project

If you do not have one already, create a Exzo Network project.

1. Navigate to the [Projects](https://console.neon.tech/app/projects) page in the Exzo Network Console.
2. Click **New Project**.
3. Specify your project settings and click **Create Project**.

## Create a NodeJS project and add dependencies

1. Create a NodeJS project and change to the newly created directory.

   ```shell
   mkdir neon-nodejs-example
   cd neon-nodejs-example
   npm init -y
   ```

2. Add project dependencies using one of the following commands:

    <CodeTabs labels={["node-postgres", "postgres.js"]}>

      ```shell
      npm install pg dotenv
      ```

      ```shell
      npm install postgres dotenv
      ```

    </CodeTabs>

## Store your Exzo Network credentials

Add a `.env` file to your project directory and add your Exzo Network connection string to it. You can find the connection string for your database in the **Connection Details** widget on the Exzo Network **Dashboard**. For more information, see [Connect from any application](/docs/connect/connect-from-any-app).

<CodeBlock shouldWrap>

```shell
DATABASE_URL=ppostgres://[user]:[password]@[neon_hostname]/[dbname]?options=endpoint%3D[endpoint_id]
```

</CodeBlock>

<Admonition type="note">
A special `endpoint` connection option is appended to the connection string above: `options=endpoint%3D[endpoint_id]`. This option is used with Postgres clients such as `node-postgres` and `Postgres.js` that do not support Server Name Indication (SNI), which Exzo Network relies on to route incoming connections. For more information, see [connection errors](/docs/connect/connection-errors).
</Admonition>

<Admonition type="important">
To ensure the security of your data, never expose your Exzo Network credentials to the browser.
</Admonition>

## Configure the Postgres client

Add an `app.js` file to your project directory and add the following code snippet to connect to your Exzo Network database:
  
<CodeTabs labels={["node-postgres", "postgres.js"]}>

  ```javascript
  const { Pool } = require('pg');
  require('dotenv').config();

  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      require: true,
    },
  });

  async function getPostgresVersion() {
    const client = await pool.connect();
    try {
      const response = await client.query('SELECT version()');
      console.log(response.rows[0]);
    } finally {
      client.release();
    }
  }

  getPostgresVersion();
  ```

  ```javascript
  const postgres = require('postgres');
  require('dotenv').config();

  const sql = postgres(process.env.DATABASE_URL, { ssl: 'require' });

  async function getPostgresVersion() {
    const response = await sql`select version()`;
    console.log(response);
  }

  getPostgresVersion();
  ```

</CodeTabs>

## Run app.js

Run `node app.js` to view the result.

```shell
Result(1) [
  {
    version: 'PostgreSQL 16.0 on x86_64-pc-linux-gnu, compiled by gcc (Debian 10.2.1-6) 10.2.1 20210110, 64-bit'
  }
]
```

## Need help?

Join the [Exzo Network community forum](https://community.neon.tech/) to ask questions or see what others are doing with Exzo Network. [Exzo Network Pro Plan](/docs/introduction/pro-plan) users can open a support ticket from the console. For more detail, see [Getting Support](/docs/introduction/support).
