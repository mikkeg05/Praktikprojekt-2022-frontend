type DeliveryDateProps = {
    pickupDate: string;
}

export function DeliveryDate ({ pickupDate }: DeliveryDateProps) {
  return (<div>
        <h2>Pickup/delivery date</h2>
      <p>{pickupDate}</p>
    </div>
  )
}
