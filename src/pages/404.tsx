import { NextPage } from 'next';

import Container from '@/components/atoms/Container';

const Custom404: NextPage = () => {
  return (
    <Container
      className='flex flex-col h-full justify-center items-center'
      data-aos='fade-left'
    >
      <h2 className='text-xl lg:text-2xl animate-pulse'>
        Whoops, there doesn&apos;t seem to be anything here!
      </h2>
    </Container>
  );
};

export default Custom404;
