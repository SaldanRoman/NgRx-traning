import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { GlobalFeedComponent } from 'src/app/globalFeed/components/globalFeed/globalFeed.component';
import { FeedModule } from 'src/app/shared/modules/feed/feed.module';
import { BannerModule } from 'src/app/shared/modules/banner/banner.module';
import { PopularTagsModule } from 'src/app/shared/modules/popularTags/popularTags.module';

const routs: Routes = [{ path: '', component: GlobalFeedComponent }];

@NgModule({
  declarations: [GlobalFeedComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routs),
    FeedModule,
    BannerModule,
    PopularTagsModule,
  ],
})
export class GlobalFeedModule {}
