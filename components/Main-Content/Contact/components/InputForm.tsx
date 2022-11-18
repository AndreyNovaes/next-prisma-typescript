import { FormControl, FormLabel, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import React, { PropsWithChildren } from 'react'

type InputFormProps = {
  isRequired?: boolean
  label: string
  name: string
  type: string
  placeholder: string
  leftIcon?: React.ReactNode
  isTextArea?: boolean
}

export default function InputForm({ isRequired, label, name, type, placeholder, leftIcon, isTextArea }: PropsWithChildren<InputFormProps>) {
  return (
    <>
      <FormControl isRequired={isRequired} p='10px'>
      <FormLabel>{label}</FormLabel>
        <InputGroup>
          {leftIcon && <InputLeftElement alignSelf={'center'}>{leftIcon}</InputLeftElement>}
          {isTextArea ? (
            <Input isRequired={isRequired} as='textarea' name={name} size='lg' type={type} placeholder={placeholder} height='200px' />
          ) : (
            <Input isRequired={isRequired} type={type} name={name} placeholder={placeholder} size='lg' />
          )}
        </InputGroup>
      </FormControl>
    </>
  )
}
