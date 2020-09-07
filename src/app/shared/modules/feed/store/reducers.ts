import { Action, createReducer, on } from '@ngrx/store';
import { routerNavigationAction } from '@ngrx/router-store';

import { FeedStateInterface } from '../types/feedState.interface';
import {
  getFeedAction,
  getFeedSuccesAction,
  getFeedFailureAction,
} from 'src/app/shared/modules/feed/store/actions/getFeed.action';

const initState: FeedStateInterface = {
  isLoading: false,
  error: null,
  data: null,
};

const feedReducer = createReducer(
  initState,
  on(
    getFeedAction,
    (state): FeedStateInterface => {
      return { ...state, isLoading: true };
    }
  ),
  on(
    getFeedSuccesAction,
    (state, action): FeedStateInterface => {
      return { ...state, isLoading: false, data: action.feed };
    }
  ),
  on(
    getFeedFailureAction,
    (state): FeedStateInterface => {
      return { ...state, isLoading: false };
    }
  ),
  on(routerNavigationAction, (): FeedStateInterface => initState)
);

export function reducer(state: FeedStateInterface, action: Action) {
  return feedReducer(state, action);
}
