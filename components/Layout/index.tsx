import React from 'react'
// helpers
import { useEffect, useState } from 'react'
// types
import { PropsWithChildren } from 'react'
// styles
import theme from '../../Theme'
import { Box, ChakraProvider, Flex, Spacer } from '@chakra-ui/react'
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
      <ChakraProvider theme={theme}>
        <Flex direction="column" minH="100vh">
          {/* Nav */}
          <Box as="nav">
            <Nav routes={routes} />
          </Box>
          {/* Nav */}

          <Spacer />
          {/* Main-content */}
          <Box as="main">
            {children}
          </Box>
          {/* Main-content */}

          <Spacer />
          {/* Footer */}
          <Box as="footer">
            <Footer />
          </Box>
          {/* Footer */}

        </Flex>
      </ChakraProvider>
    </>
  )
}
