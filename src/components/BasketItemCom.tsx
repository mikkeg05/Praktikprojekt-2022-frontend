// import { useBasket } from "contexts/basketContext"
import { DeleteIcon } from "@chakra-ui/icons"
import { useBasket } from "contexts/basketContext"
import imageLoader from "features/imageLoader"
import Image from "next/image"
import { ShopPageType } from "../types/shoppage.model"
// import { getStaticProps } from "next"
import { useEffect, useState } from "react"
import { Box } from "@chakra-ui/react"

type BasketItemProps = {
    id: number
    quantity: number
    ItemType: string
    Price: number
    size?: string
    weight?: number
    sizeInM?: number
    itemName?: string
}

export function BasketItemCom ({ id, quantity, ItemType, Price }: BasketItemProps) {
  const { removeFromBasket, decreaseItemQuantity, increaseItemQuantity, basketItems } = useBasket()
  const [shopPageData, setData] = useState<ShopPageType>()
  const [, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch("http://local.spacedebris.dk/umbraco/api/endpoint/GetWebshoppage").then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])
  let item
  if (shopPageData !== undefined) {
    if (ItemType === "Bag") {
      const bags = shopPageData.TrashBagSection.Bags
      item = bags.find(i => i.Id === id)
    } else if (ItemType === "Weight" && id === 3) {
      item = shopPageData.Weight
    } else if (ItemType === "trash pickup") {
      item = basketItems.find(i => i.ItemType === ItemType)
    }
  }

  // if (itemType !== "trash pickup" && item == null) return null
  if (item == null) return null

  function getHeight (size: string | undefined) {
    if (size === "Large") {
      return "180rem"
    } else if (size === "Medium") {
      return "160rem"
    } else {
      return "140rem"
    }
  }
  function getWidth (size: string | undefined) {
    if (size === "Large") {
      return "190rem"
    } else if (size === "Medium") {
      return "170rem"
    } else {
      return "150rem"
    }
  }

  const h2Style = { fontSize: "1.2rem" }

  const priceStyle = { fontSize: "1.6rem" }

  const noInterface = {
    display: "flex",
    alignItems: "center",
    border: "solid 1px black",
    justifySelf: "bottom",
    maxWidth: "6.9rem",
  }

  const interfaceBtn = {
    height: "2.3rem",
    width: "2.3rem",
  }

  const interfaceNumb = {
    height: "2.3rem",
    width: "2.3rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRight: "solid 1px black",
    borderLeft: "solid 1px black",
  }

  return <>
     {ItemType === "trash pickup"
       ? <Box boxShadow='md' rounded="md" flexWrap="wrap" display="flex" gap="1rem" p="0.5rem">
        <Box bgGradient='linear(to-b, #F38D10, #FFFFFF)' borderRadius="1rem" p="1rem">
          <Box position="relative" display="grid" justifyContent="center" maxW="6rem" minW="6rem" minH="6rem">
          <Image layout="fill" objectFit="contain" unoptimized={true} loader={imageLoader} src="/item-trashpickup.png" alt={`${item.ItemType}`}></Image>
          </Box>
        </Box>
        <Box display="flex" justifyContent="space-between" flexGrow="1">
          <Box display="flex" flexDir="column" justifyContent="space-between" >
            <Box>
              <h2 style={h2Style}>{item.Title}</h2>
              <h3>{item.sizeInM} m3</h3>
              <h3>{item.weight} kg</h3>
            </Box>
          </Box>
          <Box display="flex" flexDir="column" justifyContent="space-between">
            <DeleteIcon placeSelf="flex-end" _hover={{ cursor: "pointer" }} onClick={() => removeFromBasket(id)} w={4} h={4} />
            <h2 style={priceStyle}>{item.Price},-</h2>
          </Box>
        </Box>
        </Box>
       : <Box boxShadow='md' rounded="md" flexWrap="wrap" display="flex" gap="1rem" p="0.5rem">
            <Box display="flex" justifyContent="center" maxW="8rem" minW="8rem" bgGradient='linear(to-b, #F38D10, #FFFFFF)' borderRadius="1rem">{ItemType === "Bag" ? <Image unoptimized={true} loader={imageLoader} src={`http://local.spacedebris.dk${item.TrashBagImageUrl}`} height={getHeight(item.Size)} width={getWidth(item.Size)} alt={`${item.Size}`}></Image> : <Image unoptimized={true} loader={imageLoader} src={`http://local.spacedebris.dk${item.WeightImageUrl}`} height="130px" width="80px" alt={`${item.ItemType}`}></Image>}</Box>
            <Box display="flex" justifyContent="space-between" flexGrow="1">
                <Box display="flex" flexDir="column" justifyContent="space-between" >
                    <Box>
                        {ItemType === "Bag" ? (<h2 style={h2Style}>{item.Title}</h2>) : (<h2 style={h2Style}>{item.Title}</h2>)}
                        {ItemType === "Bag" ? (<h3>{item.Size}</h3>) : null}
                        <h3>{item.Price},-</h3>
                    </Box>
                    <Box style={noInterface}>
                        <button style={interfaceBtn} onClick={() => decreaseItemQuantity(id)}>-</button>
                        <p style={interfaceNumb} >{quantity}</p>
                        <button style={interfaceBtn} onClick={() => increaseItemQuantity(id, ItemType, Price)} >+</button>
                    </Box>
                </Box>
                <Box display="flex" flexDir="column" justifyContent="space-between">
                <DeleteIcon placeSelf="flex-end" _hover={{ cursor: "pointer" }} onClick={() => removeFromBasket(id)} w={4} h={4} />
                  <h2 style={priceStyle}>{item.Price * quantity},-</h2>
                </Box>
            </Box>
        </Box>}
 </>
}
/* export const getServerSideProps: getStaticProps = async () => {
  const res = await fetch("http://local.spacedebris.dk/umbraco/api/endpoint/GetWebshoppage")
  const data = await res.json()
  return { props: { shopPageData: data } }
  console.log(props)
} */

/* export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch("http://local.spacedebris.dk/umbraco/api/endpoint/GetWebshoppage")
  const data = await res.json()
  return { props: { shopPageData: data } }
} */
