import { IFormElement } from "../../IFormElement/IFormElement";

export interface IOrderForm {
    name: IFormElement,
    street: IFormElement,
    zipCode: IFormElement,
    country: IFormElement,
    email: IFormElement,
    deliveryMethod: IFormElement,
};