import { AxiosError } from "axios";
import * as ActionTypes from "../../../store/actions/actionTypes";
import { IOrder } from "../IOrderState/IOrderState";

export interface IPurchaseBurgerSuccessAction {
    type: typeof ActionTypes.PURCHASE_BURGER_SUCCESS,
    orderId: string,
    orderData: IOrder,
};

export interface IPurchaseBurgerFailAction {
    type: typeof ActionTypes.PURCHASE_BURGER_FAIL,
    error: AxiosError,
};

export interface IPurchaseBurgerStartAction {
    type: typeof ActionTypes.PURCHASE_BURGER_START,
};

export interface IPurchaseInitAction {
    type: typeof ActionTypes.PURCHASE_INIT,
};

export interface IFetchOrdersSuccessAction {
    type: typeof ActionTypes.FETCH_ORDERS_SUCCESS,
    orders: IOrder[],
};

export interface IFetchOrdersFailAction {
    type: typeof ActionTypes.FETCH_ORDERS_FAIL,
    error: AxiosError,
};

export interface IFetchOrdersStartAction {
    type: typeof ActionTypes.FETCH_ORDERS_START,
};