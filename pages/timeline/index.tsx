import React from 'react';
import { 
  Box, 
  Flex, 
  Heading, 
  useColorModeValue, 
  VStack, 
  Container,
  Text
} from '@chakra-ui/react';
import TimelineWrapper from '@/components/Main-Content/Timeline/index';

export default function Timeline(): JSX.Element {
  return (
    <Flex
      align="center"
      justify="center">
      <Box
        rounded="md"
        bg={useColorModeValue('white', 'gray.800')}
        borderRadius="lg"
        m={{ base: 4, md: 16 }}
        p={{ base: 4, md: 8 }}
        boxShadow="lg"
        width={{ base: '100%', md: '80%', lg: '70%' }}
      >
        <VStack spacing={{ base: 4, md: 8, lg: 10 }} width="full">
          <Heading
            as="h1"
            fontSize={{
              base: '4xl',
              md: '5xl',
            }}>
            Trajetória Profissional
          </Heading>

          <Container maxW="container.lg" p={0}>
            <Text textAlign="center" mb={8}>
              Minha jornada profissional e acadêmica, do presente ao passado.
            </Text>
            <TimelineWrapper />
          </Container>
        </VStack>
      </Box>
    </Flex>
  );
}
