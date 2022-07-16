import { Action, createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { IAuthLogin } from "../../components/login/models/auth-login";
import { IUserAuthentication } from "../../components/login/models/user-authentication";
import { Authentication, AuthenticationFail, AuthenticationSuccess } from "./auth.actions";

export interface IAuthState{
  UserAuth: IAuthLogin | null,
  AuthLogin: IUserAuthentication | null,
  Error: string | null,
}

export const initialState: IAuthState = {
  UserAuth: null,
  AuthLogin: null,
  Error: null
}

const _authReducer = createReducer(
  initialState,
  on(Authentication, (state, { payload }) => { return {
    ...state, AuthLogin: payload }
  }),
  on(AuthenticationSuccess, (state, { payload }) => {
    return {
      ...state,
      UserAuth: payload
    }
  }),
  on(AuthenticationFail, (state, { error }) => {
    return {
      ...state,
      UserAuth: null,
      Error: error
    }
  })
)

export function authReducer(state = initialState, action: Action){
  return _authReducer(state, action);
}

export const selectAuthState = createFeatureSelector<IAuthState>('auth');

export const selectUserAuth = createSelector(
  selectAuthState,
  (state) => state.UserAuth
)
