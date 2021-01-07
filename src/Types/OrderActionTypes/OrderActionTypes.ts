import { IPurchaseBurgerSuccessAction, IPurchaseBurgerFailAction, IPurchaseBurgerStartAction, IPurchaseInitAction, IFetchOrdersSuccessAction, IFetchOrdersFailAction, IFetchOrdersStartAction } from "../../Interfaces/IOrder/IOrderActions/IOrderActions";

export type OrderActionTypes = IPurchaseBurgerSuccessAction | IPurchaseBurgerFailAction | IPurchaseBurgerStartAction |
    IPurchaseInitAction | IFetchOrdersSuccessAction | IFetchOrdersFailAction | IFetchOrdersStartAction;