import { Text, Box, Stack, Tooltip } from '@chakra-ui/react'
import React from 'react' 

export default function MailPhoneBox() {
  
  return (
    <>
      <Box>
        <Stack direction="column" spacing={0} align="center">
          <Tooltip
            label="Os icone de email e telefone abaixo podem ser usados para copiar tanto meu e-mail quanto telefone."
            hasArrow
            bg="blue.500"
            color="whiteAlpha.900"
            fontSize="md"
            >
            <Text fontSize="xl">
              Email: andreynovaespro@gmail.com <br />
              Telefone: +55 21 99431-2856
            </Text>
          </Tooltip>
            <Text fontSize="xl">
            </Text>
        </Stack>
      </Box>
    </>
  )
}
