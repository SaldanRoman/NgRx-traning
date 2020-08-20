import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, map, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/auth/services/auth.service';
import { PersistanceService } from 'src/app/shared/services/persistance.service';
import {
  loginAction,
  loginSuccesAction,
  loginFailureAction,
} from 'src/app/auth/store/actions/login.action';

@Injectable()
export class LoginEffect {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private persistanceService: PersistanceService,
    private router: Router
  ) {}

  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loginAction),
      switchMap((ownrequest) => {
        return this.authService.login(ownrequest.request).pipe(
          map((response) => {
            this.persistanceService.set('accesToken', response.token);
            return loginSuccesAction({ currentUser: response });
          }),
          catchError((e) => {
            return of(loginFailureAction(e));
          })
        );
      })
    );
  });

  redirectAfterLogin$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(loginSuccesAction),
        tap(() => {
          this.router.navigateByUrl('/');
        })
      );
    },
    { dispatch: false }
  );
}
