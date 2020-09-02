import { Component, Input, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { FeedService } from 'src/app/shared/modules/feed/services/feed.service';
import { GetFeedResponseInterface } from 'src/app/shared/modules/feed/types/getFeedResponse.interface';
import {
  feedSelector,
  errorSelector,
  isLoadingSelector,
} from 'src/app/shared/modules/feed/store/selectors';
import { getFeedAction } from '../../store/actions/getFeed.action';

@Component({
  selector: 'mc-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
  providers: [FeedService],
})
export class FeedComponent implements OnInit {
  constructor(private store: Store) {}

  @Input('apiUrl') apiUrlProps: string;
  feed$: Observable<GetFeedResponseInterface | null>;
  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;

  initValues(): void {
    this.feed$ = this.store.pipe(select(feedSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
  }

  fetchData(): void {
    this.store.dispatch(getFeedAction({ url: this.apiUrlProps }));
  }

  ngOnInit(): void {
    this.initValues();
    this.fetchData();
  }
}
