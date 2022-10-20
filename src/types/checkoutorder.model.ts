/* export interface OrderData {
    orderDate: string,
    price: number
    id: number
}

export interface ItemData {
    itemName: string,
    itemType: string,
    quantity: number,
    id: number,
    price: number;
    pickupDate?: string,
    size?: string
    sizeInM?: number
    weight?: number
}

export type CheckoutOrder = {
    info: CustomerInfo;
    items: ItemData[];
    details: OrderData;
} */

export type CustomerInfo = {
    firstName?: string,
    lastName?: string,
    email?: string,
    address?: string,
    city?: string,
    country?: string,
    zipPostalCode?: string,
}
export interface GarbageItem {
    weight?: number,
    m3?: number,
}

/* export interface PostData {
    firstName: string,
    lastName: string,
    id: number,
    garbageItem: GarbageItem,
} */
export interface PostData {
    firstName?: string,
    lastName?: string,
    parentid?: string,
    id?: any,
    garbageItem: GarbageItem
}
