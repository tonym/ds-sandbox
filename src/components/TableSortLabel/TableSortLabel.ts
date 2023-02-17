import { Component, Input, OnChanges, OnInit, ViewEncapsulation } from '@angular/core';
import { Styles, StyleSheetFactoryOptions, Theme } from '../../types/index';
import { applyOverrides, capitalize, getClassKey, replaceMultipleSpaces, transitions } from '../../helpers/index';
import provideClasses from '../../styles/provideClasses/index';
import useTheme from '../../styles/useTheme/index';
import { Ground, GroundProps } from '../Ground/index';

type ActiveProp = boolean | string;
type DirectionProp = 'asc' | 'desc';
type HideSortIconProp = boolean | string;
type SortIconProp = string;
type SortIconPositionProp = 'left' | 'right';
type SortIconStyleProp = 'filled' | 'outlined' | 'rounded' | 'sharp' | 'twotone';

export interface TableSortLabelProps extends GroundProps {
  active?: ActiveProp;
  direction?: DirectionProp;
  hideSortIcon?: HideSortIconProp;
  sortIcon?: SortIconProp;
  sortIconPosition?: SortIconPositionProp;
  sortIconStyle?: SortIconStyleProp;
}

export const TableSortLabelClassKey = getClassKey('table-sort-label');

export type TableSortLabelClasses = 'root' | 'active' | 'hideSortIcon' | 'icon' | 'iconDirectionAsc' | 'iconDirectionDesc';

export function TableSortLabelStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      root: {
        ...theme.typography.variants.body2,
        cursor: 'pointer',
        display: 'inline-flex',
        justifyContent: 'flex-start',
        flexDirection: 'inherit',
        fontWeight: theme.typography.fontWeightMedium,
        lineHeight: 'auto',
        '&:focus': {
          color: theme.palette.text.secondary
        },
        '&:hover': {
          color: theme.palette.text.secondary,
          '& $icon': {
            opacity: 0.5
          }
        },
        '&$active': {
          color: theme.palette.text.primary,
          // && instead of & is a workaround for
          // https://github.com/cssinjs/jss/issues/1045 & https://github.com/cssinjs/jss/issues/1327,
          // still open as of 11/22/2021
          '&& $icon': {
            opacity: 1,
            color: theme.palette.text.secondary
          }
        }
      },
      active: {},
      hideSortIcon: {
        '&& $icon': {
          display: 'none'
        }
      },
      icon: {
        marginRight: 4,
        marginLeft: 4,
        opacity: 0,
        transition: transitions.create(['opacity', 'transform'], {
          duration: theme.transitions.duration.shorter
        }),
        userSelect: 'none'
      },
      iconDirectionAsc: {
        '&& $icon': {
          transform: 'rotate(180deg)'
        }
      },
      iconDirectionDesc: {
        '&& $icon': {
          transform: 'rotate(0deg)'
        }
      }
    },
    'TableSortLabel'
  );
}

const options: StyleSheetFactoryOptions = {
  index: 2,
  meta: TableSortLabelClassKey
};

@Component({
  selector: TableSortLabelClassKey,
  encapsulation: ViewEncapsulation.None,
  template: `
    <span [class]="composedClasses">
      <og-svg-icon
        *ngIf="sortIconPosition === 'left'"
        [className]="classes.icon"
        color="inherit"
        fontSize="sm"
        [icon]="sortIcon"
        [iconStyle]="sortIconStyle"
      ></og-svg-icon>
      <div>
        <ng-content></ng-content>
      </div>
      <og-svg-icon
        *ngIf="sortIconPosition === 'right'"
        [className]="classes.icon"
        color="inherit"
        fontSize="sm"
        [icon]="sortIcon"
        [iconStyle]="sortIconStyle"
      ></og-svg-icon>
    </span>
  `
})
export class TableSortLabel extends Ground implements OnChanges, OnInit {
  @Input() active: ActiveProp = false;
  @Input() direction: DirectionProp = 'asc';
  @Input() hideSortIcon: HideSortIconProp = false;
  @Input() sortIcon: SortIconProp = 'arrow_downward';
  @Input() sortIconPosition: SortIconPositionProp = 'right';
  @Input() sortIconStyle: SortIconStyleProp = 'filled';

  constructor() {
    super();
    this.classes = provideClasses(TableSortLabelStyles, options);
  }

  ngOnInit(): void {
    this.prepareComponent();
  }

  ngOnChanges(): void {
    this.prepareComponent();
  }

  prepareComponent(): void {
    this.composeClasses();
  }

  composeClasses(): void {
    const activeClass = this.active && this.active !== 'false' ? this.classes.active : '';
    const directionClass = this.classes[`iconDirection${capitalize(this.direction)}`];
    const hideSortIconClass =
      this.active && this.active !== 'false' ? '' : this.hideSortIcon && this.hideSortIcon !== 'false' ? this.classes.hideSortIcon : '';
    const composedClasses = `${this.classes.root} ${activeClass} ${directionClass} ${hideSortIconClass} ${this.className}`.trim();
    this.composedClasses = replaceMultipleSpaces(composedClasses);
  }
}

const theme = useTheme();
const TableSortLabelStyle = TableSortLabelStyles(theme);

export default TableSortLabelStyle;
