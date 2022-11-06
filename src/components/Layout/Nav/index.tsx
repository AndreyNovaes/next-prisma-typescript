import React from "react";
import ColorModeSwitcher from "./Web/ColorModeSwitcher";
import NavRoutesLink from "./Web/NavRoutesLink";
import {
  Box,
  Flex,
  HStack,
  useColorModeValue,
} from '@chakra-ui/react';
import MenuMobile from "./Mobile/Menu";
import { routes } from "@prisma/client";
import { motion } from "framer-motion"

type props = {
  routes: routes[];
};

export default function Nav({ routes }: props ): JSX.Element {
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
      {/* Web Menu routes */}
      <HStack 
          as={'nav'}
          spacing={4}
          alignItems={'center'}
          display={{ base: 'none', md: 'flex' }}
        >
        {
          routes && routes.map(({ id, name, path }) => (
            <Box key={id} _hover={{ bg: useColorModeValue("gray.200", "gray.700")}} rounded='full'>
              <NavRoutesLink id={id} name={name} path={path} />
            </Box>
          ))
        }
      </HStack>
      {/* Web Menu routes */}

      {/* Menu Mobile (Hamburger) */}
      <MenuMobile routes={routes} />
      {/* Menu Mobile (Hamburger) */}
      
      {/* Color mode switcher */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          drag
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          dragElastic={1}
          // animate={{ initial: { y: 0 }, hover: { y: -10 } }}
          // transition={{ duration: 0.2, ease: "easeOut" }}
        >
          <ColorModeSwitcher />
        </motion.div>
      {/* Color mode switcher */}

    </Flex>
  </Box>
  );
}
