import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthStateInterface } from 'src/app/auth/types/authState.interface';
import { AppStateInterface } from 'src/app/shared/types/appState.interface';

export const featureSelector = createFeatureSelector<
  AppStateInterface,
  AuthStateInterface
>('auth');

export const isSubmittingSelector = createSelector(
  featureSelector,
  (state: AuthStateInterface) => state.isSubmitting
);

export const backendErrorsSelector = createSelector(
  featureSelector,
  (state: AuthStateInterface) => state.validationError
);
