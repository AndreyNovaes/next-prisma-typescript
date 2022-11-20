import React from 'react'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='pt-BR'>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Portfólio do desenvolvedor Andrey Novaes" />
        <meta property="og:title" content="Andrey Novaes - Portfólio" />
        <meta property="og:description" content="A busca de um portfólio com a minha cara" />
        <meta property="og:image" content="public/images/about.jpeg" />
        <meta property="og:url" content="https://andrey-novaes.me/" />
        <meta property="og:site_name" content="Andrey Novaes - Portfólio" />
        <meta property="og:type" content="website" />

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
