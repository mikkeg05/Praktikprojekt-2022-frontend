import { Bag } from "../types/shoppage.model"
import Image from "next/image"
import { useBasket } from "contexts/basketContext"
import imageLoader from "features/imageLoader"
import { Button } from "@chakra-ui/react"

export function ItemBags ({
  TrashBagImageUrl, Size, Price, Measurements, Id, ItemType, Title,
}: Bag) {
  const details = Measurements.split(/\r?\n|\r|\n/g)
  // styling image
  function getHeight () {
    if (Size === "Large") {
      return "180rem"
    } else if (Size === "Medium") {
      return "160rem"
    } else {
      return "140rem"
    }
  }
  function getWidth () {
    if (Size === "Large") {
      return "190rem"
    } else if (Size === "Medium") {
      return "170rem"
    } else {
      return "150rem"
    }
  }

  const { increaseItemQuantity } = useBasket()
  // const quantity = getItemQuantity(id)

  return (
    <article className="bagitem">
        <div className="bag-img-container">
        <Image unoptimized={true} loader={imageLoader}
          className="bag-img" src={`http://local.spacedebris.dk${TrashBagImageUrl}`} height={getHeight()} width={getWidth()} alt={`${Size}`}></Image>
        </div>
      <div className="bag-title"><h3>{Size} {Price},-</h3></div>
          <div className="bag-text">
        <div><li>- {details[0]}</li><li>- {details[1]}</li><li>- {details[2]}</li></div>
        <Button onClick={() => increaseItemQuantity(Id, ItemType, Price, Title, Size)} className="buy-btn">Add to basket</Button></div>
    </article>)
}
