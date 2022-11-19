import React from 'react';
import {
  Box,
  Menu,
  MenuButton,
  MenuList,
  Button,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react';
import NavRoutesLink from '../Web/NavRoutesLink';
import { HamburgerIcon } from '@chakra-ui/icons';
import { routes } from '@prisma/client';
import ButtonClickAnimation from '../../../../Animations/ButtonClick';

type props = {
  routes: routes[];
};

export default function MenuMobile({routes}: props): JSX.Element {
  return (
    <Box
      zIndex={1}
      display={{ md: 'none' }}
      bg={useColorModeValue('gray.100', 'gray.900')}
    >
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
        <MenuList>
          <VStack spacing={4} align="stretch">
            {
              routes && routes.map(({ id, name, path }) => (
                <NavRoutesLink key={id} id={id} name={name} path={path}  />
              ))
            }
          </VStack>
        </MenuList>
      </Menu>
    </Box>
  );
}
