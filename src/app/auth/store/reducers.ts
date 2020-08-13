import { AuthStateInterface } from 'src/app/auth/types/authState.interface';
import { registerAction } from './actions';
import { on, createReducer, Action } from '@ngrx/store';

const initialState: AuthStateInterface = {
  isSubmitting: false,
};

const _authStateReducer = createReducer(
  initialState,
  on(
    registerAction,
    (state): AuthStateInterface => ({ ...state, isSubmitting: true })
  )
);

export function authReducer(state: AuthStateInterface, action: Action) {
  return _authStateReducer(state, action);
}
