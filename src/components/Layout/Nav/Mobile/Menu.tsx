import React from 'react';
import {
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  VStack,
  useColorModeValue,
  MenuDivider,
} from '@chakra-ui/react';
import NavRoutesLink from '../Web/NavRoutesLink';
import { HamburgerIcon } from '@chakra-ui/icons';
import { routes } from '@prisma/client';

type props = {
  routes: routes[];
};

export default function MenuMobile ({routes}: props): JSX.Element {
  return (
    <Box
      display={{ md: 'none' }}
      bg={useColorModeValue('gray.100', 'gray.900')}
    >
      <Menu variant={'roundLeft'}>
        <MenuButton
          as={Button}
          aria-label="Options"
          size="md"
          variant="outline"
        >
          <HamburgerIcon />
        </MenuButton>
        <MenuList>
          <VStack spacing={4} align="stretch">
            {
              routes && routes.map(({ id, name, path }) => (
                <>
                  <MenuItem key={id} closeOnSelect={true} as={NavRoutesLink} name={name} path={path} />
                  <MenuDivider />
                </>
              ))
            }
          </VStack>
        </MenuList>
      </Menu>
    </Box>
  );
}
