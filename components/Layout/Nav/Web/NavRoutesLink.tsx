import React from 'react';
import { useColorModeValue, Link } from '@chakra-ui/react';
import LinkNext from 'next/link';
import { useRouter } from 'next/router';
import { Routes } from 'services/types/baseTypes';

export default function NavRoutesLink({ id, path, name }: Routes): JSX.Element {
  const router = useRouter();
  const isActive = router.pathname === path;
  const activeColor = useColorModeValue('gray.300', 'gray.600');
  const saltGenerator = Math.random() * 1000;
  return (
    <>
      <Link
        key={id + saltGenerator}
        href={path}
        rounded={'full'}
        as={LinkNext}
        px={2}
        py={1}
        fontSize={'2xl'}
        bg={isActive ? activeColor : undefined}
        _hover={{
          textDecoration: 'none',
          bg: activeColor,
        }}
        >
          {name}
        </Link>
    </>
  );
}
