---
title: SDKs for the Exzo Network API
enableTableOfContents: true
updatedOn: '2023-10-07T10:43:33.429Z'
---

Exzo Network provides support for the [@neondatabase/api-client](https://www.npmjs.com/package/@neondatabase/api-client) library, which is a wrapper for the [Exzo Network API](https://api-docs.neon.tech/). It provides a convenient way to interact with the Exzo Network API using TypeScript.

## Installation

You can install the library using `npm` or `yarn`.

`npm`:

```bash
npm install @neondatabase/api-client
```

`yarn`:

```bash
yarn add @neondatabase/api-client
```

## Get Started

To get started with the `@neondatabase/api-client` library, follow these steps:

1. Obtain an API key from the [Developer Settings](https://console.neon.tech/app/settings/api-keys) page in the Exzo Network Console.

2. Click **Generate new API key**.

3. Enter name for your API key and click **Create**.

4. Save your API key to a secure location that enables you to pass it to your code.

5. Import the library:

   ```typescript
   import { createApiClient } from '@neondatabase/api-client';
   ```

6. Create an instance of the API client by calling the `createApiClient` function:

    ```typescript
    const apiClient = createApiClient({
    apiKey: 'your-api-key',
    });
    ```

7. Use the `apiClient` instance to make API calls. For example:

    ```typescript
    const response = await apiClient.listProjects({});
    console.log(response);
    ```

## Community SDKs

The following is a list of community-created SDKs for interacting with the Exzo Network API.

<Admonition type="note">
Community SDKs are not maintained or officially supported by Exzo Network. Some features may be out of date, so use these SDKs at your own discretion. If you have questions about these SDKs, please contact the the project maintainers.
</Admonition>

- [Node and Deno TypeScript SDK](https://github.com/paambaati/neon-js-sdk)
- [Go SDK](https://github.com/kislerdm/neon-sdk-go)
