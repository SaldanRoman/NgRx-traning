import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { PopularTagsResponseInterface } from 'src/app/shared/modules/popularTags/types/popularTagsResponse.interface';
import { PopularTagType } from 'src/app/shared/types/popularTag.type';

@Injectable()
export class PopularTagsService {
  constructor(private http: HttpClient) {}

  getTags(): Observable<PopularTagType[]> {
    const url = environment.apiUrl + '/tags';
    return this.http
      .get(url)
      .pipe(map((response: PopularTagsResponseInterface) => response.tags));
  }
}
