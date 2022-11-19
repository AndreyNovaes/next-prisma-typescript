import React from 'react';
import { Box, Text, Button, Image, Tag, useColorModeValue, Center } from '@chakra-ui/react';
import nextLink from 'next/link';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { projects } from '@prisma/client';

export default function SliderCard({
  id,
  title,
  description,
  image,
  tags,
  github,
  deploy
}: projects): JSX.Element {
  const colorBox = useColorModeValue('gray.800', 'whiteAlpha.800');
  const colorTag = useColorModeValue('gray.800', 'whiteAlpha.800');
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

  return (
    <Center key={id}
      marginY='25px'
    >
      <Box
        minH='850px'
        bgColor={bgColorHex}
        filter={{ base: 'brightness(1)', lg: 'grayscale(1)' }}
        _hover={{base: mobileHover, lg: webHover}}
      >
        <Center>
          <Image
            paddingTop="10px"
            src={image}
            alt={title}
            width="400px"
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
            >
              {tags && tags.map((tag) => (
                <Tag 
                size="md"
                key={tag}
                className={tag} 
                color={colorTag}
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