import '@/styles/globals.scss';
import '@/styles/progress.scss';
import type { AppProps } from 'next/app';
import NProgress from 'nprogress';
import Router from 'next/router';
import Navigation from '@/components/navigation';
import HeadConfig from '@/utils/HeadConfig';
import Ellipse from '@/components/ellipse';
import Footer from '@/components/footer';
import EnergySavingWidget from '@/components/energy';
import Socials from '@/components/socials';
import Loader from '@/components/loader';
import { Provider } from 'react-redux';
import { store } from '../state/store';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());



export default function App({ Component, pageProps }: AppProps) {


  return (
     <Provider store={store}>
          <EnergySavingWidget/>
          <Loader/>
          <HeadConfig/>
          <Navigation/>
          <Socials/>
          <Component {...pageProps}  />
          <Ellipse/>
          <Footer/>
     </Provider>
  );
}
