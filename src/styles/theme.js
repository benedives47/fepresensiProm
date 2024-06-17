import { extendTheme } from "@chakra-ui/react";
import { TEXT_VARIANT } from "./theme-text.variant";

const breakpoints = {
  sm: "480px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
};

const theme = extendTheme({
  breakpoints,
  fonts: {
    heading: `'Outfit', sans-serif`,
    body: `'Inter', sans-serif`,
  },
  styles: {
    global: () => ({
      body: {
        fontSize: {
          base: "14px",
          md: "16px",
        },
        backgroundColor: "gray.200",
        color: "#131313",
      },
    }),
  },
  components: {
    FormLabel: {
      baseStyle: {
        fontWeight: 600,
        fontSize: "14px",
      },
    },
    Text: {
      variants: { ...TEXT_VARIANT },
    },
  },
});

export default theme;
