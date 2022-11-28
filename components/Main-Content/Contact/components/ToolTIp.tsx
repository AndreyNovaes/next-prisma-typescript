// styles
import { IconButton, Tooltip, useClipboard, useColorModeValue } from '@chakra-ui/react'
// icons
import { MdEmail, MdPhone } from 'react-icons/md'
// types
import { IconCopyToolProps } from 'services/types/iconCopyTool'

export default function IconCopyTool ({ type, value }: IconCopyToolProps): JSX.Element {
  const toolTipColor = useColorModeValue('whiteAlpha.900', 'gray.900')
  const { hasCopied, onCopy } = useClipboard(value)

  return (
    <>
      <Tooltip
      label={hasCopied ? `${type} copiado!` : `Copiar ${type}`}
      closeOnClick={false}
      hasArrow>
        <IconButton
        aria-label={`Copiar ${type}`}
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
