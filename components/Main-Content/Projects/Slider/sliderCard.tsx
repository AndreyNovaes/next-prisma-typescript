import React from 'react';
// styles
import { Box, Text, Button, Image, Tag, useColorModeValue, Center } from '@chakra-ui/react';
// helpers
import nextLink from 'next/link';
// icons
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
// types
import { Projects } from 'services/types/baseTypes';

export default function SliderCard({
  id,
  title,
  description,
  image,
  tags,
  github,
  deploy
}: Projects): JSX.Element {
  const colorBox = useColorModeValue('gray.800', 'whiteAlpha.800');
  const bgColorHex = useColorModeValue('whiteAlpha.900', 'gray.900');
  const webHover = {
  boxShadow: '2xl',
  transform: 'scale(1.04)',
  transition: 'all 0.4s',
  transitionTimingFuntion: 'cubic-bezier(0.075, 0.82, 0.165, 1)',
  filter: 'grayscale(0)',
  };
  const mobileHover = {
  boxShadow: '2xl',
  transitionTimingFunction: 'cubic-bezier(0.075, 0.82, 0.165, 1)',
  };

// todo, organize this code below, it's a mess, and need to be more readable, and inside a jsx scope
const reactColor = useColorModeValue('blue.500', 'blue.300');
const nextColor = useColorModeValue('black', 'white');
const chakraColor = useColorModeValue('teal.500', 'teal.300');
const javascriptColor = useColorModeValue('yellow.400', 'yellow.300');
const typescriptColor = useColorModeValue('blue.400', 'blue.300');
const prismaColor = useColorModeValue('purple.500', 'purple.300');
const nodeColor = useColorModeValue('green.500', 'green.300');
const expressColor = useColorModeValue('red.500', 'red.300');
const postgresColor = useColorModeValue('orange.500', 'orange.300');
const jestColor = useColorModeValue('red.500', 'red.300');
const htmlColor = useColorModeValue('orange.500', 'orange.300');
const cssColor = useColorModeValue('blue.500', 'blue.300');
const reduxColor = useColorModeValue('purple.500', 'purple.300');
const sequelizeColor = useColorModeValue('blue.500', 'blue.300');
const dockerColor = useColorModeValue('blue.500', 'blue.300');
const dataStructureColor = useColorModeValue('purple.500', 'purple.300');
const algorithmColor = useColorModeValue('red.500', 'red.300');
const mysqlColor = useColorModeValue('orange.500', 'orange.300');
const rtlColor = useColorModeValue('blue.500', 'blue.300');
const mochaColor = useColorModeValue('red.500', 'red.300');
const chaiColor = useColorModeValue('purple.500', 'purple.300');

const colorSwitch = (tag: string) => {
  switch (tag) {
    case 'React':
      return reactColor;
    case 'Next.js':
      return nextColor;
    case 'Chakra UI':
      return chakraColor;
    case 'Javascript':
      return javascriptColor;
    case 'Typescript':
      return typescriptColor;
    case 'Prisma':
      return prismaColor;
    case 'Node':
      return nodeColor;
    case 'Express':
      return expressColor;
    case 'PostgreSQL':
      return postgresColor;
    case 'Sequelize':
      return sequelizeColor;
    case 'Docker':
      return dockerColor;
    case 'Redux':
      return reduxColor;
    case 'MySQL':
      return mysqlColor;
    case 'Jest':
      return jestColor;
    case 'React Testing Library':
      return rtlColor;
    case 'Mocha':
      return mochaColor;
    case 'Chai':
      return chaiColor;
    case 'Sinon':
      return chaiColor;
    case 'Algoritmos':
      return algorithmColor;
    case 'Estruturas de Dados':
      return dataStructureColor;
    case 'HTML':
      return htmlColor;
    case 'CSS':
      return cssColor;
    case 'ESlint':
      return 
  default:
    return nextColor;
  }
};

  return (
    <Center key={id}  
    marginY='25px'
    >
      <Box
        minH='480px'
        minHeight='480px'
        bgColor={bgColorHex}
        filter={{ base: 'brightness(1)', lg: 'grayscale(1)' }}
        _hover={{base: mobileHover, lg: webHover}}
      >
        <Center>
          <Image
            paddingTop="10px"
            src={image}
            alt={title}
            height="200px"
            width="450px"
          />
        </Center>

        <Box paddingTop='15px'>
          <Box
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            fontSize="lg"
            color={colorBox}
          >
            <Center>
              {title}
            </Center>
          </Box>

            <Box>
              <Center>
                <Text
                  m="2"
                  p='4px'
                  fontSize="md"
                  color={useColorModeValue('gray.600', 'gray.400')}
                  maxWidth="lg"
                >
                  {description}
                </Text>
              </Center>
            </Box>
          <Box >
            <Box
              color="gray.500"
              fontWeight="extrabold"
              letterSpacing="wide"
              fontSize="xs"
              maxWidth="lg"
              maxW={{ base: '100%', lg: 'lg' }}
            >
              {tags && tags.map((tag) => (
                <Tag 
                size="md"
                key={tag}
                className={tag} 
                color={colorSwitch(tag)}
                margin="5px"
                >
                  {tag}
                </Tag>
              ))}
            </Box>
          </Box>

          <Box mt="2" alignItems="center">
            <Center>
              {
                github && (
                <Button
                  as={nextLink}
                  href={github}
                  size="md"
                  colorScheme="blue"
                  _hover={{ bg: 'blue.500' }}
                  leftIcon={<FaGithub />}
                  target="_blank"
                  padding="10px"
                  marginY="10px"
                  marginX="20px"
                >
                  Github
                </Button>
                )
              }
              {
                deploy && (
                <Button
                  as={nextLink}
                  href={deploy}
                  size="md"
                  colorScheme="blue"
                  _hover={{ bg: 'blue.500' }}
                  leftIcon={<FaExternalLinkAlt />}
                  target="_blank"
                >
                  Deploy
                </Button>
                )
              }
            </Center>
          </Box>
        </Box>
      </Box>
    </Center>
  );
}
