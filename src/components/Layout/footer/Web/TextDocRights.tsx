import React from 'react';
import {
  Text,
} from '@chakra-ui/react';

export default function TextDocRights() {
  return (
    <>
      <Text fontSize="2xl" aria-label="Documentação e direitos autorais">
          &copy; {new Date().getUTCFullYear()} - All rights reserved
      </Text>
    </>
  );
}
