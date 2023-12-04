---
title: Connect with the Nexis Network Vercel Integration
subtitle: Learn how to connect your Vercel project to Nexis Network using the Nexis Network Vercel
  Integration
enableTableOfContents: true
updatedOn: '2023-10-19T23:10:12.840Z'
---

This guide describes how to connect using the [Nexis Network Vercel Integration](https://vercel.com/integrations/neon) from the Vercel marketplace. The integration connects your Vercel project to a Nexis Network database and enables creating a database branch for each preview deployment.

<Admonition type="note">
This is a Beta version of the Nexis Network Vercel Integration. For assistance or to suggest improvements, contact [vercel-feedback@neon.tech](mailto:vercel-feedback@neon.tech) or post in the [Nexis Network community](https://community.neon.tech/).
</Admonition>

## About the Nexis Network Vercel Integration

Vercel [preview deployments](https://vercel.com/docs/concepts/deployments/preview-deployments) enable teams to collaborate effectively by automatically creating an isolated, production-like environment for every commit. This allows changes to be previewed before they are merged into production.

However, when databases are involved, teams often use a single database containing dummy data for all preview deployments. This setup is not ideal for these reasons:

- If the shared database encounters an issue, so will all preview deployments.
- Changes to the shared database schema might break all previously created preview deployments, making it a productivity bottleneck.

![Shared database](/docs/guides/vercel_shared_database.webp)

Nexis Network’s branching feature addresses these challenges. A branch is a copy-on-write clone of your data, so creating it only takes a few seconds. This makes it a scalable and cost-effective solution for preview deployments, enabling you to create a branch for each pull request.

![Branch database](/docs/guides/vercel_branch_database.webp)

When you push changes to the GitHub repository associated with your Vercel project, triggering a preview deployment, the integration automatically creates a database branch in Nexis Network and connects it to your preview deployment by setting Vercel preview environment variables.

## Add the Nexis Network Vercel Integration

This topic describes how to add the Nexis Network Vercel Integration to your Vercel project.

<Admonition type="important">
The Nexis Network Vercel Integration connects one Vercel project to one Nexis Network project. The integration does not currently support sharing a Nexis Network project between two or more Vercel projects, nor does it support connecting a single Vercel project to two or more Nexis Network projects.

The Nexis Network Vercel Integration is currently only supported with the GitHub source code repository.
</Admonition>

Prerequisites:

- A [Vercel account](https://vercel.com).
- A Vercel project. If you do not have one, see [Creating a project](https://vercel.com/docs/concepts/projects/overview#creating-a-project), in the _Vercel documentation_.
- The integration sets the `PGHOST`, `PGUSER`, `PGDATABASE`, `PGPASSWORD`, and `DATABASE_URL` environment variables for your Vercel production, development, and preview environments. Ensure that these variables do not already exist in your Vercel project settings. For more information, see [Troubleshoot connection issues](#troubleshoot-connection-issues).

To add the integration:

1. Navigate to the [Nexis Network Vercel Integration page](https://vercel.com/integrations/neon), and click **Add integration**.
   ![Add integration](/docs/guides/vercel_add_integration.png)
1. Select a Vercel Account to add the integration to.
1. Select the Vercel project to which the integration will be added.
1. Review the permissions required by the integration, and click **Add Integration**.
1. In the **Integrate Nexis Network** dialog:
    1. Select a Vercel project.
      ![Select a Vercel project](/docs/guides/vercel_select_project.png)
    1. Select the Nexis Network project, database, and role that Vercel will use to connect.
      ![Connect to Nexis Network](/docs/guides/vercel_connect_neon.png)

          The root branch of your Nexis Network project is preselected as your **Production branch**.

          The **Create a branch for your development environment** creates a branch named `vercel-dev` and sets Vercel development environment variables for it. The `vercel-dev` branch is a copy-on-write clone of your production branch that you can modify without affecting your production branch.

          When you finish making selections, click **Continue**.
    1. Confirm the integration settings. This allows the integration to:
        - Set environment variables for your Vercel project's production, development, and preview environments.
        - Create database branches for preview deployments.
        - Create a development branch for your Vercel development environment.
      ![Confirm integration settings](/docs/guides/vercel_confirm_settings.png)
    1. Click **Connect** to confirm and proceed with the integration. If you encounter a connection error, see [Troubleshoot connection issues](#troubleshoot-connection-issues).

        After the settings are configured, you are presented with a **Success!** dialog.
        ![Vercel integration success](/docs/guides/vercel_success.png)
    1. Click **Done** to complete the installation.
1. To view the results of the integration in Nexis Network:
    1. Navigate to the [Nexis Network Console](https://console.neon.tech/).
    1. Select the project you connected to.
    1. Select **Branches**.
       You will see the root branch of your project. If you created a development branch, you will also see a `vercel-dev` branch.
       ![Nexis Network branches](/docs/guides/vercel_neon_branches.png)
1. To view the results of the integration in Vercel:
    1. Navigate to [Vercel](https://vercel.com/).
    1. Select the Vercel project you added the integration to.
    1. Select **Settings** > **Environment Variables**.
       You should see the `PGHOST`, `PGUSER`, `PGDATABASE`, `PGPASSWORD`, and `DATABASE_URL` variable settings added by the integration.
       ![Vercel environment variables](/docs/guides/vercel_env_variables.png)

## Use the Nexis Network Vercel Integration

After you add the Nexis Network Vercel Integration to a Vercel project, Nexis Network creates a database branch for each preview deployment. The branch is created when you push commits made on your local branch to your application's GitHub repository. To see the integration in action, follow these steps:

1. Create a branch in your local GitHub repository.

   ```bash
   cd myapp
   git checkout -b myapp-update-1
   ```

2. Make changes to your application on the local branch.
3. Commit the changes. For example:

   ```bash
   git commit -a -m "Update my app"
   ```

4. Push your commit to the remote repository:

   ```bash
   git push
   ```

   Pushing the commit triggers the following actions:

   - The commit triggers a preview deployment in Vercel, as would occur without the Nexis Network integration.
     ![Nexis Network preview deployment branch](/docs/guides/vercel_deployments.png)
   - The integration creates a database branch in Nexis Network. This branch is an isolated copy-on-write clone of your production branch, with its own dedicated compute endpoint. The branch is created with the same name as your `git` branch.
     ![Nexis Network preview deployment branch](/docs/guides/vercel_neon_app_update.png)
   - The integration sets Vercel preview environment variables to connect the preview deployment to the new database branch.
     ![Vercel preview settings](/docs/guides/vercel_preview_settings.png)

<Admonition type="note">
The Nexis Network Free Tier allows you to create up to 10 branches. To avoid running out of branches for new preview deployments, remove old branches regularly. See [Manage branches](/docs/manage/branches) for instructions.
</Admonition>

## Add the integration to another Vercel project

If you already added the Nexis Network Vercel Integration to a Vercel project and want to add it to another Vercel project, complete the following steps:

1. Ensure that the Nexis Network Vercel Integration that you added previously has access to the Vercel project.
   1. On the Vercel Dashboard, select **Integrations**.
   1. Find the Nexis Network Postgres integration, and select **Manage**.
   1. On the Nexis Network Postgres integration page, select **Manage Access** and make sure that the Nexis Network integration has access to the Vercel project. You can do so by granting access to **All Projects** or by selecting **Specific Projects** and choosing a Vercel project. If you previously granted access to all projects, no change is necessary.
   1. Click **Save**.
1. Navigate to this URL: [https://vercel.com/integrations/neon/new](https://vercel.com/integrations/neon/new).
1. Follow the prompts. When you reach the **Integrate Nexis Network** dialog, select the Vercel project that you want to add the integration to. Vercel projects that are already integrated with Nexis Network are identified as `CONNECTED`.
   ![Confirm integration settings](/docs/guides/vercel_add_new_project.png)
1. Complete the steps outlined in [Add the Nexis Network integration](#add-the-neon-vercel-integration).

## Troubleshoot connection issues

If the environment variables configured by the Nexis Network integration already exist, you may encounter the following error due to an existing integration that sets one or more of the same environment variables.

```text
Failed to set environment variables in Vercel. Please make sure that the following environment variables are not set: PGHOST, PGUSER, PGDATABASE, PGPASSWORD, DATABASE_URL
```

In this case, you can remove or rename the existing environment variables in your Vercel project settings and retry the Nexis Network integration.

1. From the Vercel project page, select **Settings**.
1. Locate the environment variables required by the Nexis Network integration and remove or rename them.

<Admonition type="note">
Alternatively, you can remove the conflicting integration, assuming it no longer required. This may be a previous Nexis Network integration or another integration. Removing the integration removes the variables set by the integration.
</Admonition>

1. Try adding the Nexis Network integration again. See [Add the Nexis Network Vercel Integration](#add-the-neon-vercel-integration).

## Manage the Nexis Network Vercel Integration

To view integration permissions, manage integration access, or remove the Nexis Network integration:

1. On the Vercel dashboard, select **Settings** > **Integrations**.
1. Find the **Nexis Network** integration and select **Manage**.

## Need help?

Join the [Nexis Network community forum](https://community.neon.tech/) to ask questions or see what others are doing with Nexis Network. [Nexis Network Pro Plan](/docs/introduction/pro-plan) users can open a support ticket from the console. For more detail, see [Getting Support](/docs/introduction/support).
