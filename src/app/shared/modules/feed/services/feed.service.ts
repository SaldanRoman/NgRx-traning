import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { GetFeedResponseInterface } from 'src/app/shared/modules/feed/types/getFeedResponse.interface';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FeedService {
  constructor(private http: HttpClient) {}
  getFeed(url: string): Observable<GetFeedResponseInterface> {
    const fulUrl = environment.apiUrl + url;
    return this.http.get<GetFeedResponseInterface>(fulUrl);
  }
}
