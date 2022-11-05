import React from 'react'
import { 
  VStack,
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
  Link
} from '@chakra-ui/react'
import LinkNext from 'next/link'
import { routes } from '@prisma/client';

export default function MobileNavRoutesLink({routes}: {routes: routes[]}): JSX.Element {
  return (
    <>
      <HStack spacing="8px" align={'center'}>
          {routes && routes.map(({ id, name, path }) => (
            <Link
              key={id}
              href={path}
              rounded={"full"}
              as={LinkNext}
              px={2}
              py={1}
              _hover={{
                textDecoration: "none",
                bg: useColorModeValue("gray.200", "gray.700"),
              }}
              _activeLink={{
                color: useColorModeValue("gray.300", "gray.700"),
                fontWeight: "semibold",
              }}
            >
              {name}
            </Link>
          ))}
      </HStack>
    </>
  );
}
