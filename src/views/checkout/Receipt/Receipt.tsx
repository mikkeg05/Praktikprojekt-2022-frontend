import { useBasket } from "contexts/basketContext"
import { CustomerInfo } from "../../../types/checkoutorder.model"
import { ReceiptItem } from "../Receipt/ReceiptItem"

 type ReceiptProps = {
  currenStepIndex: number;
  setCurrentStepIndex: (arg0: number) => void;
  total: number;
  customerInfo: CustomerInfo;
  pickupDate: string;
  payment: string;
}

export function Receipt ({ total, customerInfo, pickupDate, payment }: ReceiptProps) {
  const { basketItems } = useBasket()
  window.console.log(customerInfo, pickupDate, payment)
  // get today
  const today = new Date()
  const dateToday = today.toISOString().split("T")[0]
  const orderNo = Math.floor(Math.random() * 90000) + 10000
  return <section className="receipt-section">
    <div className="receipt">
        <div className="receipt-top">
            <div className="receipt-date">
              <p>{dateToday}</p>
            </div>
            <div className="receipt-top-txt">
              <h2>Receipt</h2> <h2 className="grey">#{orderNo}</h2>
            </div>
        </div>
    <hr className="receipt-hr"></hr>
        <div className="receipt-billing">
            <h3>Billing Info</h3>
            <p>{customerInfo.firstName} {customerInfo.lastName}</p>
            <p>{customerInfo.address}, {customerInfo.city}, {customerInfo.zipPostalCode}, {customerInfo.country}</p>
        </div>
    <hr className="receipt-hr"></hr>
      <div className="receipt-order">
        <h3>Order Summary</h3>
        <ul>
        {basketItems.map(i => (<ReceiptItem key={i.id} {...i}></ReceiptItem>))}
        </ul>
      </div>
    <hr className="receipt-hr"></hr>
      <div className="receipt-total">
        <h3>Total</h3><h3>{total},-</h3>
      </div>
    </div>
  </section>
}
