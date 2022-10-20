export interface Basket {
    itemBags: [],
    itemWeight: object,
    trash: object,
}

export type BasketContextType = {
    items: Basket[];
};
