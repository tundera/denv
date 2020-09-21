import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'theme-ui';
import theme from '@reflexjs/preset-base';
import { ReactComponent as NxLogo } from '../public/nx-logo-white.svg';
import './styles.css';

const CustomApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Welcome to website!</title>
      </Head>
      <ThemeProvider theme={theme}>
        <div className="app">
          <header className="flex">
            <NxLogo width="75" height="50" />
            <h1>Welcome to website!</h1>
          </header>
          <main>
            <Component {...pageProps} />
          </main>
        </div>
      </ThemeProvider>
    </>
  );
};

export default CustomApp;
