import { ChakraProvider, Flex, Spacer } from '@chakra-ui/react'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import { getRoutes } from '../../services/requests'
import theme from '../Theme'
import Footer from './footer'
import Nav from './Nav'

export default function Layout({ children }: React.PropsWithChildren<{}>): JSX.Element {
  const [routes, setRoutes] = useState([])

  useEffect(() => {
    getRoutes().then((data) => setRoutes(data))
  }, [])

  return (
    <>
      <Head >
        <title>Andrey Novaes</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ChakraProvider theme={theme}>
        <Flex direction="column" maxHeight='100vh'>
          <Nav routes={routes} />
          {children}
          <Footer />
        </Flex>
      </ChakraProvider>
    </>
  )
}
