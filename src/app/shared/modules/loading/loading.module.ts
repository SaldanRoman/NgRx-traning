import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadingComponent } from 'src/app/shared/modules/loading/compoents/loading/loading.component';

@NgModule({
  declarations: [LoadingComponent],
  imports: [CommonModule],
  exports: [LoadingComponent],
})
export class LoadingModule {}
