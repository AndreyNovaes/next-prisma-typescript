// components
import MenuMobile from './Mobile/Menu';
import ColorModeSwitcher from './Web/ColorModeSwitcher';
import NavRoutesLink from './Web/NavRoutesLink';
// styles
import { Box, Flex, HStack, useColorModeValue } from '@chakra-ui/react';
import ButtonClickAnimation from '../../../Animations/ButtonClick';
// types
import { ArrayOfRoutes } from 'services/types/baseTypes';

export default function Nav({ routes }: ArrayOfRoutes): JSX.Element {
  const navBackgroundColor = useColorModeValue('gray.200', 'gray.700')
  return (
    <Box
      as="header"
      role="navigation"
      aria-label="main-navigation"
      bg={useColorModeValue('gray.100', 'gray.900')}
      px={8}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      shadow="lg"
    >

    <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
      {/* Web Nav internal routes */}
      <HStack 
          as={'nav'}
          spacing={4}
          alignItems={'center'}
          display={{ base: 'none', md: 'flex' }}
        >
        {
          routes && routes.map(({id, name, path}) => (
            <ButtonClickAnimation key={id}>
              <Box _hover={{ bg: navBackgroundColor }} rounded='full'>
                <NavRoutesLink id={id} name={name} path={path} />
              </Box>
            </ButtonClickAnimation>
          ))
        }
      </HStack>
      {/* Web Nav internal routes */}

      {/* Menu Mobile (Hamburger icon) */}
      <MenuMobile routes={routes} />
      {/* Menu Mobile (Hamburger icon) */}
      
      {/* Color mode switcher */}
        <ButtonClickAnimation>
          <ColorModeSwitcher />
        </ButtonClickAnimation>
        
      {/* Color mode switcher */}

    </Flex>
  </Box>
  );
}
