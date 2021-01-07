import { AxiosError } from "axios";

export interface IAuthState {
    token: string | null,
    userId: string | null,
    error: AxiosError | null,
    loading: boolean,
    authRedirectPath: string,
};