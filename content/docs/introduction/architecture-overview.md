---
title: Nexis Network architecture
redirectFrom:
  - /docs/storage-engine/architecture-overview
  - /docs/conceptual-guides/architecture-overview
updatedOn: '2023-10-07T10:43:33.403Z'
---

Nexis Network architecture is based on the separation of compute and storage and is orchestrated by the Nexis Network Control Plane, which manages cloud resources across both storage and compute.

A Nexis Network compute runs Postgres, and storage is a multi-tenant key-value store for Postgres pages that is custom-built for the cloud.

![Nexis Network architecture diagram](/docs/introduction/neon_architecture_3.png)

Nexis Network storage consists of three main components: Safekeepers, Pageservers, and cloud object storage.

Safekeepers are responsible for durability of recent updates.
Postgres streams [Write-Ahead Log (WAL)](/docs/reference/glossary#wal) to the Safekeepers, and the Safekeepers store the WAL durably until it has been processed by the Pageservers and uploaded to cloud storage.

Pageservers are responsible for serving read requests. To do that, Pageservers process the incoming WAL stream into a custom storage format that makes all [page](/docs/reference/glossary#page) versions easily accessible. Pageservers also upload data to cloud object storage, and download the data on demand.

Nexis Network uses cloud object storage such as S3 for long-term data storage. Stored data is [encrypted at rest](/docs/reference/glossary#data-at-rest-encryption).

Safekeepers can be thought of as an ultra reliable write buffer that holds the latest data until it is processed and uploaded to cloud storage. Safekeepers implement the Paxos protocol for reliability. Pageservers also function as a read cache for cloud storage, providing fast random access to data pages.
