import { PopularTagsStateInterface } from 'src/app/shared/modules/popularTags/types/popularTagsState.interface';
import { createReducer, on, Action } from '@ngrx/store';
import {
  getPopularTagsAction,
  getPopularTagsActionSuccess,
  getPopularTagsActionFailure,
} from 'src/app/shared/modules/popularTags/store/actions/getPopularTags.action';

const initSate: PopularTagsStateInterface = {
  data: null,
  isLoading: false,
  error: null,
};

const popularTagsReducer = createReducer(
  initSate,
  on(
    getPopularTagsAction,
    (state): PopularTagsStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getPopularTagsActionSuccess,
    (state, action): PopularTagsStateInterface => ({
      ...state,
      isLoading: false,
      data: action.popularTags,
    })
  ),
  on(
    getPopularTagsActionFailure,
    (state): PopularTagsStateInterface => ({
      ...state,
      isLoading: false,
    })
  )
);

export function reducers(state: PopularTagsStateInterface, action: Action) {
  return popularTagsReducer(state, action);
}
