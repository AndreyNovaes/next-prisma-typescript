// components/Main-Content/Timeline/TimelineItem.tsx
import React from 'react';
import { 
  Box, 
  Flex, 
  Heading, 
  Text, 
  useColorModeValue,
  Badge,
  HStack,
  VStack,
  Circle
} from '@chakra-ui/react';
import TimelineDivider from './TimeLineDivider';
import { TimelineItemProps } from './types';

export default function TimelineItem({ 
  title, 
  company, 
  period, 
  description, 
  skills,
  isLast = false
}: TimelineItemProps): JSX.Element {
  const cardBg = useColorModeValue('white', 'gray.700');
  const borderColor = useColorModeValue('blue.500', 'blue.200');
  const dotColor = useColorModeValue('blue.500', 'blue.200');
  
  return (
    <Box position="relative">
      <Flex>
        {/* Left dot and line */}
        <Flex 
          flexDir="column" 
          alignItems="center" 
          mr={4}
          position="relative"
        >
          <Circle size="40px" bg={dotColor} color="white">
            <Box w="12px" h="12px" borderRadius="full" bg="white" />
          </Circle>
          
          {!isLast && <TimelineDivider />}
        </Flex>
        
        {/* Content */}
        <Box
          flex={1}
          p={5}
          borderRadius="md"
          borderLeft="4px"
          borderColor={borderColor}
          bg={cardBg}
          boxShadow="md"
          mb={isLast ? 0 : 6}
        >
          <VStack align="start" spacing={2}>
            <HStack justify="space-between" width="full">
              <Heading as="h3" size="md">
                {title}
              </Heading>
              <Text fontSize="sm" color="gray.500" fontWeight="medium">
                {period}
              </Text>
            </HStack>
            
            <Text fontWeight="medium" color="blue.500">
              {company}
            </Text>
            
            <Text mt={2}>
              {description}
            </Text>
            
            {skills && skills.length > 0 && (
              <HStack mt={3} flexWrap="wrap">
                {skills.map((skill, idx) => (
                  <Badge 
                    key={idx} 
                    colorScheme="blue" 
                    variant="subtle" 
                    px={2} 
                    py={1} 
                    borderRadius="md"
                    mb={2}
                  >
                    {skill}
                  </Badge>
                ))}
              </HStack>
            )}
          </VStack>
        </Box>
      </Flex>
    </Box>
  );
}
