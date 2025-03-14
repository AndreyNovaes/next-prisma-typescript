import React, { useEffect, useRef } from 'react';
// styles
import { Box, Text, Button, Image, Tag, useColorModeValue, Center, Flex } from '@chakra-ui/react';
// helpers
import nextLink from 'next/link';
// icons
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
// types
import { Project } from '../../../../services/types/baseTypes';

export default function SliderCard({
  id,
  title,
  description,
  image,
  tags,
  github,
  deploy
}: Project): JSX.Element {
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  
  const colorBox = useColorModeValue('gray.800', 'whiteAlpha.800');
  const bgColorHex = useColorModeValue('whiteAlpha.900', 'gray.900');

  // Parallax effect
  useEffect(() => {
    const card = cardRef.current;
    const image = imageRef.current;
    
    if (!card || !image) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = card.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;
      
      // Card tilt effect
      card.style.transform = `
        perspective(1000px)
        rotateY(${x * 5}deg)
        rotateX(${y * -5}deg)
        scale3d(1.02, 1.02, 1.02)
      `;
      
      // Image parallax effect
      image.style.transform = `
        translateX(${x * -15}px)
        translateY(${y * -15}px)
      `;
    };
    
    const handleMouseLeave = () => {
      card.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)';
      image.style.transform = 'translateX(0) translateY(0)';
    };
    
    const handleTouchStart = () => {
      card.style.transform = 'perspective(1000px) scale3d(1.02, 1.02, 1.02)';
    };
    
    const handleTouchEnd = () => {
      card.style.transform = 'perspective(1000px) scale3d(1, 1, 1)';
    };
    
    // Add event listeners
    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);
    card.addEventListener('touchstart', handleTouchStart);
    card.addEventListener('touchend', handleTouchEnd);
    
    // Clean up
    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
      card.removeEventListener('touchstart', handleTouchStart);
      card.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  // Tag colors
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
  const eslintColor = useColorModeValue('purple.500', 'purple.300');
  const sinonColor = useColorModeValue('purple.500', 'purple.300');

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
        return sinonColor;
      case 'Algoritmos':
        return algorithmColor;
      case 'Estruturas de Dados':
        return dataStructureColor;
      case 'HTML':
        return htmlColor;
      case 'CSS':
        return cssColor;
      case 'ESlint':
        return eslintColor;
      default:
        return nextColor;
    }
  };

  return (
    <Center 
      marginY='25px'
      width="100%"
      maxWidth="700px"
      data-id={id}
    >
      <Box
        ref={cardRef}
        minH='480px'
        width="100%"
        bgColor={bgColorHex}
        filter={{ base: 'brightness(1)', lg: 'brightness(1)' }}
        borderRadius="lg"
        overflow="hidden"
        boxShadow="md"
        transition="transform 0.3s ease, box-shadow 0.3s ease"
        style={{
          transformStyle: 'preserve-3d',
          willChange: 'transform'
        }}
      >
        <Box 
          ref={imageRef} 
          position="relative" 
          overflow="hidden"
          h="240px"
          transition="transform 0.3s ease"
          style={{
            willChange: 'transform'
          }}
        >
          <Image
            src={image}
            alt={title}
            objectFit="cover"
            width="100%"
            height="100%"
            transform="scale(1.1)" // Slightly larger to allow movement without showing edges
          />
          <Box 
            position="absolute" 
            top="0" 
            left="0" 
            width="100%" 
            height="100%" 
            bg="blackAlpha.400"
            opacity="0"
            transition="opacity 0.3s ease"
            _groupHover={{ opacity: 1 }}
          />
        </Box>

        <Box p={5} transform="translateZ(30px)">
          <Box
            fontWeight="bold"
            as="h4"
            lineHeight="tight"
            fontSize="xl"
            color={colorBox}
            mb={3}
          >
            <Center>
              {title}
            </Center>
          </Box>

          <Box mb={4}>
            <Text
              fontSize="md"
              color={useColorModeValue('gray.600', 'gray.400')}
              textAlign="center"
              noOfLines={3}
              height="4.5rem"
              overflow="hidden"
            >
              {description}
            </Text>
          </Box>
          
          <Box 
            mb={5}
            h="100px"
            overflowY="auto"
            css={{
              '&::-webkit-scrollbar': {
                width: '4px',
              },
              '&::-webkit-scrollbar-thumb': {
                backgroundColor: useColorModeValue('rgba(0,0,0,0.2)', 'rgba(255,255,255,0.2)'),
                borderRadius: '4px',
              }
            }}
          >
            <Flex 
              wrap="wrap"
              justify="center"
              gap={2}
            >
              {tags && tags.map((tag) => (
                <Tag 
                  size="md"
                  key={tag}
                  className={tag} 
                  color={colorSwitch(tag)}
                  borderRadius="md"
                  py={1}
                  px={2}
                  m={1}
                >
                  {tag}
                </Tag>
              ))}
            </Flex>
          </Box>

          {/* Área de botões com prioridade de clique */}
          <Box
            mt={4}
            position="relative"
            zIndex={1000}
            onClick={(e) => e.stopPropagation()}
            onTouchStart={(e) => e.stopPropagation()}
            onMouseDown={(e) => e.stopPropagation()}
          >
            <Flex 
              justifyContent="center" 
              gap={4}
            >
              {github && (
                <Button
                  as={nextLink}
                  href={github}
                  size="lg"
                  colorScheme="blue"
                  _hover={{ bg: 'blue.500', transform: 'translateY(-2px)' }}
                  leftIcon={<FaGithub />}
                  target="_blank"
                  mx={2}
                  transition="transform 0.2s ease"
                  height="48px"
                  width="130px"
                  boxShadow="md"
                  position="relative"
                  zIndex={1001}
                  onClick={(e) => {
                    e.stopPropagation();
                    // Impedir a propagação para o slider
                    const event = e.nativeEvent;
                    event.preventDefault();
                    event.stopImmediatePropagation();
                    window.open(github, '_blank');
                  }}
                >
                  Github
                </Button>
              )}
              {deploy && (
                <Button
                  as={nextLink}
                  href={deploy}
                  size="lg"
                  colorScheme="blue"
                  _hover={{ bg: 'blue.500', transform: 'translateY(-2px)' }}
                  leftIcon={<FaExternalLinkAlt />}
                  target="_blank"
                  mx={2}
                  transition="transform 0.2s ease"
                  height="48px"
                  width="130px"
                  boxShadow="md"
                  position="relative"
                  zIndex={1001}
                  onClick={(e) => {
                    e.stopPropagation();
                    // Impedir a propagação para o slider
                    const event = e.nativeEvent;
                    event.preventDefault();
                    event.stopImmediatePropagation();
                    window.open(deploy, '_blank');
                  }}
                >
                  Deploy
                </Button>
              )}
            </Flex>
          </Box>
        </Box>
      </Box>
    </Center>
  );
}
