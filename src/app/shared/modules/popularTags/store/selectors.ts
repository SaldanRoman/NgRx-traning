import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PopularTagsStateInterface } from 'src/app/shared/modules/popularTags/types/popularTagsState.interface';
import { AppStateInterface } from 'src/app/shared/types/appState.interface';

export const popularTagsFeatureSelector = createFeatureSelector<
  AppStateInterface,
  PopularTagsStateInterface
>('popularTags');

export const isLoadingSelector = createSelector(
  popularTagsFeatureSelector,
  (state: PopularTagsStateInterface) => state.isLoading
);
export const popularTagsSelector = createSelector(
  popularTagsFeatureSelector,
  (state: PopularTagsStateInterface) => state.data
);
export const errorSelector = createSelector(
  popularTagsFeatureSelector,
  (state: PopularTagsStateInterface) => state.error
);
