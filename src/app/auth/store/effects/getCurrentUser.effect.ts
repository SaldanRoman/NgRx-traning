import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { switchMap, catchError, map } from 'rxjs/operators';
import { createEffect, Actions, ofType } from '@ngrx/effects';

import { AuthService } from 'src/app/auth/services/auth.service';
import {
  getCurrentUserAction,
  getCurrentUserSuccesAction,
  getCurrentUserFailureAction,
} from 'src/app/auth/store/actions/getCurrentUser.action';
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';
import { HttpErrorResponse } from '@angular/common/http';
import { PersistanceService } from 'src/app/shared/services/persistance.service';

@Injectable()
export class GetCurrentUserEffect {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private persistanceService: PersistanceService
  ) {}

  getCurrentUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCurrentUserAction),
      switchMap(() => {
        const token = this.persistanceService.get('accessToken');
        if (!token) {
          return of(getCurrentUserFailureAction());
          // return new Observable<any>((subs) =>
          //   subs.next(getCurrentUserFailureAction())
          // );
        }
        return this.authService.getCurrentUser().pipe(
          map((currentUser: CurrentUserInterface) => {
            return getCurrentUserSuccesAction({ currentUser });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(getCurrentUserFailureAction());
          })
        );
      })
    )
  );
}
