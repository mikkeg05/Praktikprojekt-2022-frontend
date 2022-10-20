/* eslint-disable quotes */
export const fontSpecs = {
  base: { fontFamily: "Montserrat, sans-serif" },
  /* Headers */
  h1: { fontFamily: "Montserrat, sans-serif" },
  h2: { fontFamily: "Montserrat, sans-serif" },
  h3: { fontFamily: "Montserrat, sans-serif" },
  h4: { fontFamily: "Montserrat, sans-serif" },
  h5: { fontFamily: "Montserrat, sans-serif" },

  /* Paragraph */
  p: { fontFamily: "Montserrat, sans-serif" },
}

export const fontFamily = {
  fontFamily: "Montserrat, sans-serif",
  heading: { fontFamily: "Montserrat, sans-serif" },
  body: { fontFamily: "Montserrat, sans-serif" },
}

export const fonts = {
  fontFamilies: {
    base: fontSpecs.base.fontFamily,
    h1: fontSpecs.h1.fontFamily,
    h2: fontSpecs.h2.fontFamily,
    h3: fontSpecs.h3.fontFamily,
    h4: fontSpecs.h4.fontFamily,
    h5: fontSpecs.h5.fontFamily,
    p: fontSpecs.p.fontFamily,
  },

  fontFamily: {
    fontFamily,
    heading: fontFamily.heading.fontFamily,
    body: fontFamily.body.fontFamily,
  },
}
