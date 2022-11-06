import React from 'react';
import {
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
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
    >
      <Menu>
        <MenuButton
          as={Button}
          aria-label="Options"
          size="md"
          variant="outline"
        >
          <HamburgerIcon />
        </MenuButton>
        <MenuList>
          {
            routes && routes.map(({ id, name, path }) => (
              <MenuItem key={id} >
                <NavRoutesLink id={id} name={name} path={path} />
              </MenuItem>
            ))
          }
        </MenuList>
      </Menu>
    </Box>
  );
}
