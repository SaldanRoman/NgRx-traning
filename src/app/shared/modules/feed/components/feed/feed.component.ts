import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { stringify, parseUrl } from 'query-string';

import { FeedService } from 'src/app/shared/modules/feed/services/feed.service';
import { GetFeedResponseInterface } from 'src/app/shared/modules/feed/types/getFeedResponse.interface';
import {
  feedSelector,
  errorSelector,
  isLoadingSelector,
} from 'src/app/shared/modules/feed/store/selectors';
import { getFeedAction } from 'src/app/shared/modules/feed/store/actions/getFeed.action';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'mc-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
  providers: [FeedService],
})
export class FeedComponent implements OnInit, OnDestroy {
  constructor(
    private store: Store,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  @Input('apiUrl') apiUrlProps: string;

  feed$: Observable<GetFeedResponseInterface | null>;
  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;
  limit: number = environment.limit;
  baseUrl: string;
  currentPage: number;
  queryPatamsSubscription: Subscription;

  initValues(): void {
    this.feed$ = this.store.pipe(select(feedSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.baseUrl = this.router.url.split('?')[0];
  }

  initListeners() {
    this.queryPatamsSubscription = this.route.queryParams.subscribe(
      (params: Params) => {
        this.currentPage = +(params.page || '1');
        this.fetchFeed();
      }
    );
  }

  fetchFeed(): void {
    const offset = this.currentPage * this.limit - this.limit;
    const parsedUrl = parseUrl(this.apiUrlProps);
    const stringifyedParams = stringify({
      ...parsedUrl.query,
      limit: this.limit,
      offset,
    });

    const apiUrlWithParams = `${this.apiUrlProps}?${stringifyedParams}`;
    this.store.dispatch(getFeedAction({ url: apiUrlWithParams }));
  }

  ngOnInit(): void {
    this.initValues();
    this.initListeners();
  }

  ngOnDestroy(): void {
    this.queryPatamsSubscription.unsubscribe();
  }
}
