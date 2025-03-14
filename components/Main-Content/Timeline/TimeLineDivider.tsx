// components/Main-Content/Timeline/TimelineDivider.tsx
import React from 'react';
import { Box, useColorModeValue } from '@chakra-ui/react';

export default function TimelineDivider(): JSX.Element {
  const lineColor = useColorModeValue('blue.500', 'blue.200');
  
  return (
    <Box 
      height="100%"
      width="2px"
      bg={lineColor}
      position="absolute"
      top="40px"
      bottom={0}
    />
  );
}
