/* eslint-disable quotes */
export const textSpecs = {
  /**
   * Text Sizes are built using the 4pt system (aka a multiplaction of 4)
   */
  base: {
    fontSize: "16px",
    fontFamily: "Montserrat, sans-serif",
    marginBottom: ".5rem",
  },
  /* Headers */
  h1: {
    fontSize: "4rem", // ~ 64px
    fontFamily: "Montserrat, sans-serif",
    marginBottom: ".5rem",
  },
  h2: {
    fontSize: "2rem", // ~ 32px
    fontFamily: "Montserrat, sans-serif",
    marginBottom: ".5rem",
  },
  h3: {
    fontSize: "1.5rem", // ~ 24px
    fontFamily: "Montserrat, sans-serif",
    marginBottom: ".5rem",
  },
  h4: {
    fontSize: "1.2rem", // ~ 19.2px
    fontFamily: "Montserrat, sans-serif",
    marginBottom: ".5rem",
  },
  h5: {
    fontSize: "0.75rem", // ~ 12px
    fontFamily: "Montserrat, sans-serif",
    marginBottom: ".5rem",
  },

  /* Paragraph */
  p: {
    fontSize: ".875rem",
    fontFamily: `"Montserrat", sans-serif`,
    marginBottom: ".5rem",
  },
}
export const sizes = {
  // sizes: {
  fsxxs: { fontSize: ".625rem" },
  fsxs: { fontSize: ".75rem" },
  fss: { fontSize: ".875rem" },
  fsm: { fontSize: "1rem" },
  fsml: { fontSize: "1.125rem" },
  // },

}
export const fontFamily = {
  fontFamily: "Montserrat, sans-serif",
  // heading: { fontFamily: "Montserrat, sans-serif" },
  // body: { fontFamily: "Montserrat, sans-serif" },
}

export const typography = {
  fontSizes: {
    base: textSpecs.base.fontSize,
    h1: textSpecs.h1.fontSize,
    h2: textSpecs.h2.fontSize,
    h3: textSpecs.h3.fontSize,
    h4: textSpecs.h4.fontSize,
    h5: textSpecs.h5.fontSize,
    p: textSpecs.p.fontSize,

    fsxxs: sizes.fsxxs.fontSize,
    fsxs: sizes.fsxs.fontSize,
    fss: sizes.fss.fontSize,
    fsm: sizes.fsm.fontSize,
    fsml: sizes.fsml.fontSize,
  },
  fontFamily,
  // fontFamily: {
  //   heading: fontFamily.heading.fontFamily,
  //   body: fontFamily.body.fontFamily,
  // },

  lineHeight: {},

  fontWeights: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    black: 900,
  },
}
