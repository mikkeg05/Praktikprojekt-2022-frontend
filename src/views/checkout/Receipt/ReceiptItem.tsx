type ReceiptItemProps = {
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

export function ReceiptItem ({
  quantity, Title, Price, Size, ItemType,
}: ReceiptItemProps) {
  return <li className="receipt-item">
            <div className="receipt-item-col">
                <div>{quantity}x</div>
          <div>{Title} {ItemType === "Bag" ? Size : null}</div>
            </div>
            <div>{Price},-</div>
        </li>
}
