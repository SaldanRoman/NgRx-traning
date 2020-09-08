import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { PopularTagType } from 'src/app/shared/types/popularTag.type';
import {
  isLoadingSelector,
  popularTagsSelector,
  errorSelector,
} from 'src/app/shared/modules/popularTags/store/selectors';
import { getPopularTagsAction } from 'src/app/shared/modules/popularTags/store/actions/getPopularTags.action';

@Component({
  selector: 'mc-popular-tags',
  templateUrl: './popularTags.component.html',
  styleUrls: ['./popularTags.component.scss'],
})
export class PopularTagsComponent implements OnInit {
  constructor(private store: Store) {}

  isLoading$: Observable<boolean>;
  popularTags$: Observable<PopularTagType[] | null>;
  error$: Observable<string | null>;

  initValues(): void {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.popularTags$ = this.store.pipe(select(popularTagsSelector));
    this.error$ = this.store.pipe(select(errorSelector));
  }

  fetchTags(): void {
    this.store.dispatch(getPopularTagsAction());
  }

  ngOnInit(): void {
    this.fetchTags();
    this.initValues();
  }
}
