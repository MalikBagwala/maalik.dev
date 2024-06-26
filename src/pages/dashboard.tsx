import { GetStaticProps, NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { SWRConfig } from 'swr';

import Container from '@/common/components/elements/Container';
import PageHeading from '@/common/components/elements/PageHeading';
import Dashboard from '@/modules/dashboard';
import { fetchContributions } from './api/contributions';
import { fetchWakatimeData } from './api/wakatime';
interface DashboardPageProps {
  fallback: any;
}

const PAGE_TITLE = 'Dashboard';
const PAGE_DESCRIPTION =
  'This is my personal dashboard, built with Next.js API routes deployed as serverless functions.';

const DashboardPage: NextPage<DashboardPageProps> = ({ fallback }) => {
  return (
    <SWRConfig
      value={{
        fallback,
        fetcher: (resource, init) =>
          fetch(resource, init).then((res) => res.json()),
      }}
    >
      <NextSeo title={`${PAGE_TITLE} - Malik Bagwala`} />
      <Container data-aos='fade-up'>
        <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
        <Dashboard />
      </Container>
    </SWRConfig>
  );
};

export default DashboardPage;

export const getStaticProps: GetStaticProps = async () => {
  const readStats = await fetchWakatimeData();
  const contributionsCalendar = await fetchContributions();
  return {
    props: {
      fallback: {
        '/api/wakatime': readStats,
        '/api/contributions': contributionsCalendar,
      },
    },
    revalidate: 300,
  };
};
