import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginationComponent } from 'src/app/shared/modules/pagination/components//pogination/pagination.component';
import { RangeService } from 'src/app/shared/services/range.service';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PaginationComponent],
  imports: [CommonModule, RouterModule],
  exports: [PaginationComponent],
  providers: [RangeService],
})
export class PaginationModule {}
