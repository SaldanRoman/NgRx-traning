import { createAction, props } from '@ngrx/store';

import { ActionTypes } from 'src/app/shared/modules/popularTags/store/actionTypes';
import { PopularTagType } from 'src/app/shared/types/popularTag.type';

export const getPopularTagsAction = createAction(ActionTypes.GET_POPULAR_TAGS);

export const getPopularTagsActionSuccess = createAction(
  ActionTypes.GET_POPULAR_TAGS_SUCCES,
  props<{ popularTags: PopularTagType[] }>()
);

export const getPopularTagsActionFailure = createAction(
  ActionTypes.GET_POPULAR_TAGS_FAILURE
);
