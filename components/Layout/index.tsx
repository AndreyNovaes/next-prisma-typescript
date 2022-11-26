import React from 'react'
// helpers
import { useEffect, useState } from 'react'
// types
import { PropsWithChildren } from 'react'
// styles
import { Box, Flex, Spacer } from '@chakra-ui/react'
// components
import Footer from './footer'
import Nav from './Nav'
// requests
import { getRoutes } from '../../services/requests'

export default function Layout({ children }: PropsWithChildren): JSX.Element {
  const [routes, setRoutes] = useState([])

  useEffect(() => {
    getRoutes().then((data) => setRoutes(data))
  }, [])

  return (
    <>
      <Flex direction="column" minH="100vh">
        <Box as="nav">
          <Nav routes={routes} />
        </Box>
        <Spacer />
        <Box as="main">
          {children}
        </Box>
        <Spacer />
        <Box as="footer">
          <Footer />
        </Box>
      </Flex>
    </>
  )
}
