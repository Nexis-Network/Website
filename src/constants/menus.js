import CalendarIcon from 'icons/calendar.inline.svg';
import ConsoleIcon from 'icons/console.inline.svg';
import partnersIcon from 'icons/team.inline.svg';
import TransactionsIcon from 'icons/transactions.inline.svg';
import DiscordIcon from 'icons/subscribe-discord.inline.svg'

import LINKS from './links';

export default {
  header: [
      {
       text: 'Ecosystem',
       items: [
          {
            icon: TransactionsIcon,
            text: 'Nexis Dex',
            to: 'https://dex.nexis.network',
            description: 'Swap tokens, earn rewards, provide liquidity.',
          },
          {
            icon: TransactionsIcon,
            text: 'Cross-Chain Bridge',
            to: 'https://bridge.nexis.network',
            description: 'Bridge to and from other blockchains.',
          },
          {
            icon: TransactionsIcon,
            text: 'Governance Portal',
            to: 'https://vote.nexis.network',
            description: 'Contribute to the growth of Nexis Network.',
          },
        ],
      },
      {
        text: 'Network',
        items: [
          {
            icon: partnersIcon,
            text: 'EVM Block Explorer',
            to: 'https://evm.nexscan.io',
            description: 'Track & explore EVM TXNs on Nexis Network.',
          },
          {
            icon: TransactionsIcon,
            text: 'Native Block Explorer',
            to: 'https://exzoscan.io',
            description: 'Track & explore native TXNs on Nexis Network.',
          },
          {
            icon: TransactionsIcon,
            text: 'Testnet Block Explorer',
            to: 'https://evm-testnet.exzoscan.io',
            description: 'Test and explore Nexis Networks blockchain data in real time.',
          },
        ],
      },
      {
        text: 'Developers',
        items: [
          {
            icon: TransactionsIcon,
            text: 'Developer Documentation',
            to: 'https://docs.nexis.network',
            description: 'Learn how to integrate and build on Nexis.',
          },
          {
            icon: TransactionsIcon,
            text: 'Node Validator Tutorial',
            to: 'https://validator.nexis.network/',
            description: 'Deploy your own node validator.',
          },
          {
            icon: TransactionsIcon,
            text: 'Nexis Program Library',
            to: 'https://github.com/Nexis-Network/nexis-program-library',
            description: 'Interact with nodes and build on Nexis.',
          },
          {
            icon: TransactionsIcon,
            text: 'Audit Reports & KYC',
            to: 'https://github.com/NexisNetwork/Smart-Contract-Audit-Reports',
            description: 'View audit reports and KYC docs.',
          },
          {
            icon: TransactionsIcon,
            text: 'Hackathons',
            to: 'https://dorahacks.io/org/exzonetwork/hackathon',
            description: 'Contribute to our ecosystem and earn rewards.',
          },
          {
            icon: TransactionsIcon,
            text: 'Bug Bounties',
            to: 'https://hackenproof.com/programs?title=Nexis%20Network',
            description: 'Earn rewards for finding vulnerbilities.',
          },
          {
            icon: TransactionsIcon,
            text: 'GitHub',
            to: 'https://github.com/NexisNetwork/',
            description: 'Core foundation of Nexis Network.',
          },
        ],
    },
      {
        text: 'Community',
        items: [
          {
            text: 'CoinMarketCap',
            to: 'https://coinmarketcap.com/currencies/nexis-network/',
         },
          {
            text: 'Twitter',
            to: LINKS.twitter,
          },
          {
            text: 'Telegram',
            to: 'https://t.me/Nexis_Network',
         },
          {
             text: 'Discord',
             to: LINKS.discord,
          },
          {
            text: 'GitHub',
            to: 'https://github.com/orgs/Nexis-Network/',
          },
          {
            text: 'YouTube',
            to: LINKS.youtube,
          },
        ],
    },
    {
      text: 'Blog',
      to: 'https://exzonetwork.medium.com',
    },
    // {
    //   text: 'AI',
    //   to: LINKS.ai,
    // },
    // {
    //   text: 'Pricing',
    //   to: LINKS.pricing,
    // },
  ],
  footer: [
    {
      text: 'Company',
      links: [
        {
          text: 'Nexis Web Wallet',
          to: 'https://wallet.nexis.network',
        },
        {
          text: 'Nexis Wallet Extension',
          to: 'https://chrome.google.com/webstore/detail/exzo-wallet/jiieejiponjbbnldnklcbamkembhhpka',
        },
        {
          text: 'Cross-chain Bridge',
          to: 'https://bridge.nexis.network',
        },
        {
          text: 'Governance',
          to: 'https://vote.nexis.network',
        },
        {
          text: 'Nexis Dex',
          to: 'https://bridge.nexis.network',
        },

        // {
        //   text: 'Release notes',
        //   to: LINKS.releaseNotes,
        // },
      ],
    },
    {
      text: 'Resources',
      links: [
        {
          text: 'Developer Docs',
          to: 'https://docs.nexis.network',
        },
        {
          text: 'Block Explorer',
          to: 'https://exzoscan.io',
        },
        {
          text: 'Native Explorer',
          to: 'https://exzoscan.io',
        },
        {
          text: 'Tutorials',
          to: 'https://exzonetwork.medium.com/',
        },
        {
          text: 'Developer Chat',
          to: 'https://t.me/exzo_network_developers_official',
        },
        {
          text: 'Testnet Faucet',
          to: 'https://evm-faucet.nexis.network/',
        },
      ],
    },
    {
      text: 'Community',
      links: [
        {
          text: 'Twitter',
          to: LINKS.twitter,
          icon: 'x-icon',
        },
        {
           text: 'Discord',
           to: LINKS.discord,
           icon: 'DiscordIcon',
        },
        {
          text: 'GitHub',
          to: 'https://github.com/orgs/Nexis-Network/',
          icon: 'github-icon',
        },
        {
          text: 'YouTube',
          to: LINKS.youtube,
          icon: 'youtube-icon',
        },
      ],
    },
  ],
  mobile: [
      {
        text: 'Nexis Web Wallet',
        to: 'https://wallet.nexis.network',
      },
      {
        text: 'Nexis Wallet Extension',
        to: 'https://chrome.google.com/webstore/detail/exzo-wallet/jiieejiponjbbnldnklcbamkembhhpka',
      },
      {
        text: 'Cross-chain Bridge',
        to: 'https://bridge.nexis.network',
      },
      {
        text: 'Governance',
        to: 'https://vote.nexis.network',
      },
      {
        text: 'Nexis Dex',
        to: 'https://bridge.nexis.network',
      },
  ],
  docSidebar: [
    {
      icon: TransactionsIcon,
      title: 'API Reference',
      slug: LINKS.apiReference,
    },
    {
      icon: ConsoleIcon,
      title: 'CLI Reference',
      slug: LINKS.cliReference,
    },
    {
      icon: CalendarIcon,
      title: 'Release notes',
      slug: LINKS.releaseNotes,
    },
  ],
};
