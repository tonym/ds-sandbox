import { Component, Input, OnChanges, OnInit, ViewEncapsulation } from '@angular/core';
import { Styles, StyleSheetFactoryOptions, Theme } from '../../types/index';
import { applyOverrides, getClassKey, pxToRem } from '../../helpers/index';
import provideClasses from '../../styles/provideClasses/index';
import useTheme from '../../styles/useTheme/index';
import { TableService } from './Table.service';
import { Ground, GroundProps } from '../Ground/index';

type PaddingProp = 'checkbox' | 'default' | 'none';
type SizeProp = 'md' | 'sm';

export interface TableProps extends GroundProps {
  padding?: PaddingProp;
  size?: SizeProp;
}

export const TableClassKey = getClassKey('table');

export type TableClasses = 'root';

export function TableStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      root: {
        borderCollapse: 'collapse',
        borderSpacing: 0,
        display: 'table',
        width: '100%',
        '& td': {
          color: theme.palette.text.primary
        },
        '& th': {
          color: theme.palette.text.primary,
          lineHeight: pxToRem(24),
          fontWeight: theme.typography.fontWeightMedium
        },
        '& tfoot td': {
          color: theme.palette.text.secondary,
          lineHeight: pxToRem(21),
          fontSize: pxToRem(12)
        }
      }
    },
    'Table'
  );
}

const options: StyleSheetFactoryOptions = {
  index: 2,
  meta: TableClassKey
};

@Component({
  selector: TableClassKey,
  encapsulation: ViewEncapsulation.None,
  template: `
    <table [class]="composedClasses">
      <ng-content></ng-content>
    </table>
  `
})
export class Table extends Ground implements OnChanges, OnInit {
  @Input() padding: PaddingProp = 'default';
  @Input() size: SizeProp = 'md';

  constructor(private tableService: TableService) {
    super();
    this.classes = provideClasses(TableStyles, options);
  }

  ngOnInit(): void {
    this.prepareComponent();
  }

  ngOnChanges(): void {
    this.prepareComponent();
  }

  prepareComponent(): void {
    this.composeClasses();
    this.announceTableProps();
  }

  composeClasses(): void {
    this.composedClasses = `${this.classes.root} ${this.className}`.trim();
  }

  announceTableProps(): void {
    const tableProps = {
      classes: this.classes,
      className: this.className,
      padding: this.padding,
      size: this.size
    };
    this.tableService.announceTableProps(tableProps);
  }
}

const theme = useTheme();
const TableStyle = TableStyles(theme);

export default TableStyle;
