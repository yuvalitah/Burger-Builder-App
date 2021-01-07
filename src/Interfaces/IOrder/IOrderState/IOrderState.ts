import { Ingredients } from "../../IBurgerBuilder/IBurgerBuilderState/IBurgerBuilderState";

export interface IOrderData {
    country: string,
    deliveryMethod: string,
    email: string,
    name: string,
    street: string,
    zipCode: string,
};

export interface IOrder {
    ingredients: Ingredients,
    orderData: IOrderData,
    price: number,
    userId: string,
    id?: string,
};

export interface IOrderState {
    orders: IOrder[],
    loading: boolean,
    purchased: boolean,
};