import * as actionTypes from "./actionTypes";
import axios from "../../axios-orders";
import { OrderActionTypes } from "../../Types/OrderActionTypes/OrderActionTypes";
import { ThunkActionType } from "../../Types/ThunkActionType/thunkActionType";
import { IOrder } from "../../Interfaces/IOrder/IOrderState/IOrderState";
import { AxiosError } from "axios";

export const purchaseBurgerSuccess = (id: string, orderData: IOrder): OrderActionTypes => {
  return {
    type: actionTypes.PURCHASE_BURGER_SUCCESS,
    orderId: id,
    orderData: orderData,
  };
};

export const purchaseBurgerFail = (error: AxiosError): OrderActionTypes => {
  return {
    type: actionTypes.PURCHASE_BURGER_FAIL,
    error: error,
  };
};

export const purchaseBurgerStart = (): OrderActionTypes => {
  return {
    type: actionTypes.PURCHASE_BURGER_START,
  };
};

export const purchaseBurger = (orderData: IOrder, token: string): ThunkActionType => {
  return (dispatch) => {
    dispatch(purchaseBurgerStart());
    axios
      .post("/orders.json?auth=" + token, orderData)
      .then((response) => {
        dispatch(purchaseBurgerSuccess(response.data.name, orderData));
      })
      .catch((error) => dispatch(purchaseBurgerFail(error)));
  };
};

export const purchaseInit = (): OrderActionTypes => {
  return {
    type: actionTypes.PURCHASE_INIT,
  };
};

export const fetchOrdersSuccess = (orders: IOrder[]): OrderActionTypes => {
  return {
    type: actionTypes.FETCH_ORDERS_SUCCESS,
    orders: orders,
  };
};

export const fetchOrdersFail = (error: AxiosError): OrderActionTypes => {
  return {
    type: actionTypes.FETCH_ORDERS_FAIL,
    error: error,
  };
};

export const fetchOrdersStart = (): OrderActionTypes => {
  return {
    type: actionTypes.FETCH_ORDERS_START,
  };
};

export const fetchOrders = (token: string, userId: string): ThunkActionType => {
  return (dispatch) => {
    dispatch(fetchOrdersStart());
    const queryParams: string = `?auth=${token}&orderBy="userId"&equalTo="${userId}"`;
    axios
      .get("/orders.json" + queryParams)
      .then((response) => {
        const fetchedOrders: IOrder[] = [];
        for (let key in response.data) {
          fetchedOrders.push({
            ...response.data[key],
            id: key,
          });
        }
        dispatch(fetchOrdersSuccess(fetchedOrders));
      })
      .catch((error) => fetchOrdersFail(error));
  };
};
