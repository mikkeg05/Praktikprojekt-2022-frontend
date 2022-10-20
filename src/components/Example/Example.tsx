import { LogoIcon } from "@assets/icons/Logo"
import { Box, Text } from "@chakra-ui/react"
import { motion, useAnimation } from "framer-motion"
import { useEffect } from "react"

export function Example () {
  const controls = useAnimation()

  useEffect(() => {
    controls.start({
      opacity: [0, 1],
      translateY: [20, 0],
    })
  }, [controls])

  return (
    <Box
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexFlow="column nowrap"
    >
       <motion.div
        animate={controls}

        initial={{
          opacity: 0,
          translateY: 20,
        }}
        transition={{ translateY: { duration: 2, ease: "easeOut" } }}
      >
        <LogoIcon width="25vw" height="100%" />
      </motion.div>
      <br />
      <motion.div
        animate={controls}
        initial={{ opacity: 0 }}
        transition={{ opacity: { delay: 0.5, duration: 3 } }}
      >
        <Text fontSize="xl" fontWeight={100}>
          Baseline
        </Text>
      </motion.div>
    </Box>
  )
}
