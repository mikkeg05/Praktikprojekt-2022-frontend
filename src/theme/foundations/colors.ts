const themeColors = {
  sdblack: "#202020",
  trueblack: "#000000",
  sdwhite: "#f4f4f4",
  truewhite: "#ffffff",
  purple: "#7E0ECF",
  yellow: "#FFCA0F",
  gray: {
    900: "2e2e2e",
    800: "#303030",
    700: "#454545",
    600: "#525252",
    500: "#6a6a6a",
    400: "#838383",
    300: "#9c9c9c",
    200: "#b5b5b5",
    100: "#cdcdcd",
    50: "#e6e6e6",
    lightest: "#e6e6e6", // Naming convention should be changed once we have all correct gray shades. Probably in above manner.
    lighter: "#cdcdcd",
    dark: "#2e2e2e",
  },
  blue: { normal: "#28249B" },
  red: "red",
  brand: {
    100: "#ffffff", // true white
    150: "#f4f4f4", // SD white
    200: "#000000", // true black
    250: "#202020", // SD black
    300: "#2ccc3c", // light green
    400: "#00970F", // Dark green
    500: "#f38d10", // Light orange - rgb(243, 141, 16)
    600: "#c35809", // Dark orange - rgb(195, 88, 9)
  },
}

export const colors = {
  // Theme Colors
  ...themeColors,

  // Named colors
  error: themeColors.red,
  info: themeColors.gray["600"],

  gradients: {
    main: {
      fallback: "#7d0ecf",
      gradient: "linear-gradient(45deg, #7d0ecf 15%, #09aeff 80%)",
    },
  },
}
