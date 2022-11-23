import React from 'react'
// helpers
import nextLink from 'next/link'
// styles
import { Button, Heading } from '@chakra-ui/react'

export default function ContactButton() {
  return (
    <>
      <Heading as='h1' size='lg' marginTop='20px'>
        Quer saber mais sobre mim ?
      </Heading>
      <Button
        boxSize={{ base: '100%', md: '50%' }}
        fontWeight={'bold'}
        variant={'outline'}
        rounded={'full'}
        padding='10px'
        marginTop='18px'
        fontSize={{ base: 'xl', md: '2xl' }}
        as={nextLink}
        colorScheme='green'
        href='/contato'>
          Entre em contato
      </Button>
    </>
  )
}
