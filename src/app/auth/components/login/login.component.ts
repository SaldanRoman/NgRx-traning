import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { BackendErrorsInterface } from 'src/app/shared/types/backendErrors.interface';
import {
  backendErrorsSelector,
  isSubmittingSelector,
} from 'src/app/auth/store/selectors';
import { loginAction } from '../../store/actions/login.action';
import { LoginRequestInterface } from '../../types/loginRequest.interface';

@Component({
  selector: 'mc-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  validationErrors$: Observable<BackendErrorsInterface>;
  isSubmitting$: Observable<boolean>;

  constructor(private stor: Store) {}

  ngOnInit(): void {
    this.initForm();
    this.initValues();
  }

  initValues(): void {
    this.validationErrors$ = this.stor.pipe(select(backendErrorsSelector));
    this.isSubmitting$ = this.stor.pipe(select(isSubmittingSelector));
  }

  initForm(): void {
    this.form = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  submit() {
    const request: LoginRequestInterface = {
      user: this.form.value,
    };
    this.stor.dispatch(loginAction({ request }));
  }
}
