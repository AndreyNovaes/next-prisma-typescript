import { extendTheme } from '@chakra-ui/react';
import { menuTheme } from './Components/Menu';
// this file extends the base theme of Chakra UI
// so, the Menu component is modified by the Menu theme

const theme = extendTheme({
  components: {
    Menu: menuTheme,
  },
});

export default theme;
