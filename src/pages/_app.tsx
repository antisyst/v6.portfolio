import '@/styles/globals.scss';
import '@/styles/progress.scss';
import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import NProgress from 'nprogress';
import Router from 'next/router';
import Navigation from '@/components/navigation';
import HeadConfig from '@/utils/HeadConfig';
import Ellipse from '@/components/ellipse';
import Footer from '@/components/footer';
import { fetchInitialData } from '@/utils/api';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());



export default function App({ Component, pageProps }: AppProps) {

  const [isLoading, setIsLoading] = useState(true);
  const [initialData, setInitialData] = useState<any>(null); // Replace 'any' with the actual type of your data

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchInitialData(); 
        setInitialData(data);
      } catch (error) {
        console.error('Error fetching initial data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <HeadConfig/>
      <Navigation/>
      <Component {...pageProps} initialData={initialData} />
      <Ellipse/>
      <Footer/>
    </>
  );
}
