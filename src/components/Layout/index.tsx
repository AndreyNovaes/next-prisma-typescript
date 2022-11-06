import { ChakraProvider, Flex, Spacer } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { getRoutes } from '../../services/requests'
import Footer from './footer'
import Nav from './Nav'

export default function Layout({ children }: React.PropsWithChildren<{}>): JSX.Element {
  const [routes, setRoutes] = useState([])

  useEffect(() => {
    getRoutes().then((data) => setRoutes(data))
  }, [])

  return (
    <>
      <ChakraProvider>
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
