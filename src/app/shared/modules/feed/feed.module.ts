import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { FeedComponent } from 'src/app/shared/modules/feed/components/feed/feed.component';
import { reducer } from 'src/app/shared/modules/feed/store/reducers';
import { GetFeedEffect } from 'src/app/shared/modules/feed/store/effects/getFeed.effect';
import { FeedService } from 'src/app/shared/modules/feed/services/feed.service';
import { ErrorMessageModule } from 'src/app/shared/modules/errorMessage/errorMessage.module';
import { LoadingModule } from 'src/app/shared/modules/loading/loading.module';
import { PaginationModule } from 'src/app/shared/modules/pagination/pagination.module';
import { TagListModule } from 'src/app/shared/modules/tagList/tagList.mdoule';

@NgModule({
  declarations: [FeedComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('feed', reducer),
    EffectsModule.forFeature([GetFeedEffect]),
    ErrorMessageModule,
    LoadingModule,
    PaginationModule,
    TagListModule,
  ],
  exports: [FeedComponent],
  providers: [FeedService],
})
export class FeedModule {}
