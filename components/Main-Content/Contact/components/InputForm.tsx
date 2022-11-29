// styles
import { FormControl, FormLabel, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
// types
import { PropsWithChildren } from 'react'
import { InputProps } from '../../../../services/types/web/inputProps'

export default function InputForm({ isError, isDisabled, value, handleOnChange, isRequired, name, type, leftIcon }: PropsWithChildren<InputProps>): JSX.Element {
  return (
    <>
      <FormControl isRequired={isRequired} p='10px'>
      <FormLabel>{name}</FormLabel>
        <InputGroup>
          {leftIcon && <InputLeftElement>{leftIcon}</InputLeftElement>}
          <Input
            isDisabled={isDisabled}
            value={value}
            onChange={handleOnChange}
            name={name}
            placeholder={name}
            type={type}
            isInvalid={isError}
            size='lg'
            as={ name === 'message' ? 'textarea' : 'input' }
            height={ name === 'message' ? '200px' : '40px' }
          />
        </InputGroup> 
      </FormControl>
    </>
  )
}
