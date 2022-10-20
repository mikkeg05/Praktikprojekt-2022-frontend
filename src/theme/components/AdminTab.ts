
// https://chakra-ui.com/docs/styled-system/theming/component-style#styling-single-part-components

// import type { ComponentStyleConfig } from "@chakra-ui/theme"
import type { SystemStyleObject } from "@chakra-ui/theme-tools"
// import { extendTheme } from '@chakra-ui/react'

// You can also use the more specific type for
// a single part component: ComponentSingleStyleConfig

export const AdminTab: SystemStyleObject = {
// The styles all button have in common
  baseStyle: {
    width: "200px",
    bg: "black",
    color: "white",
    fontWeight: "bold",
    textTransform: "uppercase",
    borderRadius: "100px", // <-- border radius is same for all variants and sizes
  },

  // Two sizes: sm and md
  sizes: {
    sm: {
      fontSize: "sm",
      px: 4, // <-- px is short for paddingLeft and paddingRight
      py: 3, // <-- py is short for paddingTop and paddingBottom
    },
    md: {
      fontSize: "md",
      px: 6, // <-- these values are tokens from the design system
      py: 4, // <-- these values are tokens from the design system
    },
  },

  // Two variants: outline and solid
  variants: {
    outline: {
      border: "2px solid",
      borderColor: "#000000",
      color: "#000000",
    },
    solid: {
      bg: "black",
      color: "white",
    },
  },

  // The default size and variant values
  defaultProps: {
    size: "md",
    variant: "outline",
  },
}

// import { mode } from "@chakra-ui/theme-tools"
// export const AdminTabStyles = {
//   components: {
//     adminTab: {
//       baseStyle: {
//         minWidth: "100px",
//         bg: "black",
//         color: "white",
//         fontWeight: "bold",
//         textTransform: "uppercase",
//         borderRadius: "100px",
//       },

//       variants: {
//         outline: () => ({
//           border: "2px solid",
//           borderColor: "#000000",
//           color: "#000000",
//         }),
//         solid: () => ({
//           bg: "black",
//           color: "white",
//         }),
//         brand: (props: string[]) => ({
//           bg: mode("brand.500", "brand.400")(props),
//           color: "white",
//           _focus: { bg: mode("brand.500", "brand.400")(props) },
//           _active: { bg: mode("brand.500", "brand.400")(props) },
//           _hover: { bg: mode("brand.600", "brand.400")(props) },
//         }),
//       },
//     },
//   },
// }

// // ------------------------------

// export const AdminTabUI = {
//   baseStyle: (props: string[]) => ({
//     minWidth: "100px",
//     bg: mode("brand.100", "brand.200")(props),
//     color: "brand.500",
//     fontWeight: "bold",
//     textTransform: "uppercase",
//     borderRadius: "100px",
//   }),
// }
// // export const AdminTabComponent = { components: { AdminTabUI } }
