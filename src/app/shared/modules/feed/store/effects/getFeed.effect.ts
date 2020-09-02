import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import { FeedService } from 'src/app/shared/modules/feed/services/feed.service';
import {
  getFeedAction,
  getFeedSuccesAction,
  getFeedFailureAction,
} from 'src/app/shared/modules/feed/store/actions/getFeed.action';
import { GetFeedResponseInterface } from 'src/app/shared/modules/feed/types/getFeedResponse.interface';

@Injectable()
export class GetFeedEffect {
  constructor(private feedService: FeedService, private actions$: Actions) {}

  getFeed$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getFeedAction),
      switchMap(({ url }) => {
        return this.feedService.getFeed(url).pipe(
          map((feed: GetFeedResponseInterface) => {
            return getFeedSuccesAction({ feed });
          }),
          catchError(() => of(getFeedFailureAction()))
        );
      })
    );
  });
}
