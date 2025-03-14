import React from 'react';
import { VStack } from '@chakra-ui/react';
import TimelineItem from './TimeLineItem';
import { timelineData } from './TimeLineData';

export default function TimelineWrapper(): JSX.Element {
  return (
    <VStack spacing={8} width="full" align="stretch">
      {timelineData.map((item, index) => (
        <TimelineItem 
          key={index}
          {...item}
          isLast={index === timelineData.length - 1}
        />
      ))}
    </VStack>
  );
}
