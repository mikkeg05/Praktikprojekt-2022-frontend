import { createContext, useContext, useState, ReactNode } from "react"
import { Basket } from "../components/Basket"

type BasketProviderProps = {
    children: ReactNode
}

type BasketItem = {
    id: number
    quantity: number
    ItemType: string
    Price: number
    Size?: string
    weight?: number
    sizeInM?: number
    Title?: string
    TrashBagImageUrl?: string
    WeightImageUrl?: string
    parentId?: string
}

type BasketContext = {
    openBasket: () => void
    closeBasket: () => void
    getItemQuantity: (id: number) => number
    increaseItemQuantity: (id: number, ItemType: string, price: number, Title?: string, Size?: string) => void
    addTrashPickUp: (id: number, ItemType: string, price: number, sizeInM?: number, weight?: number, Title?: string, parentId?: string,) => void
    decreaseItemQuantity: (id: number) => void
    removeFromBasket: (id: number) => void
    basketQuantity: number
    basketItems: BasketItem[]
    basketIsOpen: boolean
    setBasketItems: (item: any) => void

}

const BasketContext = createContext({} as BasketContext)

export function useBasket () {
  return useContext(BasketContext)
}

export function BasketProvider ({ children }: BasketProviderProps) {
  const [basketIsOpen, setbasketIsOpen] = useState(false)
  const [basketItems, setBasketItems] = useState<BasketItem[]>([])

  // number of items in basket
  const basketQuantity = basketItems.reduce((quantity, item) => item.quantity + quantity, 0)

  // open and close basket functions
  const openBasket = () => setbasketIsOpen(true)
  const closeBasket = () => setbasketIsOpen(false)

  // if we find item id give quantity otherwise give 0
  function getItemQuantity (id: number) {
    return basketItems.find(item => item.id === id)?.quantity || 0
  }

  function increaseItemQuantity (id: number, ItemType: string, Price: number, Title?: string, Size?: string) {
    setBasketItems(currItems => {
      if (currItems.find(item => item.id === id) == null) {
        return [
          ...currItems,
          {
            id, quantity: 1, ItemType, Price, Title, Size,
          },
        ]
      } else {
        return currItems.map(item => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 }
          } else {
            return item
          }
        })
      }
    })
  }

  function decreaseItemQuantity (id: number) {
    setBasketItems(currItems => {
    // if we find item with quan of 1 then remove it return rest of basket
      if (currItems.find(item => item.id === id)?.quantity === 1) {
        return currItems.filter(item => item.id !== id)
        // else we minus from quantity
      } else {
        return currItems.map(item => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 }
          } else {
            return item
          }
        })
      }
    })
  }

  function removeFromBasket (id: number) {
    setBasketItems(currItems => {
      return currItems.filter(item => item.id !== id)
    })
  }

  function addTrashPickUp (id: number, ItemType: string, Price: number, sizeInM?: number, weight?: number, Title?: string, parentId?: string) {
    setBasketItems(currItems => {
      if (currItems.find(item => item.id === id) == null) {
        return [
          ...currItems,
          {
            id, quantity: 1, ItemType, Price, sizeInM, weight, Title, parentId,
          },
        ]
      } else {
        alert("You already have a trash disposal order in your basket, remove the one you have in your basket to add a new one")
        return [...currItems]
      }
    })
  }

  return <BasketContext.Provider value={{
    basketIsOpen, openBasket, closeBasket, getItemQuantity, increaseItemQuantity, addTrashPickUp, decreaseItemQuantity, removeFromBasket, basketQuantity, basketItems, setBasketItems,
  }}>{children}{basketIsOpen ? (<Basket></Basket>) : null }</BasketContext.Provider>
}
