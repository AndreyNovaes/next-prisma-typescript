import React from 'react'
// components
import TextBox from './components/textBox'
// styles
import { Flex } from '@chakra-ui/react'

export default function AboutWrapper(): JSX.Element {
  return (
    <>
      <Flex paddingBottom={1} direction='column' align='center' justify='center'>
        <TextBox/>
      </Flex>
    </>
  )
}
