import { NgModule } from '@angular/core';

import { TagListComponent } from 'src/app/shared/modules/tagList/components/tagList/tagList.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [TagListComponent],
  imports: [CommonModule],
  exports: [TagListComponent],
})
export class TagListModule {}
