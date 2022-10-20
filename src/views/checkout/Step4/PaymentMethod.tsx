import imageLoader from "../../../features/imageLoader"
import Image from "next/image"
type PaymentMethodProps = {
    payment: string;
}

export function PaymentMethod ({ payment }: PaymentMethodProps) {
  return (<div>
        <h2>Payment Method</h2>
        <div className="pay-content">
        {payment === "Card"
          ? <Image unoptimized={true} loader={imageLoader} src="/card.svg" height="45rem" width="50rem" alt={`${payment}`}></Image>
          : <Image unoptimized={true} loader={imageLoader} src="/paygal.svg" height="45rem" width="50rem" alt={`${payment}`}></Image>
}
      <p>{payment}</p>
      </div>
    </div>
  )
}
