import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../RootState/RootState";

export type ThunkActionType = ThunkAction<void, RootState, unknown, Action<string>>;