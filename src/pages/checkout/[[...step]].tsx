import { Button, Breadcrumb, BreadcrumbItem } from "@chakra-ui/react"
import { useState } from "react"
import NextLink from "next/link"
import Image from "next/image"
import imageLoader from "features/imageLoader"
import { useBasket } from "contexts/basketContext"
import { Step1 } from "../../views/checkout/Step1"
import { Step2 } from "../../views/checkout/Step2"
import { Step3 } from "../../views/checkout/Step3"
import { Step4 } from "../../views/checkout/Step4"
import { Receipt } from "../../views/checkout/Receipt"

// import { CheckoutOrder } from "../../types/checkoutorder.model"
// import { CustomerInfo } from "../../types/checkoutorder.model"

export default function CheckoutSteps () {
  const { basketItems, setBasketItems } = useBasket()
  const [currenStepIndex, setCurrentStepIndex] = useState(0)
  const [customerInfo, setCustomerInfo] = useState({})
  const [pickupDate, setPickupDate] = useState("")
  const [payment, setPayment] = useState("")
  // const [postData, setPostData] = useState({})
  const total = basketItems.reduce((total, BasketItemCom) => {
    return total + (BasketItemCom?.Price || 0) * BasketItemCom.quantity
  }, 0)

  const steps = [
    { component: <Step1 setCustomerInfo={setCustomerInfo} currenStepIndex={currenStepIndex} setCurrentStepIndex={setCurrentStepIndex} /> },
    { component: <Step2 setPickupDate={setPickupDate} currenStepIndex={currenStepIndex} setCurrentStepIndex={setCurrentStepIndex} /> },
    { component: <Step3 setPayment={setPayment} currenStepIndex={currenStepIndex} setCurrentStepIndex={setCurrentStepIndex} /> },
    { component: <Step4 total={total} setCurrentStepIndex={setCurrentStepIndex} currenStepIndex={currenStepIndex} customerInfo={customerInfo} payment={payment} pickupDate={pickupDate} /> },
    { component: <Receipt total={total} setCurrentStepIndex={setCurrentStepIndex} currenStepIndex={currenStepIndex} customerInfo={customerInfo} payment={payment} pickupDate={pickupDate} /> },
  ]
  const active = {
    color: "#FFFFFF",
    backgroundColor: "#D67600",
  }
  const notDone = {
    color: "#0E0E0E",
    backgroundColor: "#E1E1E1",
  }

  const done = {
    color: "#AD5F00",
    backgroundColor: "#FFE3C0",
  }

  function getStep1Style () {
    // hvis det er dette step
    if (currenStepIndex === 0) {
      return active
    } else {
      return done
    }
  }
  function getStep2Style () {
    // hvis det er dette step
    if (currenStepIndex === 1) {
      return active
    } else if (currenStepIndex === 0) {
      return notDone
    } else {
      return done
    }
  }
  function getStep3Style () {
    // hvis det er dette step
    if (currenStepIndex === 2) {
      return active
    } else if (currenStepIndex === 3) {
      return done
    } else {
      return notDone
    }
  }
  function getStep4Style () {
    // hvis det er dette step
    if (currenStepIndex === 3) {
      return active
    } else {
      return notDone
    }
  }

  function disabledStep2 () {
    if (currenStepIndex >= 1) {
      return false
    } else {
      return true
    }
  }
  function disabledStep3 () {
    if (currenStepIndex >= 2) {
      return false
    } else {
      return true
    }
  }
  function goBack () {
    setCustomerInfo({})
    setPickupDate("")
    setPayment("")
  }

  function reset () {
    setBasketItems([])
    setCustomerInfo({})
    setPickupDate("")
    setPayment("")
  }
  // change step
  return (
    <main id="checkout-main">
      {currenStepIndex !== 4
        ? <nav className="checkout-nav">
          <NextLink href="/" passHref>
            <button onClick={() => goBack()} className="checkout-back-btn">
              <Image unoptimized={true} loader={imageLoader} src="/sdLogo.svg" width={40} height={40}></Image>
              <h1>SPACE DEBRIS INC.</h1>
            </button>
          </NextLink>
        </nav>
        : null}
      {currenStepIndex !== 4
        ? (<header id="checkout-header">
        <Breadcrumb className="breadcrumb">
          <BreadcrumbItem>
            <Button style={getStep1Style()} className="breadcrumb-btn" onClick={() => setCurrentStepIndex(0)}>Information</Button>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Button disabled={disabledStep2()} style={getStep2Style()} className="breadcrumb-btn" onClick={() => setCurrentStepIndex(1)}>Pick up date</Button>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            <Button disabled={disabledStep3()} style={getStep3Style()} className="breadcrumb-btn" onClick={() => setCurrentStepIndex(2)}>Payment</Button>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            <Button disabled={currenStepIndex !== 3} style={getStep4Style()} className="breadcrumb-btn" onClick={() => setCurrentStepIndex(3)}>Confirmation</Button>
          </BreadcrumbItem>
        </Breadcrumb>
      </header>)
        : (<header id="receipt-header">
          <div className="receipt-header-con">
            <NextLink href="/" passHref>
              <button onClick={() => reset()} className="receipt-back-btn">
            <Image unoptimized={true} loader={imageLoader} src="/sdLogo.svg" width={100} height={100}></Image>
              <h1>SPACE DEBRIS INC.</h1>
            </button>
            </NextLink></div>
        </header>)}

      <section id="step-container">
        {/* Render the current Step view */}
        {steps[currenStepIndex].component}
      </section>
    </main>
  )
}
