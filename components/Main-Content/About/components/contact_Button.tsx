import { Button, Heading } from '@chakra-ui/react'
import nextLink from 'next/link'
import React from 'react'

export default function ContactButton() {
  return (
    <>
      <Heading as='h2' size='lg' marginTop='20px'>
        Quer saber mais sobre mim ?
      </Heading>
      <Button
        boxSize={{ base: '100%', md: '50%' }}
        fontWeight={'bold'}
        variant={'outline'}
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
