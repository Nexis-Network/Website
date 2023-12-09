import SEO_DATA from 'constants/seo-data';
import getMetadata from 'utils/get-metadata';

import AIPage from './ai/page';

export const metadata = getMetadata(SEO_DATA.index);

const Home = () => (
    <AIPage/>
);

export default Home;

export const revalidate = 60;
