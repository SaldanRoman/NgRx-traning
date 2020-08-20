import { createAction, props } from '@ngrx/store';

import { ActionTypes } from '../actionsTypes';
import { LoginRequestInterface } from 'src/app/auth/types/loginRequest.interface';
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';
import { BackendErrorsInterface } from 'src/app/shared/types/backendErrors.interface';

export const loginAction = createAction(
  ActionTypes.LOGIN,
  props<{ request: LoginRequestInterface }>()
);

export const loginSuccesAction = createAction(
  ActionTypes.LOGIN_SUCCES,
  props<{ currentUser: CurrentUserInterface }>()
);

export const loginFailureAction = createAction(
  ActionTypes.LOGIN_FAILURE,
  props<{ errors: BackendErrorsInterface }>()
);
