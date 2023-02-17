import { Component, Input, OnChanges, OnDestroy, OnInit, TemplateRef, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs';
import { Styles, StyleSheetFactoryOptions, Theme } from '../../types/index';
import { applyOverrides, capitalize, darken, fade, getClassKey, lighten, selectModeColor } from '../../helpers/index';
import { TableProps, TableService } from '../Table/index';
import provideClasses from '../../styles/provideClasses/index';
import useTheme from '../../styles/useTheme/index';
import { Ground, GroundProps } from '../Ground/index';

type AlignProp = 'center' | 'inherit' | 'justify' | 'left' | 'right';
type ElementProp = 'td' | 'th' | undefined;
type PaddingProp = 'checkbox' | 'default' | 'none' | undefined;
type SizeProp = 'md' | 'sm' | undefined;

export interface TableCellProps extends GroundProps {
  align: AlignProp;
  element: ElementProp;
  padding: PaddingProp;
  size: SizeProp;
}

export const TableCellClassKey = getClassKey('table-cell');

export type TableCellClasses =
  | 'root'
  | 'alignCenter'
  | 'alignInherit'
  | 'alignJustify'
  | 'alignLeft'
  | 'alignRight'
  | 'paddingCheckboxMedium'
  | 'paddingCheckboxSmall'
  | 'paddingDefaultMedium'
  | 'paddingDefaultSmall'
  | 'paddingNone';

export function TableCellStyles(theme: Theme): Styles {
  const borderBottomColor = selectModeColor(fade(theme.palette.divider, 1), theme.palette.mode, {
    darkenBy: 0.68,
    lightenBy: 0.88
  });
  return applyOverrides(
    {
      root: {
        ...theme.typography.variants.body2,
        display: 'table-cell',
        verticalAlign: 'inherit',
        borderBottom: `1px solid ${borderBottomColor}`
      },
      alignCenter: {
        textAlign: 'center'
      },
      alignInherit: {
        textAlign: 'inherit'
      },
      alignJustify: {
        textAlign: 'justify'
      },
      alignLeft: {
        textAlign: 'left'
      },
      alignRight: {
        textAlign: 'right'
      },
      paddingCheckboxMd: {
        width: 48,
        padding: '0 0 0 4px',
        '&:last-child': {
          paddingLeft: 0,
          paddingRight: 4
        }
      },
      paddingCheckboxSm: {
        width: 24,
        padding: '0 12px 0 16px',
        '&:last-child': {
          paddingLeft: 12,
          paddingRight: 16
        },
        '& > *': {
          padding: 0
        }
      },
      paddingDefaultMd: {
        padding: 16
      },
      paddingDefaultSm: {
        padding: '6px 24px 6px 16px',
        '&:last-child': {
          paddingRight: 16
        }
      },
      paddingNone: {
        padding: 0,
        '&:last-child': {
          padding: 0
        }
      }
    },
    'TableCell'
  );
}

const options: StyleSheetFactoryOptions = {
  index: 2,
  meta: TableCellClassKey
};

@Component({
  selector: TableCellClassKey,
  encapsulation: ViewEncapsulation.None,
  template: `
    <ng-template #template>
      <ng-template #content><ng-content></ng-content></ng-template>
      <ng-container *ngIf="element === 'th'; else defaultTableCell">
        <th [class]="composedClasses">
          <ng-container *ngTemplateOutlet="content"></ng-container>
        </th>
      </ng-container>
      <ng-template #defaultTableCell>
        <td [class]="composedClasses">
          <ng-container *ngTemplateOutlet="content"></ng-container>
        </td>
      </ng-template>
    </ng-template>
  `
})
export class TableCell extends Ground implements OnChanges, OnDestroy, OnInit {
  @Input() align: AlignProp = 'inherit';
  @Input() element: ElementProp = 'td';
  @Input() padding: PaddingProp = 'default';
  @Input() size: SizeProp = 'md';

  @ViewChild('template', { static: true }) template: TemplateRef<Object>;

  tableHeadParent = false;
  tablePaddingProp: TableProps['padding'];
  tableSizeProp: TableProps['size'];

  tablePropsSubscription: Subscription;

  constructor(private tableService: TableService, private viewContainerRef: ViewContainerRef) {
    super();
    this.classes = provideClasses(TableCellStyles, options);

    this.tablePropsSubscription = this.tableService.tableProps.subscribe((tableProps): void => {
      this.tablePaddingProp = tableProps.padding;
      this.tableSizeProp = tableProps.size;
    });
  }

  ngOnInit(): void {
    this.viewContainerRef.createEmbeddedView(this.template);
    this.prepareComponent();
  }

  ngOnChanges(): void {
    this.prepareComponent();
  }

  ngOnDestroy(): void {
    this.tablePropsSubscription.unsubscribe();
  }

  prepareComponent(): void {
    this.composeClasses();
  }

  composeClasses(): void {
    const alignClass = this.classes[`align${capitalize(this.align)}`];
    const cellPadding = this.padding ? this.padding : this.tablePaddingProp;
    const cellSize = this.size ? this.size : this.tableSizeProp;
    const paddingClass =
      cellPadding === 'none' ? this.classes.paddingNone : this.classes[`padding${capitalize(cellPadding)}${capitalize(cellSize)}`];
    this.composedClasses = `${this.classes.root} ${alignClass} ${paddingClass} ${this.className}`.trim();
  }
}

const theme = useTheme();
const TableCellStyle = TableCellStyles(theme);

export default TableCellStyle;
