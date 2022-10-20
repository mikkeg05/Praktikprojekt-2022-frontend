import { YourItems } from "./YourItems"
import { DeliveryDate } from "./DeliveryDate"
import { PaymentMethod } from "./PaymentMethod"
import { FullPrice } from "./FullPrice"
// import { useState } from "react"
import { CustomerInfo, GarbageItem, PostData } from "../../../types/checkoutorder.model"
import { useBasket } from "contexts/basketContext"
import { Button } from "@chakra-ui/react"
import { useState } from "react"

type Step4Props = {
  total: number;
  currenStepIndex: number;
  setCurrentStepIndex: (arg0: number) => void;
  customerInfo: CustomerInfo;
  pickupDate: string;
  payment: string;
}

export function Step4 ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  total, currenStepIndex, setCurrentStepIndex, customerInfo, pickupDate, payment,
}: Step4Props) {
  const { basketItems } = useBasket()
  const [isPosting, setIsPosting] = useState(false)

  async function postOrderData () {
    setIsPosting(true)
    const FirstName = customerInfo.firstName
    const LastName = customerInfo.lastName
    // set correct data here
    const basketGarbage = basketItems.find(i => i.ItemType === "trash pickup")
    /*   const basketGarbage = basketItems.find((i) => {
      if (i.ItemType === "trash pickup") {
        return i
      } else {
        return null
      }
    }) */
    const helloid = basketItems.map(({ ItemType, id, quantity }) => {
      if (ItemType !== "trash pickup") {
        return { id, quantity }
      } else {
        return null
      }
    })
    const id = helloid.filter((i) => {
      return i !== null
    })

    // let garbageItem:GarbageItem
    if (basketGarbage !== undefined && id.length === 0) {
      const { weight, sizeInM } = basketGarbage
      const garbageItem:GarbageItem = {
        weight,
        m3: sizeInM,
      }
      // const id: number[] = []
      const parentid = basketGarbage.parentId
      const value = {
        FirstName, LastName, parentid, id, garbageItem,
      }
      postFullData(value)
    } else if (basketGarbage === undefined && id.length !== 0) {
      if (basketGarbage === undefined) return null
      const parentid = "1152"
      const garbageItem = basketGarbage
      const value = {
        FirstName, LastName, parentid, id, garbageItem,
      }
      postFullData(value)
    } else if (basketGarbage !== undefined && id.length !== 0) {
      const { weight, sizeInM } = basketGarbage
      const garbageItem: GarbageItem = {
        weight,
        m3: sizeInM,
      }
      const parentid = basketGarbage.parentId
      const value = {
        FirstName, LastName, parentid, id, garbageItem,
      }
      postFullData(value)
    } else {
      alert("something went wrong")
      setIsPosting(false)
    }
  }

  async function postFullData (value: PostData) {
  // post here
    const JSONdata = JSON.stringify(value)

    const endpoint = "http://local.spacedebris.dk/umbraco/api/Endpoint/garbageItemPostM3"
    const header = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "http://localhost:3000",
      Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8,application/json",
    }

    const options = {
      method: "POST",
      body: JSONdata,
      headers: header,
    }

    // Send the form data to our forms API on Vercel and get a response.
    const postResponse = await fetch(endpoint, options)

    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await postResponse.json()
    if (result.Message === "An error has occurred.") {
      alert("unfortunately your order failed")
      setIsPosting(false)
    } else {
      setCurrentStepIndex(currenStepIndex + 1)
      setIsPosting(false)
    }
  }

  return (<>
     <h1>Confirmation</h1>
    <div className="confirmation">
      <div className="confirmation-left">
      <div className="items-container">
      <YourItems/>
      </div>
      <div className="pickup-date-container">
        <DeliveryDate pickupDate={pickupDate}/>
      </div>
      <div className="pay-method-container">
        <PaymentMethod payment={payment}/>
      </div>
      </div>
      <div className="price-container">
        <FullPrice total={total}/>
        <Button isLoading={isPosting} _hover={{
          bg: "#2ccc3c", color: "black", boxShadow: "0 0.6em 0.5em -0.4em #2ccc3c", transform: "translateY(-0.25em)",
        }} justifySelf="center" w="8rem" bg="#00970F" color="white" fontFamily="'Montserrat', sans-serif" fontSize="1rem" fontWeight="500" onClick={() => postOrderData()}>Confirm</Button>
      </div>
    </div>
</>
  )
}
