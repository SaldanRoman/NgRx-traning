import { Component, Input, OnInit } from '@angular/core';
import { BackendErrorsInterface } from 'src/app/shared/types/backendErrors.interface';

@Component({
  selector: 'mc-backend-messages-error',
  templateUrl: './backendErrorsMessages.component.html',
  styleUrls: ['./backendErrorsMessages.component.scss'],
})
export class BackendMessagesComponent implements OnInit {
  @Input('backendErrors') backendErrorsProps: BackendErrorsInterface;
  ngOnInit(): void {
    this.errorMessages = Object.keys(this.backendErrorsProps).map(
      (key: string) => {
        const message = this.backendErrorsProps[key].join('');
        return `${key} ${message}`;
      }
    );
  }

  errorMessages: string[];
}
