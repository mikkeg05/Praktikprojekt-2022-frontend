import { Flex, IconButton, Button } from "@chakra-ui/react"
import Image from "next/image"
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons"
import NextLink from "next/link"
import { useState, useEffect } from "react"
import imageLoader from "features/imageLoader"
import { useBasket } from "contexts/basketContext"
import { Footer } from "./Footer"

export function Nav ({ children }: { children: any }) {
  const [menu, setMenu] = useState("none")
  const [oldScrollPosition, setOldScrollPosition] = useState(0)
  const [isScrolling, setIsScrolling] = useState("default")
  const [basketChanged, setBasketChanged] = useState(false)
  const { basketQuantity, openBasket } = useBasket()

  // style
  const menuLink = {
    color: "#F4F4F4",
    backgroundColor: "transparent",
    cursor: "pointer",
  }
  // checks scroll
  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY
      setOldScrollPosition(position)
      if (oldScrollPosition > window.scrollY) {
        setIsScrolling("true")
      } else {
        setIsScrolling("false")
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [oldScrollPosition])

  // check if basket changed
  useEffect(() => {
    if (basketQuantity !== 0) {
      setBasketChanged(true)
    } else {
      setBasketChanged(false)
    }
  }, [basketQuantity])

  // nav "animation"
  function getTopValue () {
    // hvis vi ruller op eller lige er loaded eller basketchanged set nav til at blive vist
    if (isScrolling === "true" || isScrolling === "default") {
      // setBasketChanged(false)
      return "0"
    } else if (basketChanged === true) {
      setTimeout(setBasketChanged, 1000, false)
      return "0"
    } else {
      return "-6rem"
    }
  }

  return (
    <><div id="nav">
    <Flex
      position="fixed"
      zIndex={20}
      bg="#202020"
      m="0"
      top={getTopValue()}
      left="0"
      w="100%"
      p="0.4rem"
      justify="space-between"
      py="1rem"
      px={[
        "0.5rem",
        "1rem",
        "2rem",
        "2rem",
      ]}
      transition={"top 0.3s"}
    >
      <Flex gap="2rem">
        <Flex
          _hover={{ cursor: "pointer" }}
          ><NextLink href="/" passHref>
            <a>
                <Image unoptimized={true} loader={ imageLoader } src="/sdLogo.svg" width={45} height={45}></Image>
              </a>
            </NextLink>
        </Flex>

        <Flex display={[
          "none",
          "none",
          "flex",
          "flex",
        ]}><NextLink href="/contentpage" passHref>
            <Button style={menuLink} as="a" aria-label="about">
              Our Mission
            </Button>
            </NextLink>
            <NextLink href="/adminPage" passHref>
            <Button style={menuLink} as="a" aria-label="admin">
              Admin
            </Button>

            </NextLink>
        </Flex>
      </Flex>
      <Flex align="center">
        <Flex gap="1rem" alignItems="center">
            <NextLink href="/shoppage" passHref>

            <Button
              display={[
                "none",
                "none",
                "flex",
                "flex",
              ]}
              mr="1rem"
                _hover={{
                  bg: "#ff9f2a", color: "black", boxShadow: "0 0.6em 0.5em -0.4em #ff9f2a", transform: "translateY(-0.25em)",
                }} bg="#D67600" color="white" fontFamily="'Montserrat', sans-serif" fontSize="1rem" fontWeight="500"
              as="a"
              aria-label="webshop"
            >
              Webshop
            </Button>

            </NextLink>
          <Flex
            display={[
              "none",
              "none",
              "flex",
              "flex",
            ]}
            _hover={{ cursor: "pointer" }}
            ><NextLink href="/" passHref>
<a>
              <Image
                loader={ imageLoader }
                    unoptimized={true}
                src="/profile.svg"
                width={35}
                height={35}
                alt="profile"
                  ></Image></a>

              </NextLink>
          </Flex>
          <Flex
            _hover={{ cursor: "pointer" }}
            mr={[
              "1rem",
              "1rem",
              "0",
              "0",
            ]}
          >
              <Button onClick={openBasket} _hover={{ backgroundColor: "transparent" }} backgroundColor={"transparent"} position={"relative"}>
                <Image unoptimized={true} src="/cart.svg" loader={ imageLoader } width={40} height={40} alt="cart"></Image>
                  <div className="basketCounter"><p>{basketQuantity}</p></div>
            </Button>
          </Flex>
        </Flex>
        <Flex justify="flex-end">
          <IconButton
            color="#202020"
            bgColor="#F4F4F4"
            aria-label="Open Menu"
            size="md"
            icon={<HamburgerIcon />}
            display={[
              "flex",
              "flex",
              "none",
              "none",
            ]}
            onClick={() => setMenu("flex")}
          />
        </Flex>
      </Flex>
      <Flex
        w="100%"
        bgColor={"#202020"}
        zIndex={20}
        h="100vh"
        pos="fixed"
        top="0"
        left="0"
        overflowY="auto"
        flexDir="column"
        display={menu}
      >
        <Flex justify="flex-end">
          <IconButton
            aria-label="Close Menu"
            size="md"
            mt="1.1rem"
            mr={[
              "0.5rem",
              "1rem",
              "0",
              "0",
            ]}
            icon={<CloseIcon />}
            onClick={() => setMenu("none")}
          />
        </Flex>
        <Flex flexDir="column" align="center" mt="1rem" gap="1rem">
            <NextLink href="/shoppage" passHref>

            <Button onClick={() => setMenu("none")} style={menuLink} as="a" aria-label="webshop">
              Webshop
            </Button>

            </NextLink>
            <NextLink href="/contentpage" passHref>

            <Button onClick={() => setMenu("none")} style={menuLink} as="a" aria-label="about">
              Our Mission
            </Button>

            </NextLink>
            <NextLink href="/adminPage" passHref>

            <Button onClick={() => setMenu("none")} style={menuLink} as="a" aria-label="admin">
              Admin
            </Button>
            </NextLink>
            <NextLink href="/" passHref>

            <Button onClick={() => setMenu("none")} style={menuLink} as="a" aria-label="profile">
              My Profile
            </Button>

            </NextLink>
        </Flex>
      </Flex>
        </Flex></div>
      {children}<Footer></Footer></>
  )
}
