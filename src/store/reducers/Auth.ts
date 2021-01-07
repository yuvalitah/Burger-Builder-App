import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/utility";
import { AnyAction } from "redux";
import { IAuthState } from "../../Interfaces/IAuth/IAuthState/IAuthState";

const initialState: IAuthState = {
  token: null,
  userId: null,
  error: null,
  loading: false,
  authRedirectPath: "/",
};

const authStart = (state: IAuthState, action: AnyAction): IAuthState => {
  return updateObject(state, { error: null, loading: true });
};

const authSuccess = (state: IAuthState, action: AnyAction): IAuthState => {
  return updateObject(state, {
    token: action.idToken,
    userId: action.userId,
    error: null,
    loading: false,
  });
};

const authFail = (state: IAuthState, action: AnyAction): IAuthState => {
  return updateObject(state, { error: action.error, loading: false });
};

const authLogout = (state: IAuthState, action: AnyAction): IAuthState => {
  return updateObject(state, { token: null, userId: null });
};

const setAuthRedirectPath = (state: IAuthState, action: AnyAction): IAuthState => {
  return updateObject(state, { authRedirectPath: action.path });
};

const authReducer = (state: IAuthState = initialState, action: AnyAction): IAuthState => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return authStart(state, action);
    case actionTypes.AUTH_SUCCESS:
      return authSuccess(state, action);
    case actionTypes.AUTH_FAIL:
      return authFail(state, action);
    case actionTypes.AUTH_LOGOUT:
      return authLogout(state, action);
    case actionTypes.SET_AUTH_REDIRECT_PATH:
      return setAuthRedirectPath(state, action);
    default:
      return state;
  }
};

export default authReducer;
