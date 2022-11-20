import React from 'react'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import TransitionBetweenPages from 'Animations/transitionBetweenPages'
import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps }: AppProps) {

  return (
    <TransitionBetweenPages>
        <Layout>
          <Component {...pageProps} />
          <Analytics />
        </Layout>
    </TransitionBetweenPages>
  )
}
