import { extendTheme } from "@chakra-ui/react";
import { TEXT_VARIANT } from "./theme-text.variant";

const colors = {
  "summer-gold": {
    500: "#d5d09d",
  },
  background: "#0a0c2b",
};

const breakpoints = {
  sm: "480px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
};

const theme = extendTheme({
  colors,
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
        backgroundColor: "#131313",
        color: "#ffffff",
      },
    }),
  },
  components: {
    FormLabel: {
      baseStyle: {
        fontWeight: 600,
        fontSize: "12px",
      },
    },
    Input: {
      variants: {
        outline: {
          field: {
            bg: "rgba(255,255,255, 0.1)",
            color: "#ffffff",
            border: "1px solid",
            borderColor: "summer-gold.500",
            _hover: {
              borderColor: "summer-gold.500",
            },
          },
        },
      },
    },
    Text: {
      variants: { ...TEXT_VARIANT },
    },
  },
});

export default theme;
