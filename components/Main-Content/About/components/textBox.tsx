import {
  Box, Heading,
  Link,
  Stack,
  Text, useColorModeValue
} from '@chakra-ui/react';
import nextLink from 'next/link';

export default function TextBox(): JSX.Element {
  return (
    <>
      <Stack spacing="4" maxW={{ base:'lg', sm:'lg', md: '2xl', lg: '4xl'}} margin='1rem'>
        <Heading 
          mt={{ base: '4', md: '8' }}
          fontSize={{ base: '3xl', md: '4xl' }}
          fontWeight="extrabold"
          letterSpacing="wide"
          lineHeight="shorter"
          color={useColorModeValue('gray.900', 'white')}
          textAlign="center"
        >
          Como conheci a programação
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
              Ex jogador profissional de e-sports, decidido a encontrar novos horizontes, tive o ímpeto de procurar uma nova, carreira encontrei o&nbsp;
              <Link color='telegram.400' as={nextLink} target='_blank' passHref href='https://www.youtube.com/watch?v=S9uPNppGsGo&list=PLvE-ZAFRgX8hnECDn1v9HNTI71veL3oW0&ab_channel=CursoemV%C3%ADdeo'>
                curso de python do Gustavo Guanabara
              </Link>
              &nbsp;no youtube, e, a partir daí que eu tive certeza que
              era isso que eu queria fazer da minha vida.
            </Text>
              <br />
              <Text color={useColorModeValue('brand.600', 'brand.400')} align='center'> 
                Entrei em uma faculdade de sistemas de informação, onde tive meu primeiro contato com a programação web, porém, não
                sentia que a faculdade estava gerando valor em relação a minha carreira, era um curso lento, desatualizado e estático,
                queria algo mais dinâmico, rápido, algo que realmente pudesse gerar valor na minha carreira, então comecei a pesquisar sobre outros cursos e ferramentas para estudar por conta própria,
                acabei encontrando o curso de desenvolvimento web da Trybe, onde aprendi a programar em javascript, react, node,
                entre outras tecnologias.
              </Text>
              <br />
              <Text as="p" color={useColorModeValue('brand.600', 'brand.400')} align='center'>
                Me inspiro em grandes figuras como&nbsp;
                <Link color='telegram.400' as={nextLink} target='_blank' passHref href='https://www.youtube.com/c/RodrigoBranas'>
                  Rodrigo Branas
                </Link>
                &nbsp;,&nbsp;
                <Link color='telegram.400' as={nextLink} target='_blank' passHref href='https://www.youtube.com/c/MangoDeveloper'>
                  Rodrinho Manguinho
                </Link>
                &nbsp;,&nbsp;
                <Link color='telegram.400' as={nextLink} target='_blank' passHref href='https://www.youtube.com/c/FullCycle'>
                  Wesley Willians
                </Link>
                &nbsp;e&nbsp;
                <Link color='telegram.400' as={nextLink} target='_blank' passHref href='https://www.youtube.com/user/OtavioALLemos'>
                  Otavio Lemos
                </Link>
                &nbsp;e espero um dia chegar ao nível deles.
              </Text>
              <br />
              <Text as="p" color={useColorModeValue('brand.600', 'brand.400')} align='center'>
                Hoje, já formado pela Trybe, busco novas oportunidades para continuar aprendendo, pretendo, quando tiver uma 
                maior senioridade, ajudar pessoas que estão começando agora como eu, tentando sempre tornar algo que é difícil e 
                complicado, simples e fácil.
              </Text>
            </Box>
        </Box>
      </Stack>
    </>
  );
}
