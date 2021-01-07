import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/utility";
import { IOrderState } from "../../Interfaces/IOrder/IOrderState/IOrderState";
import { AnyAction } from "redux";

const initialState: IOrderState = {
  orders: [],
  loading: false,
  purchased: false,
};

const purchaseInit = (state: IOrderState, action: AnyAction): IOrderState => {
  return updateObject(state, { purchased: false });
};

const purchaseBurgerStart = (state: IOrderState, action: AnyAction): IOrderState => {
  return updateObject(state, { loading: true });
};

const purchaseBurgerSuccess = (state: IOrderState, action: AnyAction): IOrderState => {
  const newOrder = updateObject(action.orderData, { id: action.orderId });
  return updateObject(state, {
    loading: false,
    purchased: true,
    orders: state.orders.concat(newOrder),
  });
};

const purchaseBurgerFail = (state: IOrderState, action: AnyAction): IOrderState => {
  return updateObject(state, { loading: false });
};

const fetchOrdersStart = (state: IOrderState, action: AnyAction): IOrderState => {
  return updateObject(state, { loading: true });
};

const fetchOrdersSuccess = (state: IOrderState, action: AnyAction): IOrderState => {
  return updateObject(state, { orders: action.orders, loading: false });
};

const fetchOrdersFail = (state: IOrderState, action: AnyAction): IOrderState => {
  return updateObject(state, { loading: false });
};

const orderReducer = (state: IOrderState = initialState, action: AnyAction): IOrderState => {
  switch (action.type) {
    case actionTypes.PURCHASE_INIT:
      return purchaseInit(state, action);
    case actionTypes.PURCHASE_BURGER_START:
      return purchaseBurgerStart(state, action);
    case actionTypes.PURCHASE_BURGER_SUCCESS:
      return purchaseBurgerSuccess(state, action);
    case actionTypes.PURCHASE_BURGER_FAIL:
      return purchaseBurgerFail(state, action);
    case actionTypes.FETCH_ORDERS_START:
      return fetchOrdersStart(state, action);
    case actionTypes.FETCH_ORDERS_SUCCESS:
      return fetchOrdersSuccess(state, action);
    case actionTypes.FETCH_ORDERS_FAIL:
      return fetchOrdersFail(state, action);
    default:
      return state;
  }
};

export default orderReducer;
