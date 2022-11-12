import React, { useEffect, useState } from 'react';
import {
  Box,
  Container,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';
import TextDocRights from './Web/TextDocRights';
import NavSocialLinks from './Web/NavSocialLinks';
import { getSocials } from '../../../services/requests';

export default function Footer() {
  const [socials, setSocials] = useState([]);
  useEffect(() => {
    getSocials().then((data) => {
      setSocials(data);
    });
  }, []);

  return (
    <Box
      borderTopColor={useColorModeValue('gray.200', 'gray.700')}
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container
        as={Stack}
        maxW={'6xl'}
        spacing={6}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}>
        <TextDocRights />
        <Stack direction={'row'} spacing={6}>
          <NavSocialLinks socials={socials} />
        </Stack>
      </Container>
    </Box>
  );
}
