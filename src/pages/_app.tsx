import { ChakraProvider } from "@chakra-ui/provider"
import { ReactElement, ReactNode } from "react"
import type { AppProps } from "next/app"
import { NextPage } from "next"
import "../sass/style.scss"
import { theme } from "../theme/theme"
import { BasketProvider } from "contexts/basketContext"
import "@fontsource/montserrat"
type NextPageWithNav = NextPage & {
  getNav?: (page: ReactElement) => ReactNode
}
type AppPropsWithNav = AppProps & {
  Component: NextPageWithNav
}
function MyApp ({ Component, pageProps }: AppPropsWithNav) {
  const getNav = Component.getNav ?? ((page) => page)
  return (
    <ChakraProvider theme={theme} cssVarsRoot="body">
    <BasketProvider>
        {getNav(<Component {...pageProps} />)}
        {/* <Footer/> */}
    </BasketProvider>
    </ChakraProvider>)
}

export default MyApp
