import React from 'react'
// types
import { PropsWithChildren } from 'react'
// styles
import { Box, Flex, Spacer } from '@chakra-ui/react'
// components
import Footer from './footer'
import Nav from './Nav'
// static data
import { routes } from '../../data/staticData'

export default function Layout({ children }: PropsWithChildren): JSX.Element {
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
