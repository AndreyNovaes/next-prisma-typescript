import React from 'react';
// styles
import { Box, Heading, Container, Text, Button, Stack } from '@chakra-ui/react';
// helpers
import nextLink from 'next/link';
// components
import TypewriterComponent from 'typewriter-effect';

export default function Hero(): JSX.Element {
  return (
    <>
      <Container maxW={{ base: 'xl', lg: ' 4xl',}}>
        <Stack
          as={Box}
          textAlign={'center'}>

          <Heading
            as='h1'
            fontWeight='extrabold'
            fontSize={{ base: '4xl', md: '4xl', lg: '6xl' }}
            lineHeight={'110%'}>
            Olá, eu sou o Andrey <br />
            <Text as={'span'} color={'blue.400'} >
              <TypewriterComponent
                options={{
                  strings: ['Desenvolvedor Web', 'Eterno aprendiz', 'Em busca da excelência', 'Sempre aberto a novos desafios'],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                }}
              />
            </Text>
          </Heading>

          <Text color={'gray.500'} fontSize={'xl'}>
            Busco, por meio da tecnologia, estimular a excelência, da mesma forma que fui estimulado pelos meus mentores.
          </Text>

          <Stack
            direction={{ base: 'column', md: 'row' }}
            spacing={{ base: 4, md: 8 }}
            align={'center'}
            justify={'center'}>
              <Button
                rounded={'full'}
                size={'lg'}
                fontWeight={'normal'}
                px={6}
                colorScheme={'blue'}
                as={nextLink}
                href='/projetos'>
                  Conheça meu trabalho
              </Button>
              <Button 
                colorScheme={'green'} 
                rounded={'full'} 
                size={'lg'} 
                fontWeight={'normal'} 
                px={6}
                as={nextLink}
                href='/contato'>
                  Entre em contato
              </Button>
          </Stack>

        </Stack>
      </Container>
    </>
  );
}
