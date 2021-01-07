import * as actionTypes from "./actionTypes";
import axios, { AxiosError } from "axios";
import { AuthActionTypes } from "../../Types/AuthActionTypes/AuthActionTypes";
import { ThunkActionType } from "../../Types/ThunkActionType/thunkActionType";

export const authStart = (): AuthActionTypes => {
  return {
    type: actionTypes.AUTH_START,
  };
};

export const authSuccess = (token: string, userId: string): AuthActionTypes => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    idToken: token,
    userId: userId,
  };
};

export const authFail = (error: AxiosError): AuthActionTypes => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error,
  };
};

export const checkAuthTimeout = (expirationTime: number): ThunkActionType => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(authLogout());
    }, expirationTime * 1000);
  };
};

export const authLogout = (): AuthActionTypes => {
  return {
    type: actionTypes.AUTH_LOGOUT,
  };
};

export const auth = (email: string, password: string, isSignup: boolean): ThunkActionType => {
  return (dispatch) => {
    dispatch(authStart());
    const authData: object = {
      email: email,
      password: password,
      returnSecureToken: true,
    };
    let url: string =
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDt8t0H6_pXngtd_wQ74zsNmU8G1JvYL5g";

    if (!isSignup) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDt8t0H6_pXngtd_wQ74zsNmU8G1JvYL5g";
    }

    axios
      .post(url, authData)
      .then((response) => {
        const expirationDate: Date = new Date(
          new Date().getTime() + response.data.expiresIn * 1000
        );
        localStorage.setItem("expirationDate", expirationDate.toString());
        dispatch(authSuccess(response.data.idToken, response.data.localId));
        dispatch(checkAuthTimeout(response.data.expiresIn));
      })
      .catch((error) => {
        dispatch(authFail(error.response.data.error));
      });
  };
};

export const setAuthRedirectPath = (path: string): AuthActionTypes => {
  return {
    type: actionTypes.SET_AUTH_REDIRECT_PATH,
    path: path,
  };
};

export const authCheckState = (): ThunkActionType => {
  return (dispatch) => {
    const authReducer = JSON.parse(
      JSON.parse(localStorage.getItem("persist:rootReducer"))
        ? JSON.parse(localStorage.getItem("persist:rootReducer")).auth
        : null
    );
    const token: string = authReducer ? authReducer.token : null;
    if (!token) {
      dispatch(authLogout());
    } else {
      const expirationDate: Date = new Date(localStorage.getItem("expirationDate"));
      if (expirationDate > new Date()) {
        const userId: string = authReducer.userId;
        dispatch(authSuccess(token, userId));
        dispatch(
          checkAuthTimeout(
            (expirationDate.getTime() - new Date().getTime()) / 1000
          )
        );
      } else {
        dispatch(authLogout());
      }
    }
  };
};
