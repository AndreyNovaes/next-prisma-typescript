import React from 'react';
// styles
import { Box, Heading, Link, Stack, Text, useColorModeValue, Icon } from '@chakra-ui/react';
// helpers
import NextLink from 'next/link';
// icons
import { ExternalLinkIcon } from '@chakra-ui/icons';

export default function TextBox(): JSX.Element {
  // Custom link styles to improve UX
  const linkStyles = {
    position: 'relative',
    color: 'telegram.400',
    fontWeight: 'medium',
    textDecoration: 'none',
    borderBottom: '1px dashed',
    transition: 'all 0.2s ease-in-out',
    _hover: {
      color: 'telegram.600',
      borderBottom: '1px solid',
      textDecoration: 'none',
    },
    _focus: {
      boxShadow: 'outline',
      outline: 'none',
    },
  };

  return (
    <>
      <Stack maxW={{ base:'lg', sm:'lg', md: '2xl', lg: '4xl'}} >
        <Heading 
          as='h1'
          fontSize={{ base: '3xl', md: '4xl' }}
          fontWeight="extrabold"
          letterSpacing="wide"
          lineHeight="shorter"
          color={useColorModeValue('gray.900', 'white')}
          textAlign="center"
        >
          Minha Jornada na Tecnologia
        </Heading>
        <Box
          mt={{ base: '4', md: '10' }}
          fontSize={{ base: '2xl', md: '4xl' }}
          fontWeight="extrabold"
          letterSpacing="wide"
        >
          <Box
            fontSize='lg'
            color={useColorModeValue('gray.500', 'gray.400')}
          >
            <Text color={useColorModeValue('brand.600', 'brand.400')} align='center'>
              Minha trajetória começa de forma incomum: como jogador profissional de e-sports, desenvolvi habilidades valiosas em estratégia, trabalho em equipe e resiliência sob pressão. Buscando novos desafios, descobri o&nbsp;
              <NextLink href='https://www.youtube.com/watch?v=S9uPNppGsGo&list=PLvE-ZAFRgX8hnECDn1v9HNTI71veL3oW0&ab_channel=CursoemV%C3%ADdeo' passHref target='_blank'>
                <Link sx={linkStyles}>
                  curso de Python do Gustavo Guanabara <Icon as={ExternalLinkIcon} mx='1px' boxSize='3' verticalAlign='text-top' />
                </Link>
              </NextLink>
              &nbsp;e imediatamente percebi que havia encontrado minha verdadeira vocação na tecnologia.
            </Text>
              <br />
              <Text color={useColorModeValue('brand.600', 'brand.400')} align='center'> 
                Após iniciar minha jornada acadêmica em Sistemas de Informação, rapidamente identifiquei que precisava de um aprendizado mais intensivo e atualizado. Encontrei na Trybe um programa que atendia minhas expectativas, onde desenvolvi forte base em JavaScript, React, Node.js, e outras tecnologias de ponta. Atualmente, como QA Engineer na Telcomanager, aplico esses conhecimentos na criação e automação de testes, garantindo a qualidade das soluções entregues.
              </Text>
              <br />
              <Text as="p" color={useColorModeValue('brand.600', 'brand.400')} align='center'>
                Minha abordagem é fortemente influenciada por referências como&nbsp;
                <NextLink href='https://www.youtube.com/c/RodrigoBranas' passHref target='_blank'>
                  <Link sx={linkStyles}>
                    Rodrigo Branas <Icon as={ExternalLinkIcon} mx='1px' boxSize='3' verticalAlign='text-top' />
                  </Link>
                </NextLink>
                &nbsp;,&nbsp;
                <NextLink href='https://www.youtube.com/c/MangoDeveloper' passHref target='_blank'>
                  <Link sx={linkStyles}>
                    Rodrigo Manguinho <Icon as={ExternalLinkIcon} mx='1px' boxSize='3' verticalAlign='text-top' />
                  </Link>
                </NextLink>
                &nbsp;,&nbsp;
                <NextLink href='https://www.youtube.com/c/FullCycle' passHref target='_blank'>
                  <Link sx={linkStyles}>
                    Wesley Willians <Icon as={ExternalLinkIcon} mx='1px' boxSize='3' verticalAlign='text-top' />
                  </Link>
                </NextLink>
                &nbsp;e&nbsp;
                <NextLink href='https://www.youtube.com/user/OtavioALLemos' passHref target='_blank'>
                  <Link sx={linkStyles}>
                    Otavio Lemos <Icon as={ExternalLinkIcon} mx='1px' boxSize='3' verticalAlign='text-top' />
                  </Link>
                </NextLink>
                &nbsp;, cuja expertise técnica e capacidade de simplificar conceitos complexos me inspiram constantemente.
              </Text>
              <br />
              <Text as="p" color={useColorModeValue('brand.600', 'brand.400')} align='center'>
                Hoje, com formação completa em desenvolvimento web e experiência em automação e QA, continuo ampliando meus conhecimentos em Defesa Cibernética. Meu objetivo é não apenas crescer tecnicamente, mas eventualmente contribuir para a comunidade de desenvolvedores, compartilhando conhecimento e tornando conceitos complexos acessíveis para quem está iniciando - assim como os mentores que me inspiraram no começo da minha jornada.
              </Text>
            </Box>
        </Box>
      </Stack>
    </>
  );
}
