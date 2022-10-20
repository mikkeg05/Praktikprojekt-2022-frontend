import { useBasket } from "contexts/basketContext"
import imageLoader from "../../../features/imageLoader"
import Image from "next/image"
import { useEffect, useState } from "react"
import { ShopPageType } from "../../../types/shoppage.model"

type BasketItemProps = {
    id: number
    quantity: number
    ItemType: string
    Price: number
    size?: string
    weight?: number
    sizeInM?: number
    Title?: string
}

export function CheckoutItem ({
  id, quantity, ItemType, Price, Title,
}: BasketItemProps) {
  const { basketItems } = useBasket()
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

  if (item == null) return null

  function getHeight (size: string | undefined) {
    if (size === "Large") {
      return "140rem"
    } else if (size === "Medium") {
      return "120rem"
    } else {
      return "100rem"
    }
  }
  function getWidth (size: string | undefined) {
    if (size === "Large") {
      return "150rem"
    } else if (size === "Medium") {
      return "130rem"
    } else {
      return "110rem"
    }
  }

  return (<>
    {ItemType === "trash pickup"
      ? <article className="checkout-item">
            <div className="checkout-item-img">
          <Image unoptimized={true} loader={imageLoader} src="/item-trashpickup.png" height="90px" width="140px" alt={`${item.ItemType}`}></Image>
            </div>
            <div className="checkout-item-info">
                <div>
              <h3>{Title}</h3>
              <p>{item.sizeInM} m3</p>
                      <p>{item.weight} kg</p></div>
                  <h4 className="item-price">{Price},-</h4>
            </div>
        </article>
      : <article className="checkout-item">
        <div className="checkout-item-img">
        {item.ItemType === "Bag"
          ? <Image unoptimized={true} loader={imageLoader} className="bag-img" src={`http://local.spacedebris.dk${item.TrashBagImageUrl}`} height={getHeight(item.Size)} width={getWidth(item.Size)} alt={`${item.Size}`}></Image>
          : <Image unoptimized={true} loader={imageLoader} src={`http://local.spacedebris.dk${item.WeightImageUrl}`} height="130px" width="85px" alt={`${item.ItemType}`}></Image>}
        </div>
              <div className="checkout-item-info">
                <div>
              <h3>{item.Title} {item.ItemType === "Bag" ? item.Size : null}</h3>
                      <p>{quantity} x {item.Price},-</p></div>
                  <h4 className="item-price">{item.Price * quantity},-</h4>
        </div>
        </article>}
  </>)
}
