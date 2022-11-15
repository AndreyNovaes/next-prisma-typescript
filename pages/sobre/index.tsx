import React from 'react'
import ImageComp from './image';
import TextBox from './textBox';
import {
  Box,
  Stack,
  Container,
  Spacer,
} from '@chakra-ui/react';

export default function index(): JSX.Element {
  return (
    <>
      <Box
        // bg={useColorModeValue('gray.50', 'gray.900')}
        // color={useColorModeValue('gray.700', 'gray.200')}
      >
        <Container
          as={Stack}
          maxW={'3xl'}
          py={12}
          spacing={8}
          direction={{ base: 'column', md: 'row' }}
          align={'center'}
          justify={'space-between'}
        >
          <TextBox />
          <Spacer />
          <ImageComp />
        </Container>
      </Box>
    </>
  )
}


