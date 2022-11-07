import { ChakraProvider, Flex, Spacer } from '@chakra-ui/react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { getRoutes } from '../../services/requests'
import theme from '../Theme'
import Footer from './footer'
import Nav from './Nav'

export default function Layout({ children }: React.PropsWithChildren<{}>): JSX.Element {
  const [routes, setRoutes] = useState([])
  const router = useRouter()
  const actualRoute = () => {
    if (router.pathname === '/') {
      return 'Home'
    }
    const pathnameWithoutBar = router.pathname.split('/')[1]
    const pathNameCapitalized = pathnameWithoutBar.charAt(0).toUpperCase() + pathnameWithoutBar.slice(1)
    return pathNameCapitalized
  }

  useEffect(() => {
    getRoutes().then((data) => setRoutes(data))
  }, [])

  return (
    <>
      <Head >
        <title>Andrey Novaes | {actualRoute()}</title>
        <meta name="description" content="portfolio de Andrey" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ChakraProvider theme={theme}>
        <Flex direction="column" minH="100vh">
          <Nav routes={routes} />
          <Spacer />
          {children}
          <Spacer />
          <Footer />
        </Flex>
      </ChakraProvider>
    </>
  )
}
