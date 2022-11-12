import React, { PropsWithChildren } from 'react'
import { motion } from 'framer-motion'
import { Box } from '@chakra-ui/react'

export default function ButtonClickAnimation({children}: PropsWithChildren): JSX.Element {
  return (
    <Box as={motion.div}
    whileFocus={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}>
      {children}
    </Box>
  )
}
