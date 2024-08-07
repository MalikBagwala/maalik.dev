import clsx from 'clsx';
import { useTheme } from 'next-themes';
import { ReactNode } from 'react';
import { Rubik } from 'next/font/google';

const rubik = Rubik({
  weight: ['400', '500', '600'],
  display: 'swap',
  preload: true,
  variable: '--font-rubik',
  subsets: ['latin', 'latin-ext'],
});
import useHasMounted from '@/hooks/useHasMounted';

import Sidebar from '../atoms/Sidebar';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { resolvedTheme } = useTheme();
  const hasMounted = useHasMounted();

  const isDarkTheme =
    hasMounted && (resolvedTheme === 'dark' || resolvedTheme === 'system');

  return (
    <>
      <div
        className={clsx(
          'max-w-6xl mx-auto lg:px-8 lg:py-4 xl:py-8',
          isDarkTheme ? 'dark:text-darkText' : '',
          rubik.variable,
          'font-sans',
        )}
      >
        <div className='flex flex-col lg:flex-row lg:gap-5'>
          <header className='lg:w-1/5'>
            <Sidebar />
          </header>
          <main className='lg:w-4/5 max-w-[854px] transition-all duration-300'>
            {children}
          </main>
        </div>
      </div>
    </>
  );
};

export default Layout;
