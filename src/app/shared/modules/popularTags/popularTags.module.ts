import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { RouterModule } from '@angular/router';

import { PopularTagsService } from 'src/app/shared/modules/popularTags/services/popularTags.service';
import { PopularTagsComponent } from 'src/app/shared/modules/popularTags/components/popularTags/popularTags.component';
import { reducers } from 'src/app/shared/modules/popularTags/store/reducers';
import { GetPopularTagsEffect } from 'src/app/shared/modules/popularTags/store/effects/getPopularTags.effect';
import { LoadingModule } from 'src/app/shared/modules/loading/loading.module';
import { ErrorMessageModule } from 'src/app/shared/modules/errorMessage/errorMessage.module';

@NgModule({
  declarations: [PopularTagsComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('popularTags', reducers),
    EffectsModule.forFeature([GetPopularTagsEffect]),
    RouterModule,
    LoadingModule,
    ErrorMessageModule,
  ],
  providers: [PopularTagsService],
  exports: [PopularTagsComponent],
})
export class PopularTagsModule {}
