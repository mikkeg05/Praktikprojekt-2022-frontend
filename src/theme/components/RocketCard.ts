export const RocketCard = {
  baseStyle: {
    maxWidth: "600px",
    flexDir: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    bg: "white",
    color: "black",
    borderRadius: "5",
    boxShadow: "0px 2px 4px 2px rgba(0, 0, 0, 0.02), 1px 1px 2px 0px inset rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
  },
  variants: {
    default: {
      color: "black",
      bg: "transparent",
    },
  },
  defaultProps: { variant: "default" },
}

export const FlexCardHeading = {
  w: "100%",
  padding: "0 0 15px 0",
  display: "flex",
  justifyContent: "space-between",
  color: "black",
}

export const FlexCardTxt = {
  minW: "70%",
  padding: "5px 10px",
  display: "flex",
  flexDirection: "column",
  color: "black",
}

export const FlexRowOuterCntr = {
  w: "100%",
  display: "flex",
  flexDir: "row",
  flexWrap: "wrap",
  justifyContent: "space-between",
  columnGap: "0px",
}

export const FlexRowInnerCntr = {
  w: "48%",
  display: "flex",
  flexDir: "row",
  flexWrap: "wrap",
  justifyContent: "space-between",
}

export const FlexRow = {
  w: "100%",
  paddingY: "2px",
  display: "flex",
  flexDir: "row",
  flexWrap: "wrap",
  justifyContent: "space-between",
  borderTopWidth: "1px",
  borderColor: "gray.300",
}

export const RowHeader = {
  minW: "100px",
  fontWeight: "semibold",
}
export const RowTxt = {
  maxW: "130px",
  textAlign: "right",
}
