import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorMessageComponent } from 'src/app/shared/modules/errorMessage/comopnents/errorMessage/errorMessage.component';

@NgModule({
  declarations: [ErrorMessageComponent],
  imports: [CommonModule],
  exports: [ErrorMessageComponent],
})
export class ErrorMessageModule {}
