import { createAction, props } from '@ngrx/store';
import { ActionTypes } from './actionsTypes';
import { RegisterRequestInterface } from 'src/app/auth/types/registerRequest.interface';

export const registerAction = createAction(
  ActionTypes.REGISTER,
  props<{ registerUser: RegisterRequestInterface }>()
);
