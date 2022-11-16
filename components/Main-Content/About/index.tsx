import React from 'react'
import TextBox from './components/textBox'
import ImageBox from './components/imageBox'
import { Box, Flex } from '@chakra-ui/react'

export default function AboutWrapper(): JSX.Element {
  return (
    <>
      <Flex direction='column' align='center' justify='center'>
        <TextBox/>
        <Box my='10'>
          <ImageBox />
        </Box>
      </Flex>
    </>
  )
}
