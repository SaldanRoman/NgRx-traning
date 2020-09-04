import { Component, Input, OnInit } from '@angular/core';
import { RangeService } from 'src/app/shared/services/range.service';

@Component({
  selector: 'mc-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.html'],
})
export class PaginationComponent implements OnInit {
  constructor(private rangeService: RangeService) {}
  @Input('total') totalProps: number;
  @Input('limit') limitProps: number;
  @Input('currentPage') currentPageProps: number;
  @Input('url') urlProps: number;
  pagesCount: number;
  pages: number[];

  ngOnInit(): void {
    this.pagesCount = Math.ceil(this.totalProps / this.limitProps);
    this.pages = this.rangeService.range(1, this.pagesCount);
  }
}
