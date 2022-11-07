import { extendTheme } from "@chakra-ui/react";
import { menuTheme } from "./Components/Menu";

const theme = extendTheme({
  components: {
    Menu: menuTheme,
  },
});

export default theme;
