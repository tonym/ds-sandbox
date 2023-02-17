import { Component, EventEmitter, Input, OnChanges, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { Classes, Styles, StyleSheetFactoryOptions, Theme } from '../../types/index';
import { alpha, applyOverrides, capitalize, getClassKey, pxToRem, useInt } from '../../helpers/index';
import { IconButtonStyles } from '../IconButton/index';
import provideClasses from '../../styles/provideClasses/index';
import useTheme from '../../styles/useTheme/index';
import { Ground, GroundProps } from '../Ground/index';

type ColorProp = 'default' | 'primary' | 'secondary';
type CountProp = number | string;
type PageProp = number | string;
type PageClampProp = boolean | string;
type ShowFirstButtonProp = boolean | string;
type ShowLastButtonProp = boolean | string;
type ShowNextButtonProp = boolean | string;
type ShowPreviousButtonProp = boolean | string;
type SizeProp = 'md' | 'sm';

export interface PaginationProps extends GroundProps {
  color?: ColorProp;
  count?: CountProp;
  page?: PageProp;
  pageClamp?: PageClampProp;
  showFirstButton?: ShowFirstButtonProp;
  showLastButton?: ShowLastButtonProp;
  showNextButton?: ShowNextButtonProp;
  showPreviousButton?: ShowPreviousButtonProp;
  size?: SizeProp;
}

export const PaginationClassKey = getClassKey('pagination');

export type PaginationClasses =
  | 'root'
  | 'buttonBase'
  | 'itemContainer'
  | 'itemContainerMd'
  | 'itemContainerSm'
  | 'selectedDefault'
  | 'selectedPrimary'
  | 'selectedSecondary';

export function PaginationStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      root: {
        ...theme.typography.variants.body2,
        alignItems: 'center',
        display: 'flex',
        flexWrap: 'wrap',
        gap: theme.spacing.unit,
        justifyContent: 'center',
        listStyle: 'none',
        margin: 0,
        padding: 0,
        width: '100%'
      },
      buttonBase: {
        background: 'transparent',
        borderRadius: '50%'
      },
      itemContainer: {
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center'
      },
      itemContainerMd: {
        fontSize: pxToRem(15),
        height: 24,
        width: 24
      },
      itemContainerSm: {
        height: 20,
        width: 20
      },
      selectedDefault: {
        backgroundColor: theme.palette.action.selected,
        '&:hover': {
          backgroundColor: alpha(theme.palette.action.selected, theme.palette.action.selectedOpacity + theme.palette.action.hoverOpacity)
        }
      },
      selectedPrimary: {
        color: theme.palette.primary.contrastText,
        backgroundColor: theme.palette.primary.main,
        '&:hover': {
          backgroundColor: theme.palette.primary.dark
        }
      },
      selectedSecondary: {
        color: theme.palette.secondary.contrastText,
        backgroundColor: theme.palette.secondary.main,
        '&:hover': {
          backgroundColor: theme.palette.secondary.dark
        }
      }
    },
    'Pagination'
  );
}

const options: StyleSheetFactoryOptions = {
  index: 3,
  meta: PaginationClassKey
};

@Component({
  selector: PaginationClassKey,
  encapsulation: ViewEncapsulation.None,
  template: `
    <ul [className]="composedClasses">
      <li class="first_button" *ngIf="_count > 1 && showFirstButton && showFirstButton !== 'false'">
        <og-icon-button
          className="og-pagination-button-first"
          (click)="changePage(1, $event)"
          color="inherit"
          [disabled]="_page === 1"
          icon="first_page"
          [size]="size"
        ></og-icon-button>
      </li>
      <li class="previous_button" *ngIf="_count > 1 && showPreviousButton && showPreviousButton !== 'false'">
        <og-icon-button
          className="og-pagination-button-previous"
          (click)="changePage(_page - 1, $event)"
          color="inherit"
          [disabled]="_page === 1"
          icon="chevron_left"
          [size]="size"
        ></og-icon-button>
      </li>
      <ng-container *ngFor="let itemClass of itemClasses; let i = index">
        <li *ngIf="itemClass">
          <ng-container *ngIf="itemClass !== '...'">
            <og-button-base (click)="changePage(i + 1, $event)" [className]="[itemClass, 'og-pagination-button-' + (i + 1)]">
              <div [class]="itemContainerClass">{{ i + 1 }}</div>
            </og-button-base>
          </ng-container>
          <ng-container *ngIf="itemClass === '...'">
            <div [class]="itemContainerClass">...</div>
          </ng-container>
        </li>
      </ng-container>
      <li class="next_button" *ngIf="_count > 1 && showNextButton && showNextButton !== 'false'">
        <og-icon-button
          className="og-pagination-button-next"
          (click)="changePage(_page + 1, $event)"
          color="inherit"
          [disabled]="_page === _count"
          icon="chevron_right"
          [size]="size"
        ></og-icon-button>
      </li>
      <li class="last_button" *ngIf="_count > 1 && showLastButton && showLastButton !== 'false'">
        <og-icon-button
          className="og-pagination-button-last"
          (click)="changePage(_count, $event)"
          color="inherit"
          [disabled]="_page === _count"
          icon="last_page"
          [size]="size"
        ></og-icon-button>
      </li>
    </ul>
  `
})
export class Pagination extends Ground implements OnChanges, OnInit {
  @Input() color: ColorProp = 'default';
  @Input('count')
  set count(value: CountProp) {
    const total = useInt(value);
    this._count = total < 1 ? 1 : total;
  }
  @Input('page')
  set page(value: PageProp) {
    this._page = useInt(value);
  }
  @Input() pageClamp: PageClampProp = true;
  @Input() showFirstButton: ShowFirstButtonProp = false;
  @Input() showLastButton: ShowLastButtonProp = false;
  @Input() showNextButton: ShowNextButtonProp = true;
  @Input() showPreviousButton: ShowPreviousButtonProp = true;
  @Input() size: SizeProp = 'sm';

  @Output() onPageChange: EventEmitter<{ component: string; event: Event; page: number }> = new EventEmitter();

  _count = 1;
  _page = 1;

  itemContainerClass = '';
  iconButtonClasses: Classes;
  itemClasses: string[] = [];

  constructor() {
    super();
    this.classes = provideClasses(PaginationStyles, options);
    this.iconButtonClasses = provideClasses(IconButtonStyles);
  }

  ngOnInit(): void {
    this.prepareComponent();
  }

  ngOnChanges(): void {
    this.prepareComponent();
  }

  prepareComponent(): void {
    this.checkPage();
    this.composeClasses();
    this.composeContainerClasses();
    this.composeItemClasses();
  }

  changePage(page: number, event: Event): void {
    this.onPageChange.emit({ component: 'Pagination', event, page });
  }

  checkPage(): void {
    if (this.pageClamp && this.pageClamp !== 'false') {
      this._page = this._page > this._count ? this._count : this._page < 1 ? 1 : this._page;
    }
  }

  composeClasses(): void {
    this.composedClasses = `${this.classes.root} ${this.className}`.trim();
  }

  composeContainerClasses(): void {
    const sizeClass = this.classes[`itemContainer${capitalize(this.size)}`];
    this.itemContainerClass = `${this.classes.itemContainer} ${sizeClass}`;
  }

  composeItemClass(index: Number): string {
    const selectedClass = index === this._page ? this.classes[`selected${capitalize(this.color)}`] : this.iconButtonClasses.enabled;
    const sizeClass = this.iconButtonClasses[`size${capitalize(this.size)}`];
    return `${this.iconButtonClasses.root} ${selectedClass} ${sizeClass}`;
  }

  composeItemClasses(): void {
    if (this._count > 8) {
      this.composeBigItemClasses();
    } else if (this._count < 7) {
      this.composeSmallItemClasses();
    } else {
      this.composeMediumItemClasses();
    }
  }

  composeBigItemClasses(): void {
    this.itemClasses = [];
    let i = 1;
    while (i <= this._count) {
      const itemClasses = this.composeItemClass(i);
      const calculatedItemClasses = this.shouldUseItemClass(i) ? itemClasses : '';
      const index = this.itemClasses.indexOf('...');
      if (this._page < 5 || this._page > this._count - 4) {
        if (calculatedItemClasses === '' && index === -1) {
          this.itemClasses.push('...');
        } else {
          this.itemClasses.push(calculatedItemClasses);
        }
      } else {
        const skipCount = this.itemClasses.filter(itemClass => itemClass === '...').length;
        if (calculatedItemClasses === '' && skipCount <= 1) {
          if (skipCount === 0 && i < this._page - 1 && i > 1) {
            this.itemClasses.push('...');
          } else if (skipCount === 1 && i > this._page + 1 && i < this._count) {
            this.itemClasses.push('...');
          } else {
            this.itemClasses.push(calculatedItemClasses);
          }
        } else {
          this.itemClasses.push(calculatedItemClasses);
        }
      }
      i++;
    }
  }

  composeMediumItemClasses(): void {
    this.itemClasses = [];
    let i = 1;
    while (i <= this._count) {
      const itemClasses = this.composeItemClass(i);
      const calculatedItemClasses = this.shouldUseItemClass(i) ? itemClasses : '';
      if (calculatedItemClasses === '' && this.itemClasses.indexOf('...') === -1) {
        this.itemClasses.push('...');
      } else {
        this.itemClasses.push(calculatedItemClasses);
      }
      i++;
    }
  }

  composeSmallItemClasses(): void {
    this.itemClasses = [];
    let i = 1;
    while (i <= this._count) {
      const itemClasses = this.composeItemClass(i);
      this.itemClasses.push(itemClasses);
      i++;
    }
  }

  shouldUseItemClass(index: Number): boolean {
    let ret = false;
    if (this._count === 7 || this._count === 8) {
      if (
        (index <= 5 && this._page < 5) ||
        ((index === 1 || index === 4) && this._page >= 5) ||
        ((index === 5 || index === this._count) && this._page <= 5) ||
        (index >= 5 && this._page >= 5)
      ) {
        ret = true;
      }
    } else {
      if (
        (this._page < 5 && (index <= 5 || index === this._count)) ||
        (this._page > this._count - 4 && (index >= this._count - 4 || index === 1)) ||
        index === this._page - 1 ||
        index === this._page ||
        index === this._page + 1 ||
        index === 1 ||
        index === this._count
      ) {
        ret = true;
      }
    }
    return ret;
  }
}

const theme = useTheme();
const PaginationStyle = PaginationStyles(theme);

export default PaginationStyle;
