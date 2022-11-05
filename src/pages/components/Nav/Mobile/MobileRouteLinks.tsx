import React from 'react';
import {
  Box,
  IconButton,
  Stack,
} from '@chakra-ui/react';
import NavRoutesLink from '../Web/NavRoutesLink';

import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { routes } from '@prisma/client';

type props = {
  routes: routes[];
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export default function MobileMenu ({routes, isOpen, onOpen, onClose}: props): JSX.Element {
  return (
    <Box>
      <IconButton
        size={'md'}
        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
        aria-label={'Open Menu'}
        display={{ md: 'none' }}
        onClick={isOpen ? onClose : onOpen}
      />
      <Box
        display={{ base: isOpen ? 'block' : 'none', md: 'none' }}
        flexBasis={{ base: '100%', md: 'auto' }}
      >
        {
          isOpen ?
          (
            <Box pb={4} display={{ md: 'none' }}>
              <Stack as={'nav'} spacing={4}>
                <NavRoutesLink routes={routes} />
              </Stack>
            </Box>
          )
          : null
        }
      </Box>
    </Box>
  );
}
