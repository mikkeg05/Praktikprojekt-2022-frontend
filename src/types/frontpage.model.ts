
export interface Section {
    ImageUrl: string;
    Title: string;
    Body: string;
}
export interface Button {
    BtnText: string;
    BtnLink: string;
    BtnColor: string;
}

export interface BottomSection {
    Button: Button[];
    ImageUrl: string;
    Textbox: string;
}

export interface HowItWorks {
    Sections: Section[];
    Button: Button;
    Header: string;
    SubHeader: string;
}

export interface TopSection {
    Title: string;
    Subheader: string;
    Button: Button;
}

export interface WhyOurWay {
    Sections: Section[];
    GreenGarbageImageUrl: string;
    Header: string;
    Subheader: string;
    Button: Button;
}
export interface FrontPage {
    VideoUrl: string;
    TopSection: TopSection;
    HowItWorks: HowItWorks;
    WhyOurWay: WhyOurWay;
    BottomSection: BottomSection;
}
