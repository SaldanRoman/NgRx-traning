import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BannerComponent } from 'src/app/shared/modules/banner/commponents/banner/banner.component';

@NgModule({
  declarations: [BannerComponent],
  imports: [CommonModule],
  exports: [BannerComponent],
})
export class BannerModule {}
