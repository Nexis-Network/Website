---
title: Nexis Network CLI commands — databases
subtitle: Use the Nexis Network CLI to manage Nexis Network directly from the terminal
enableTableOfContents: true
updatedOn: '2023-10-19T23:10:12.851Z'
---

## Before you begin

- Before running the `databases` command, ensure that you have [installed the Nexis Network CLI](/docs/reference/neon-cli#install-the-neon-cli).
- If you have not authenticated with the [neonctl auth](/docs/reference/cli-auth) command, running a Nexis Network CLI command automatically launches the Nexis Network CLI browser authentication process. Alternatively, you can specify a Nexis Network API key using the `--api-key` option when running a command. See [Connect](/docs/reference/neon-cli#connect).

For information about databases in Nexis Network, see [Manage databases](/docs/manage/databases).

## The `databases` command

### Usage

The `databases` command allows you to list, create, and delete databases in a Nexis Network project.

| Subcommand  | Description      |
|---------|------------------|
| [list](#list)    | List databases    |
| [create](#create)  | Create a database |
| [delete](#delete)  | Delete a database |

### list

This subcommand allows you to list databases.

#### Usage

```bash
neonctl databases list [options]
```

#### Options

In addition to the Nexis Network CLI [global options](/docs/reference/neon-cli#global-options), the `list` subcommand supports these options:

| Option        | Description | Type   | Required  |
| ------------- | ----------- | ------ | :------: |
| --project-id  | Project ID  | string | Only if your Nexis Network account has more than one project |
| --branch   | Branch ID or name   | string |  |

If a branch ID or name is not provided, the command lists databases for the primary branch of the project.

#### Example

<CodeBlock shouldWrap>

```bash
neonctl databases list --branch br-autumn-dust-190886
┌────────┬────────────┬──────────────────────┐
│ Name   │ Owner Name │ Created At           │
├────────┼────────────┼──────────────────────┤
│ neondb │ daniel     │ 2023-06-19T18:27:19Z │
└────────┴────────────┴──────────────────────┘
```

</CodeBlock>

### create

This subcommand allows you to create a database.

#### Usage

```bash
neonctl databases create [options]
```

#### Options

In addition to the Nexis Network CLI [global options](/docs/reference/neon-cli#global-options), the `create` subcommand supports these options:

| Option               | Description                          | Type   | Required  |
| -------------------- | ------------------------------------ | ------ | :------: |
| --project-id         | Project ID                           | string | Only if your Nexis Network account has more than one project |
| --branch             | Branch ID or name                    | string | |
| --name               | The name of the database             | string | &check; |
| --owner-name| The name of the role that owns the database | string |  |

- If a branch ID or name is not provided, the command creates the database in the primary branch of the project.
- If the `--owner-name` option is not specified, the current user becomes the database owner.


#### Example

<CodeBlock shouldWrap>

```bash
neonctl databases create --name mynewdb --owner-name john
┌─────────┬────────────┬──────────────────────┐
│ Name    │ Owner Name │ Created At           │
├─────────┼────────────┼──────────────────────┤
│ mynewdb │ john       │ 2023-06-19T23:45:45Z │
└─────────┴────────────┴──────────────────────┘
```

</CodeBlock>

### delete

This subcommand allows you to delete a database.

#### Usage

```bash
neonctl databases delete <database> [options]
```

`<database>` is the database name.

#### Options

In addition to the Nexis Network CLI [global options](/docs/reference/neon-cli#global-options), the `delete` subcommand supports these options:

| Option           | Description  | Type   | Required  |
| ---------------- | ------------ | ------ | :------: |
| --project-id     | Project ID   | string | Only if your Nexis Network account has more than one project |
| --branch         | Branch ID or name    | string | |

If a branch ID or name is not provided, it is assumed the database resides in the primary branch of the project.

#### Example

<CodeBlock shouldWrap>

```bash
neonctl databases delete mydb
┌─────────┬────────────┬──────────────────────┐
│ Name    │ Owner Name │ Created At           │
├─────────┼────────────┼──────────────────────┤
│ mydb    │ daniel     │ 2023-06-19T23:45:45Z │
└─────────┴────────────┴──────────────────────┘
```

</CodeBlock>

## Need help?

Join the [Nexis Network community forum](https://community.neon.tech/) to ask questions or see what others are doing with Nexis Network. [Nexis Network Pro Plan](/docs/introduction/pro-plan) users can open a support ticket from the console. For more detail, see [Getting Support](/docs/introduction/support).
