import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { RegisterComponent } from 'src/app/auth/components/register/register.component';
import { LoginComponent } from 'src/app/auth/components/login/login.component';
import { authReducer } from 'src/app/auth/store/reducers';
import { AuthService } from 'src/app/auth/services/auth.service';
import { RegisterEffect } from 'src/app/auth/store/effects/register.effect';
import { BackendErrorsModule } from 'src/app/shared/modules/backendErrorsMessages/backendErrorsMessages.module';
import { PersistanceService } from 'src/app/shared/services/persistance.service';
import { LoginEffect } from 'src/app/auth/store/effects/login.effect';

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  declarations: [RegisterComponent, LoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    StoreModule.forFeature('auth', authReducer),
    EffectsModule.forFeature([RegisterEffect, LoginEffect]),
    BackendErrorsModule,
  ],
  providers: [AuthService, PersistanceService],
})
export class AuthModule {}
