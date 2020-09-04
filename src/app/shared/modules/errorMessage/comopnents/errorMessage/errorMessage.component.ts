import { Component, Input } from '@angular/core';

@Component({
  selector: 'mc-error-message',
  template: '<div>{{messageProps}}</div>',
})
export class ErrorMessageComponent {
  @Input('message') messageProps: string = 'Some error happened...';
}
