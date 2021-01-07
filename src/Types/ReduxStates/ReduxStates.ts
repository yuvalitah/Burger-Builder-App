import { IOrderState } from "../../Interfaces/IOrder/IOrderState/IOrderState";
import { IAuthState } from "../../Interfaces/IAuth/IAuthState/IAuthState";
import { IBurgerBuilderState } from "../../Interfaces/IBurgerBuilder/IBurgerBuilderState/IBurgerBuilderState";

export type ReduxState = IOrderState | IAuthState | IBurgerBuilderState;