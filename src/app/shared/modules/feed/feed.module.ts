import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { FeedComponent } from 'src/app/shared/modules/feed/components/feed/feed.component';
import { reducer } from 'src/app/shared/modules/feed/store/reducers';
import { GetFeedEffect } from 'src/app/shared/modules/feed/store/effects/getFeed.effect';
import { FeedService } from 'src/app/shared/modules/feed/services/feed.service';

@NgModule({
  declarations: [FeedComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('feed', reducer),
    EffectsModule.forFeature([GetFeedEffect]),
  ],
  exports: [FeedComponent],
  providers: [FeedService],
})
export class FeedModule {}
