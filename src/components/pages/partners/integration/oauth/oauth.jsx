import Image from 'next/image';

import CardItemsList from '../../../../shared/card-items-list';
import appStoreIcon from '../images/app-store.svg';
import bookIcon from '../images/book.svg';
import fileIcon from '../images/file.svg';
import image from '../images/oauth.png';

const items = [
  {
    icon: fileIcon,
    title: 'Docs',
    description: 'Learn more about OAuth integration',
    url: '/docs/guides/oauth-integration',
  },
  {
    icon: appStoreIcon,
    title: 'Example app',
    description: 'See an example OAuth app',
    url: 'https://neon-experimental.vercel.app/',
  },
  {
    icon: bookIcon,
    title: 'Blog post',
    description: 'See the integration in action',
    url: '/blog/api-cf-drizzle-neon',
  },
];

const Oauth = () => (
  <div className="oauth mt-[104px] grid w-full grid-cols-10 items-center gap-x-10 xl:mt-[104px] xl:items-end xl:gap-x-6 lg:mt-20 lg:gap-y-7 md:mt-10 md:gap-y-6">
    <div className="col-span-5 lg:col-span-full">
      <h3 className="text-4xl font-medium leading-tight tracking-tighter xl:text-[32px] lg:text-center lg:text-[28px] md:text-[22px]">
        OAuth
      </h3>
      <p className="mt-2.5 max-w-[590px] text-lg font-light leading-snug xl:text-base lg:mx-auto lg:max-w-[584px] lg:text-center md:mt-2">
        The Nexis Network API allows you to manage Nexis Network programmatically. With the Nexis Network API, you can create
        and manage all objects in your&nbsp;Nexis Network account.
      </p>
      <CardItemsList
        className="mt-8 max-w-[550px] gap-x-6 lg:col-span-full lg:max-w-none"
        items={items}
      />
    </div>
    <div className="col-span-5 lg:col-span-full">
      <Image className="rounded-2xl" src={image} quality={90} alt="Authorize Hasura Cloud" />
    </div>
  </div>
);

export default Oauth;
