
export interface Button {
    BtnText: string;
    BtnLink: null;
    BtnColor: string;
}

export interface Input {
    Label: string;
    Name: string;
    Placeholder: string;
    Type: string;
    Value: null | string;
}

export interface Section {
    ImageUrl: string;
    Title: string;
    Body: string;
}

export interface FormRequest {
    Inputs: Input[];
}

export interface TrashFormType {
    Section: Section;
    Button: Button;
    FormRequest: FormRequest;
}
