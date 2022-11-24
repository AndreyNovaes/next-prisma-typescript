import { menuAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(menuAnatomy.keys);

const baseStyle = definePartsStyle({
  list: {
    py: '2',
    border: { width: '1px', color: 'inherit' },
    borderBottom: 'none',
  },
  divider: {
    opacity: 0.6,
  },
});



// export the component theme
export const menuTheme = defineMultiStyleConfig({
  baseStyle,
  defaultProps: {
    // define which size is applied by default
    size: 'xl',
  },
});
