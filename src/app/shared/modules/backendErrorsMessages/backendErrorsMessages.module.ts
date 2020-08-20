import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackendMessagesComponent } from './components/backendErrorMessages/backendErrorsMessages.component';

@NgModule({
  declarations: [BackendMessagesComponent],
  imports: [CommonModule],
  exports: [BackendMessagesComponent],
})
export class BackendErrorsModule {}
