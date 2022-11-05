import React from "react";
import ColorModeSwitcher from "./Web/ColorModeSwitcher";
import NavRoutesLink from "./Web/NavRoutesLink";
import {
  Box,
  Flex,
  HStack,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';

import { routes } from "@prisma/client";

type NavProps = {
  routes: routes[]
}

export default function Nav({ routes }: NavProps): JSX.Element {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box
      as="header"
      role="navigation"
      aria-label="main-navigation"
      bg={useColorModeValue('gray.100', 'gray.900')}
      px={8}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      shadow="lg"
    >
    <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
      <HStack spacing={8} alignItems={'center'}>
        <HStack 
          as={'nav'}
          spacing={4}
          alignItems={'center'}
          display={{ base: 'none', md: 'flex' }}
        >
          <NavRoutesLink routes={routes} />
        </HStack>
      </HStack>
      <HStack alignItems={'center'}>
        <ColorModeSwitcher />
      </HStack>
    </Flex>
  </Box>
  );
}
