import { Drawer, DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton, Box, Button } from "@chakra-ui/react"
import { useBasket } from "contexts/basketContext"
import { BasketItemCom } from "./BasketItemCom"
import Link from "next/link"

export function Basket () {
  const { basketItems, basketQuantity, closeBasket, basketIsOpen } = useBasket()
  // find prisen af items i basket
  const total = basketItems.reduce((total, BasketItemCom) => {
    return total + (BasketItemCom?.Price || 0) * BasketItemCom.quantity
  }, 0)

  const totalStyle = { fontSize: "2rem" }
  const hrStyle = { marginBlock: "1rem", borderTop: "1px solid black" }
  const hrbStyle = { borderTop: "1px solid black" }

  return <>
    <Drawer isOpen={basketIsOpen} onClose={closeBasket} size={"md"}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader pb="0">
          <h1 color="black">Your cart ({basketQuantity})</h1>
           <DrawerCloseButton size="lg" />
          <hr style={hrStyle}></hr>
        </DrawerHeader>
          {basketQuantity === 0
            ? (<DrawerBody display="flex" gap="1rem" flexDir="column" alignItems="center"><h2>Your basket is currently empty!</h2>
            <Link href="/shoppage">
              <Button _hover={{
                bg: "#2ccc3c", color: "black", boxShadow: "0 0.6em 0.5em -0.4em #2ccc3c", transform: "translateY(-0.25em)",
              }} bg="#00970F" color="white" fontFamily="'Montserrat', sans-serif" fontSize="1rem" fontWeight="500" onClick={closeBasket} >Return to shop</Button>
              </Link>
              </DrawerBody>)
            : (<><DrawerBody display="flex" flexDir="column" gap="2rem"> {basketItems.map(item => (<BasketItemCom key={item.id} {...item}></BasketItemCom>))}
            <hr style={hrbStyle}></hr>
              <Box display="flex" justifyContent="center" gap="1rem" alignItems="center">
              <h2 style={totalStyle}>{total},-</h2>
                <Link passHref href="/checkout">
                <Button _hover={{
                  bg: "#2ccc3c", color: "black", boxShadow: "0 0.6em 0.5em -0.4em #2ccc3c", transform: "translateY(-0.25em)",
                }} bg="#00970F" color="white" fontFamily="'Montserrat', sans-serif" fontSize="1rem" fontWeight="500" onClick={closeBasket}>Start checkout</Button>
                </Link>
            </Box></DrawerBody></>)}
      </DrawerContent>
    </Drawer></>
}
