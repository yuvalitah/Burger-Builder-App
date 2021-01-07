import { AxiosError } from "axios";
import * as ActionTypes from "../../../store/actions/actionTypes";

export interface IAuthStartAction {
    type: typeof ActionTypes.AUTH_START,
};

export interface IAuthSuccessAction {
    type: typeof ActionTypes.AUTH_SUCCESS,
    idToken: string,
    userId: string,
};

export interface IAuthFailAction {
    type: typeof ActionTypes.AUTH_FAIL,
    error: AxiosError,
};

export interface IAuthLogoutAction {
    type: typeof ActionTypes.AUTH_LOGOUT,
};

export interface ISetAuthRedirectPathAction {
    type: typeof ActionTypes.SET_AUTH_REDIRECT_PATH,
    path: string,
};