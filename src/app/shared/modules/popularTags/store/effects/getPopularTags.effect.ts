import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import { PopularTagsService } from 'src/app/shared/modules/popularTags/services/popularTags.service';
import {
  getPopularTagsAction,
  getPopularTagsActionSuccess,
  getPopularTagsActionFailure,
} from '../actions/getPopularTags.action';
import { PopularTagType } from 'src/app/shared/types/popularTag.type';

@Injectable()
export class GetPopularTagsEffect {
  constructor(
    private getPopularTagsService: PopularTagsService,
    private action$: Actions
  ) {}
  getPopularTags = createEffect(() =>
    this.action$.pipe(
      ofType(getPopularTagsAction),
      switchMap(() =>
        this.getPopularTagsService.getTags().pipe(
          map((tags: PopularTagType[]) =>
            getPopularTagsActionSuccess({ popularTags: tags })
          ),
          catchError(() => of(getPopularTagsActionFailure()))
        )
      )
    )
  );
}
