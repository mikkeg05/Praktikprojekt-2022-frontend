import { Styles } from "@chakra-ui/theme-tools"
import { colors } from "./foundations/colors"
import { textSpecs, sizes, typography, fontFamily } from "./foundations/typography"

const styles: Styles = {
  global: {
    html: {
      height: "100%",
      fontSize: textSpecs.base.fontSize,
      fontFamily: fontFamily.fontFamily,
      color: colors.white,
    },
    body: { minHeight: "100%", bg: "" },
    p: textSpecs.p,
    h1: textSpecs.h1,
    h2: textSpecs.h2,
    h3: textSpecs.h3,
    h4: textSpecs.h4,
    h5: textSpecs.h5,
    fsxxs: sizes.fsxxs.fontSize,
    fsxs: sizes.fsxs.fontSize,
    fss: sizes.fss.fontSize,
    fsm: sizes.fsm.fontSize,
    fsml: sizes.fsml.fontSize,
    "b, strong": { fontWeight: typography.fontWeights.black },
  },
}

export {
  styles,
}
