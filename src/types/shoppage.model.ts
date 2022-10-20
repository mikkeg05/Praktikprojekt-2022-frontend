export interface Button {
    BtnText: string;
    BtnLink: string;
    BtnColor: string;
}
export interface TopSection {
    Button: Button[];
    ImageUrl: string;
    Textbox: string;
}

export interface Bag {
    TrashBagImageUrl: string;
    Size: string;
    Price: number;
    Measurements: string;
    IconUrl: string;
    Id: number;
    Title: string;
    ItemType: string;
    sizeInM?: string;
    weight?: string;
    WeightImageUrl?: string
}
export interface TrashBagSection {
    Bags: Bag[];
    BagsHeader: string;
    BagsSubheader: string;
}
export interface Weight {
    WeightImageUrl: string;
    WeightTitle: string;
    Price: number;
    DescriptionTitle: string;
    Description: string;
    Button: Button;
    CartIconUrl: string;
    Id: number;
    ItemType: string;
    sizeInM?: string;
    weight?: string;
    Size?: string;
    Title?: string
    TrashBagImageUrl?: string;
}
export interface ShopPageType {
    TopSection: TopSection;
    TrashBagSection: TrashBagSection;
    Weight: Weight;
}
