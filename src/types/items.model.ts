export interface SdWeight {
    itemName: string;
    itemType: string,
    price: number;
    details: string[];
    quote: string;
    descrip: string;
    id: number;
    image: string;
    size?: string;
    sizeInM?: number
    weight?: number
}

export interface SdBags {
    itemName: string;
    itemType: string;
    size: string;
    price: number;
    pcs: number;
    l: number;
    gal: number;
    descrip: string;
    id: number;
    image: string;
    sizeInM?: number
    weight?: number

}

export interface GetItemData {
    bags: SdBags[];
    weight: SdWeight;
}
