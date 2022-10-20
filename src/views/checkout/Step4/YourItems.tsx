import { useBasket } from "contexts/basketContext"
import { CheckoutItem } from "./CheckoutItem"

export function YourItems () {
  const { basketItems } = useBasket()
  return (
        <div>
            <h2>Your Items</h2>
          {basketItems.map(item => (<CheckoutItem key={item.id} {...item}></CheckoutItem>))}
        </div>
  )
}
