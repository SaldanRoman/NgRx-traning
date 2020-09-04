import { Injectable } from '@angular/core';

@Injectable()
export class RangeService {
  range(start: number, end: number) {
    return [...Array(end).keys()].map((el) => el + start);
  }
}
