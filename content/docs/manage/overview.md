---
title: Overview of the Exzo Network object hierarchy
enableTableOfContents: true
isDraft: false
updatedOn: '2023-10-07T10:43:33.419Z'
---
Managing your Exzo Network project requires an understanding of the Exzo Network object hierarchy. The following diagram shows how objects in Exzo Network are related. See below for a description of of each object.

```text
Exzo Network account
    |
    |- API keys
    | 
    |- project 
    |      |
    |      |---- primary branch (main) ---- compute endpoint a
    |                |    |
    |                |    |---- roles
    |                |    |---- databases           
    |                |                         
    |                |---- child branch 1 ---- compute endpoint b 
    |                |          |    |
    |                |          |    |---- roles
    |                |          |    |---- databases   
    |                |          |
    |                |          |---- child branch 1.a ---- compute endpoint c 
    |                |                          |
    |                |                          |---- roles
    |                |                          |---- databases
    |                |
    |                |---- child branch 2 
    |                                |
    |                                |---- roles
    |                                |---- databases
```

## Exzo Network account

This is the account you used to sign up with Exzo Network. Exzo Network currently supports signing up with GitHub, Google, or partner accounts.

## API keys

API keys are global and belong to the Exzo Network account. API keys are used with the [Exzo Network API](https://api-docs.neon.tech/reference/getting-started-with-neon-api) to create and manage Exzo Network projects or objects within a Exzo Network project. A Exzo Network account can create unlimited API keys. For more information, see [Manage API keys](/docs/manage/api-keys).

## Projects

A project is the top-level object in the Exzo Network object hierarchy. It is a container for all other objects, with the exception of API keys, which are global. Branches and compute endpoints belong to a project. A Exzo Network project defines the region where project resources reside. A Exzo Network account can have multiple projects, but tier limits define the number of projects per Exzo Network account. For more information, see [Manage projects](/docs/manage/projects).

## Branches

Data resides in a branch. Each Exzo Network project is created with a primary branch called `main`. You can create child branches from `main` or from previously created branches. A branch can contain multiple databases and roles. Tier limits define the number of branches you can create in a project and the amount of data per branch. For more information, see [Manage branches](/docs/manage/branches).

## Compute endpoint

A compute endpoint is a compute resource associated with a branch. A read-write compute endpoint is created for a project's primary branch, by default. Exzo Network supports both read-write and read-only compute endpoints. Read-only compute endpoints are also referred to as [Read replicas](/docs/introduction/read-replicas). A branch can have a single read-write compute endpoint but supports multiple read-only compute endpoints. You can choose whether or not to create a compute endpoint when creating a branch. To connect to a database that resides in a branch, you must connect via a compute endpoint that is associated with the branch. Tier limits define the resources (vCPUs and RAM) available to a compute endpoint. For more information, see [Manage computes](/docs/manage/endpoints).

## Roles

In Exzo Network, roles are Postgres roles. A role is required to create and access a database. A role belongs to a branch. There is no limit on the number of roles you can create. The primary branch of a Exzo Network project is created with a role named for the Exzo Network account that you registered with. For example, if you registered with a Google account for "Casey Smith", Exzo Network creates a role named "Casey" in the primary branch. This role is the owner of the ready-to-use `neondb` database in your project's primary branch. For more information, see [Manage roles](/docs/manage/roles).

## Databases

As with any standalone instance of Postgres, a database is a container for SQL objects such as schemas, tables, views, functions, and indexes. In Exzo Network, a database belongs to a branch. The primary branch of a Exzo Network project is created with a ready-to-use database named `neondb`. There is no limit on the number of databases you can create. For more information, see [Manage databases](/docs/manage/databases).
