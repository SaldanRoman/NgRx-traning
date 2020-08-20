import { on, createReducer, Action } from '@ngrx/store';

import { AuthStateInterface } from 'src/app/auth/types/authState.interface';
import {
  registerAction,
  registerSuccesAction,
  registerFailureAction,
} from 'src/app/auth/store/actions/register.action';
import {
  loginAction,
  loginSuccesAction,
  loginFailureAction,
} from 'src/app/auth/store/actions/login.action';

const initialState: AuthStateInterface = {
  isSubmitting: false,
  currentUser: null,
  isLoggedIn: null,
  validationError: null,
};

const _authStateReducer = createReducer(
  initialState,
  on(
    registerAction,
    (state): AuthStateInterface => ({
      ...state,
      isSubmitting: true,
      validationError: null,
    })
  ),
  on(
    registerSuccesAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      currentUser: action.currentUser,
      isLoggedIn: true,
    })
  ),
  on(
    registerFailureAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      validationError: action.errors,
    })
  ),
  on(loginAction, (state) => ({
    ...state,
    isSubmitting: true,
  })),
  on(
    loginSuccesAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      currentUser: action.currentUser,
      isLoggedIn: true,
    })
  ),
  on(
    loginFailureAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      validationError: action.errors,
    })
  )
);

export function authReducer(state: AuthStateInterface, action: Action) {
  return _authStateReducer(state, action);
}
