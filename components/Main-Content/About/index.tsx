import React from 'react'
// components
import TextBox from './components/textBox'
import ImageBox from './components/imageBox'
import ContactButton from './components/contact_Button'
// styles
import { Box, Flex } from '@chakra-ui/react'

export default function AboutWrapper(): JSX.Element {
  return (
    <>
      <Flex direction='column' align='center' justify='center'>
        <TextBox/>
        <ContactButton />
        <Box my='10'>
          <ImageBox />
        </Box>
      </Flex>
    </>
  )
}
