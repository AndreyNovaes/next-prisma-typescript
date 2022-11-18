import { IconButton, Tooltip, useClipboard, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { MdEmail, MdPhone } from 'react-icons/md'

type IconCopyToolProps = {
  type: string
  value: string
}

export default function IconCopyTool ({ type, value }: IconCopyToolProps) {
  const toolTipColor = useColorModeValue('whiteAlpha.900', 'gray.900')
  const { hasCopied, onCopy } = useClipboard(value)

  return (
    <>
      <Tooltip
      label={hasCopied ? `${type} copiado!` : `Copiar ${type}`}
      closeOnClick={false}
      hasArrow>
        <IconButton
        aria-label="email"
        variant="ghost"
        size="lg"
        fontSize="3xl"
        icon={ type === 'email' ? <MdEmail /> : <MdPhone /> }
        _hover={{
          bg: 'blue.500',
          color: {toolTipColor},
        }}
        onClick={onCopy}
        isRound/>
      </Tooltip>
    </>
  )
}
