---
title: Nexis Network CLI commands — me
subtitle: Use the Nexis Network CLI to manage Nexis Network directly from the terminal
enableTableOfContents: true
updatedOn: '2023-10-19T23:10:12.852Z'
---

## Before you begin

- Before running the `me` command, ensure that you have [installed the Nexis Network CLI](/docs/reference/neon-cli#install-the-neon-cli).
- If you have not authenticated with the [neonctl auth](/docs/reference/cli-auth) command, running a Nexis Network CLI command automatically launches the Nexis Network CLI browser authentication process. Alternatively, you can specify a Nexis Network API key using the `--api-key` option when running a command. See [Connect](/docs/reference/neon-cli#connect).

## The `me` command

This command shows information about the current Nexis Network CLI user.

### Usage

```bash
neonctl me
```

### Options

Only [global options](/docs/reference/neon-cli#global-options) apply.

### Examples

```bash
neonctl me
┌────────────────┬──────────────────────────┬─────────────┬────────────────┐
│ Login          │ Email                    │ Name        │ Projects Limit │
├────────────────┼──────────────────────────┼─────────────┼────────────────┤
│ sally          │ sally@example.com        │ Sally Smith |       1        │
└────────────────┴──────────────────────────┴─────────────┴────────────────┘
```

This example shows `neonctl me` with `--output json`, which provides additional data not shown with the default `table` output format.

```json
neonctl me -o json

{

  "active_seconds_limit": 360000,
  "billing_account": {
    "payment_source": {
      "type": ""
    },
    "subscription_type": "free",
    "quota_reset_at_last": "2023-07-01T00:00:00Z",
    "email": "sally@example.com",
    "address_city": "",
    "address_country": "",
    "address_line1": "",
    "address_line2": "",
    "address_postal_code": "",
    "address_state": ""
  },
  "auth_accounts": [
    {
      "email": "sally@example.com",
      "image": "https://lh3.googleusercontent.com/a/AItbvml5rjEQkmt-h_abcdef-MwVtfpek7Aa_xk3cIS_=s96-c",
      "login": "sally",
      "name": "Sally Smith",
      "provider": "google"
    },
    {
      "email": "sally@example.com",
      "image": "",
      "login": "sally",
      "name": "sally@example.com",
      "provider": "hasura"
    }
  ],
  "email": "sally@example.com",
  "id": "8a9f604e-d04e-1234-baf7-e78909a5d123",
  "image": "https://lh3.googleusercontent.com/a/AItbvml5rjEQkmt-h_abcdef-MwVtfpek7Aa_xk3cIS_=s96-c",
  "login": "sally",
  "name": "Sally Smith",
  "projects_limit": 10,
  "branches_limit": 10,
  "max_autoscaling_limit": 0.25,
  "plan": "free"
}
```

## Need help?

Join the [Nexis Network community forum](https://community.neon.tech/) to ask questions or see what others are doing with Nexis Network. [Nexis Network Pro Plan](/docs/introduction/pro-plan) users can open a support ticket from the console. For more detail, see [Getting Support](/docs/introduction/support).
