import React from 'react';
import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';

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
    <Box display={{ md: 'none' }}>
      <IconButton
        size={'md'}
        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
        aria-label={'Open Menu'}
        display={{ md: 'none' }}
        onClick={isOpen ? onClose : onOpen}
      />
      <Box
        display={isOpen ? 'block' : 'none'}
        flexBasis={{ base: '100%', md: 'auto' }}
      >
        <Stack
          spacing={8}
          align={'center'}
          justify={'center'}
        >
          {routes && routes.map(({ id, name, path }) => (
            <Box key={id}>
              <a href={path}>{name}</a>
            </Box>
          ))}
        </Stack>
      </Box>
    </Box>
  );
}
