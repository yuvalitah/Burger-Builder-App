import { IAuthStartAction, IAuthSuccessAction, IAuthFailAction, IAuthLogoutAction, ISetAuthRedirectPathAction } from "../../Interfaces/IAuth/IAuthActions/IAuthActions";

export type AuthActionTypes = IAuthStartAction | IAuthSuccessAction | IAuthFailAction | IAuthLogoutAction |
    ISetAuthRedirectPathAction;