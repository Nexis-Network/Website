import Hero from 'components/pages/careers/hero';
import JobsList from 'components/pages/careers/jobs-list';
import Layout from 'components/shared/layout';
import SubscribeMinimalistic from 'components/shared/subscribe-minimalistic';
import SEO_DATA from 'constants/seo-data';
import getMetadata from 'utils/get-metadata';

export const metadata = getMetadata(SEO_DATA.careers);

const CareersPage = () => (
  <Layout headerTheme="black">
    <Hero />
    <JobsList />
    <SubscribeMinimalistic />
  </Layout>
);

export default CareersPage;

export const revalidate = 60;
