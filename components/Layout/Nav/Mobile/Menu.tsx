// styles
import { Box, Button, Menu, MenuButton, MenuList, useColorModeValue, VStack } from '@chakra-ui/react';
import ButtonClickAnimation from '../../../../Animations/ButtonClick';
// components
import NavRoutesLink from '../Web/NavRoutesLink';
// icons
import { HamburgerIcon } from '@chakra-ui/icons';
// types
import { ArrayOfRoutes } from 'services/types/baseTypes';

export default function MenuMobile({routes}: ArrayOfRoutes): JSX.Element {
  return (
    <Box
      zIndex={1}
      display={{ md: 'none' }}
      bg={useColorModeValue('gray.100', 'gray.900')}
    >
      {/* mobile hamburguer menu */}
      <Menu>
        <ButtonClickAnimation>
          <MenuButton
            as={Button}
            aria-label="Options"
            size="md"
            variant="outline"
            >
            <HamburgerIcon />
          </MenuButton>
        </ButtonClickAnimation>
        {/* MenuItems */}
        <MenuList>
          <VStack spacing={4} align="stretch">
            {
              routes && routes.map(({ id, name, path }) => (
                <NavRoutesLink key={id} id={id} name={name} path={path}  />
              ))
            }
          </VStack>
        </MenuList>
        {/* MenuItems */}
      </Menu>
      {/* mobile hamburguer menu */}
    </Box>
  );
}
