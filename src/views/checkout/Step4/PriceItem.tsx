import { useBasket } from "contexts/basketContext"
import { useEffect, useState } from "react"
import { ShopPageType } from "../../../types/shoppage.model"

type PriceItemProps = {
    id: number
    quantity: number
    ItemType: string
    Price: number
    size?: string
    Title?: string
}

export function PriceItem ({ id, quantity, ItemType, Price }: PriceItemProps) {
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

  return (<ul className="price-list-item">
      <li>{item.Title} {item.ItemType === "Bag" ? item.Size : null}</li>
    <li>{Price * quantity},-</li>

    </ul>
  )
}
