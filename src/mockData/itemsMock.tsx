import { GetItemData } from "types/items.model"

export const itemData: GetItemData = {
  bags: [
    {
      itemName: "SD INC Bag",
      itemType: "bag",
      size: "Small",
      price: 100,
      pcs: 20,
      l: 100,
      gal: 26.4,
      descrip: "Make your disposal even more efficient with our bags by skipping measuring your trash! Using our bags we already know the measurements so you don’t have to tell us and checkout will be so much faster! They are made from 100% ecofriendly material and they are reused again and again so you don't have to feel guilty about your plastic waste!",
      id: 0,
      image: "item-bag.png",
    },
    {
      itemName: "SD INC Bag",
      itemType: "bag",
      size: "Medium",
      price: 125,
      pcs: 20,
      l: 250,
      gal: 66,
      descrip: "Make your disposal even more efficient with our bags by skipping measuring your trash! Using our bags we already know the measurements so you don’t have to tell us and checkout will be so much faster! They are made from 100% ecofriendly material and they are reused again and again so you don't have to feel guilty about your plastic waste!",
      id: 1,
      image: "item-bag.png",
    },
    {
      itemName: "SD INC Bag",
      itemType: "bag",
      size: "Large",
      price: 150,
      pcs: 20,
      l: 540,
      gal: 142.7,
      descrip: "Make your disposal even more efficient with our bags by skipping measuring your trash! Using our bags we already know the measurements so you don’t have to tell us and checkout will be so much faster! They are made from 100% ecofriendly material and they are reused again and again so you don't have to feel guilty about your plastic waste!",
      id: 2,
      image: "item-bag.png",
    },

  ],
  weight: {
    itemName: "SD Weight",
    itemType: "weight",
    price: 200,
    details: [
      "Fitted hook",
      "Transportable",
      "Easy to use",
      "Multiple units",
    ],
    quote: "Use our speciel weight to weigh your trash and save time!",
    descrip: "Our weight is made from eco-friendly materials and it makes weighing your trash fast and easy! It has both kilogram (kg), us pounds (lbs) as units so you don't have to waste time converting! Customize to what is just right for you.",
    id: 3,
    image: "item-weight.png",
  },
}
