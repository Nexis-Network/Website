// eslint-disable-next-line import/no-unresolved
import Hero from 'components/pages/ai/hero';
import Integration from 'components/pages/ai/integration';
import Logos from 'components/pages/ai/logos';
import Stats from 'components/pages/ai/stats';
// import Testimonials from 'components/pages/ai/testimonials';
import AnimatedBackground from 'components/shared/animatedbackground';
import CTAWithElephant from 'components/shared/cta-with-elephant';
import Layout from 'components/shared/layout';
import SplitViewGrid from 'components/shared/split-view-grid';
import SEO_DATA from 'constants/seo-data';
import compatibilityIcon from 'icons/ai/compatibility.svg';
import scalabilityIcon from 'icons/ai/scalability.svg';
import searchIcon from 'icons/ai/search.svg';
import updateIcon from 'icons/ai/update.svg';
import styles from 'styles/Loader.module.scss';
import getMetadata from 'utils/get-metadata';
import 'styles/globals.css';

export const metadata = getMetadata(SEO_DATA.ai);



const items = [
  {
    icon: updateIcon,
    title: 'Reliably fast',
    description: 'Nexis Network has block times of 400 milliseconds — and as hardware gets faster, so will the network.',
  },
  {
    icon: scalabilityIcon,
    title: 'Decentralized',
    description: 'The Nexis Network is validated by independent nodes, ensuring your data remains secure and censorship resistant.',
  },
  {
    icon: searchIcon,
    title: 'Blazingly fast search',
    description: 'Nexis Network uses a Delegated Proof of Stake network and other innovations minimize its impact on the environment.',
  },
  {
    icon: compatibilityIcon,
    title: 'Highly scalable',
    description: 'Get big, quick. Nexis Network is made to handle thousands of transactions per second.',
  },
];

const logos = [
  'bunnyshell',
  'hasura',
  'replit',
  'vercel',
  'illa',
  'octolis',
  'cloudflare',
  'airplane',
  'wundergraph',
  'fabric-io',
  'snaplet',
  'fl0',
  'dynaboard',
];


const AIPage = () => (
  <Layout
    className="bg-black-new text-white"
    headerTheme="black-new"
    footerTheme="black-new"
    footerWithTopBorder
  >
  <div className={styles.body}>
    <link
      rel="preload"
      href="/animations/pages/ai/scene.splinecode"
      as="fetch"
      crossOrigin="anonymous"
    />
    <Hero />
    <Stats className="mb-[136px] xl:mb-[104px] lg:mb-20 md:mb-16" />
    <Logos logos={logos} className="mt-[136px] xl:mt-[104px] lg:mt-20 md:mt-16" 
    withGreenFade />
    <Integration
    />
    <SplitViewGrid
      className="mt-52 xl:mt-36 lg:mt-[124px] md:mt-[88px]"
      label="Benefits"
      title="Build on Nexis"
      description="Use the power of Rust & Solidity to unlock new levels of efficiency in all of your Web3 applications."
      items={items}
      isGradientLabel
    />
    {/* removed testimonials section for now as part of removing the pg_embedding references */}
    {/* <Testimonials /> */}
    <CTAWithElephant
      className="mt-[180px] 2xl:mt-40 xl:mt-[125px] lg:mt-16"
      buttonClassName="px-14 xl:px-10 lg:px-9 sm:px-14"
      title="Build your Web3 app now with Nexis Network"
      description="Nexis Network offers a secure, highly-scalable, and low-cost infrastructure for all Web3 applications."
      buttonText="Contact Sales"
      buttonUrl="https://github.com/Nexis-Network"
      linkText="Learn more on GitHub"
      linkUrl="https://github.com/Nexis-Network"
      linkTarget="_blank"
    />
    </div>
    <AnimatedBackground />
  </Layout>
);

export default AIPage;
