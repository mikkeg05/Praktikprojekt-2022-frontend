import { useBasket } from "contexts/basketContext"
import { PriceItem } from "./PriceItem"

export function FullPrice ({ total }: {total: number}) {
  const { basketItems } = useBasket()

  return (<div>
        <h2>Total Summary</h2>
        <div className="price-list">
          {basketItems.map(item => (<PriceItem key={item.id} {...item}></PriceItem>))}
      </div>
      <hr></hr>
      <div className="total-container">
          <h3>Total</h3><h3>{total},-</h3>
      </div>
    </div>
  )
}
