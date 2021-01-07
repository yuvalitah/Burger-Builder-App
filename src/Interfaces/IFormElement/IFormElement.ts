interface IElementConfigOption {
    value: string,
    displayValue: string
};

export interface IFormElement {
    elementType: string,
    elementConfig: {
        type?: string,
        placeholder?: string,
        options?: IElementConfigOption[],
    },
    value: string,
    validation?: {
        required: boolean,
        minLength?: number,
        maxLength?: number,
        isEmail?: boolean,
    },
    valid: boolean,
    touched?: boolean,
};

export interface IElement {
    id: string,
    config: IFormElement
};

export interface IOrderElement {
    name: string,
    amount: number,
};