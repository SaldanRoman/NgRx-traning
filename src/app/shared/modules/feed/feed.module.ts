import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedComponent } from 'src/app/shared/modules/feed/components/feed/feed.component';

@NgModule({
  declarations: [FeedComponent],
  imports: [CommonModule],
  exports: [FeedComponent],
})
export class FeedModule {}
