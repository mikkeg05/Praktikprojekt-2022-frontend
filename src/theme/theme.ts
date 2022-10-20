/* eslint-disable quotes */
/**
 * default.theme.js
 * https://chakra-ui.com/docs/styled-system/theming/theme
 */
import { extendTheme } from "@chakra-ui/react"

// Foundational style overrides
import { colors } from "./foundations/colors"
import { typography } from "./foundations/typography"
import { radius } from "./foundations/radius"
import { styles } from "./styles"
// import { fonts } from "./foundations/fonts"
import * as allComponents from "./components"
import { RocketCard } from "./components"

const overrides = {
  // Global style overrides
  styles,

  fonts: {
    heading: `'Montserrat', sans-serif`,
    body: `'Montserrat', sans-serif`,
  },

  // Theming/Foundational style overrides
  colors,
  ...typography,
  ...radius,
  // ...fonts,

  // Components style overwrites
  components: {
    ...allComponents,
    RadioGroup: { marginBottom: "4rem" },
    RocketCard,
  },

  // Config
  config: { cssVarPrefix: "my-theme" },

  // test
  sizes: {
    xs: "10px",
    s: "12px",
    m: "14px",
    ms: "16px",
    xxl: "24px",
  },
}

const theme = extendTheme({
  overrides,
  styles,
  colors,
  // fonts,
})

export {
  theme,
}
