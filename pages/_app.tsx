import React from 'react'
// components
import Layout from '../components/Layout'
// helpers
import Head from 'next/head';
import { Analytics } from '@vercel/analytics/react';
// styles
import TransitionBetweenPages from 'Animations/transitionBetweenPages'
// types
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <TransitionBetweenPages>
      <Head>
        <title>Andrey Novaes</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://andrey-novaes.me/" />
        <meta name="viewport" content="width=device-width, initial-scale=1" /> */
        <meta lang='pt-BR' />
        <meta name="description" content="Portfólio do desenvolvedor Andrey Novaes" />
        <meta property="og:title" content="Andrey Novaes - Portfólio" />
        <meta property="og:description" content="Andrey Novaes - Portfólio" />
        <meta property="og:image" content="public/images/about.jpeg" />
        <meta property="og:url" content="https://andrey-novaes.me/" />
        <meta property="og:site_name" content="Andrey Novaes - Portfólio" />
        <meta property="og:type" content="website" />
      </Head>
        <Layout>
          <Component {...pageProps} />
          <Analytics />
        </Layout>
    </TransitionBetweenPages>
  )
}
