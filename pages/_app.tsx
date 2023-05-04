import Nav from '@/components/Nav';
import '@/styles/globals.css';
import type { AppProps, AppContext } from 'next/app';
import { Store } from '@/types/types';
import { getStore } from '@/api/user';

interface MyAppProps extends AppProps {
  store: { store: Store };
}

export default function MyApp({ Component, pageProps, store }: MyAppProps) {
  return (
    <>
      <Nav store={store} />
      <Component {...pageProps} store={store} />
    </>
  );
}

MyApp.getInitialProps = () => {
  if (typeof window === undefined) {
    //server
    return { store: { users: [], currentUser: null } };
  } else {
    //client
    return { store: getStore() };
  }
};
