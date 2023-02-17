import { Component, EventEmitter, Input, OnChanges, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { Styles, StyleSheetFactoryOptions, Theme } from '../../types/index';
import { applyOverrides, getClassKey, useInt } from '../../helpers/index';
import provideClasses from '../../styles/provideClasses/index';
import useTheme from '../../styles/useTheme/index';
import { Ground, GroundProps } from '../Ground/index';

type NextButtonTitleProp = string;
type PageProp = number | string;
type PreviousButtonTitleProp = string;
type RowsProp = number | string;
type RowsPerPageProp = number | string;

export interface TablePaginationProps extends GroundProps {
  nextButtonTitle?: NextButtonTitleProp;
  page?: PageProp;
  previousButtonTitle?: PreviousButtonTitleProp;
  rows?: RowsProp;
  rowsPerPage?: RowsPerPageProp;
}

export const TablePaginationClassKey = getClassKey('table-pagination');

export type TablePaginationClasses = 'root' | 'pageCountLabel';

export function TablePaginationStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      root: {
        ...theme.typography.variants.body2,
        '& div': {
          gap: theme.spacing.unit
        }
      },
      pageCountLabel: {
        paddingRight: theme.spacing.unit
      }
    },
    'TablePagination'
  );
}

const options: StyleSheetFactoryOptions = {
  index: 2,
  meta: TablePaginationClassKey
};

@Component({
  selector: TablePaginationClassKey,
  encapsulation: ViewEncapsulation.None,
  template: `
    <div [className]="composedClasses">
      <og-flex *ngIf="_rows >= 1" alignItems="center" justifyContent="flexEnd">
        <og-flex-child [className]="classes.pageCountLabel"> {{ _pageCounts[_page - 1] }} of {{ _rows }} </og-flex-child>
        <og-flex-child *ngIf="_pages > 1">
          <og-icon-button
            className="og-table-pagination-button-previous"
            (click)="previousPage($event)"
            color="inherit"
            [disabled]="_page === 1"
            icon="chevron_left"
            size="md"
            [title]="previousButtonTitle"
          ></og-icon-button>
        </og-flex-child>
        <og-flex-child *ngIf="_pages > 1">
          <og-icon-button
            className="og-table-pagination-button-next"
            (click)="nextPage($event)"
            color="inherit"
            [disabled]="_page === _pages"
            icon="chevron_right"
            size="md"
            [title]="nextButtonTitle"
          ></og-icon-button>
        </og-flex-child>
      </og-flex>
    </div>
  `
})
export class TablePagination extends Ground implements OnChanges, OnInit {
  @Input() nextButtonTitle: NextButtonTitleProp = 'Next page';
  @Input('page')
  set page(value: PageProp) {
    this._page = useInt(value);
  }
  @Input() previousButtonTitle: PreviousButtonTitleProp = 'Previous page';
  @Input('rows')
  set rows(value: RowsProp) {
    this._rows = useInt(value);
  }
  @Input('rowsPerPage')
  set rowsPerPage(value: RowsPerPageProp) {
    this._rowsPerPage = useInt(value);
  }

  @Output() onPageChange: EventEmitter<{ component: string; event: Event; page: number }> = new EventEmitter();

  _page = 1;
  _pageCounts: string[] = [];
  _pages = 1;
  _rows = 0;
  _rowsPerPage = 10;

  constructor() {
    super();
    this.classes = provideClasses(TablePaginationStyles, options);
  }

  ngOnInit(): void {
    this.prepareComponent();
  }

  ngOnChanges(): void {
    this.prepareComponent();
  }

  prepareComponent(): void {
    this.composeClasses();
    this.calculatePageCount();
    this.checkPage();
    this.composePageCounts();
  }

  calculatePageCount(): void {
    const pages = this._rows / this._rowsPerPage;
    this._pages = pages >= 1 ? Math.ceil(pages) : 1;
  }

  checkPage(): void {
    this._page = this._page > this._pages ? this._pages : this._page;
    this._page = this._page < 1 ? 1 : this._page;
  }

  composeClasses(): void {
    this.composedClasses = `${this.classes.root} ${this.className}`.trim();
  }

  composePageCounts(): void {
    const pageCounts: string[] = [];
    if (this._rows && this._rows > this._rowsPerPage) {
      let counter = 1;
      let rowStart = 1;
      let rowEnd = 0;
      while (counter <= this._pages) {
        rowEnd = this._rowsPerPage * counter;
        rowEnd = rowEnd > this._rows ? this._rows : rowEnd;
        pageCounts.push(`${rowStart} - ${rowEnd}`);
        rowStart = rowEnd + 1;
        counter++;
      }
    } else {
      pageCounts.push(`1 - ${this._rows}`);
    }
    this._pageCounts = pageCounts;
  }

  nextPage(event: Event): void {
    const nextPage = this._page === this._pages ? this._pages : this._page + 1;
    this.onPageChange.emit({ component: 'TablePagination', event: event, page: nextPage });
  }

  previousPage(event: Event): void {
    const previousPage = this._page === 1 ? 1 : this._page - 1;
    this.onPageChange.emit({ component: 'TablePagination', event: event, page: previousPage });
  }
}

const theme = useTheme();
const TablePaginationStyle = TablePaginationStyles(theme);

export default TablePaginationStyle;
