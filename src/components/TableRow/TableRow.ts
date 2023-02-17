import { Component, Input, OnChanges, OnInit, TemplateRef, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { Styles, StyleSheetFactoryOptions, Theme } from '../../types/index';
import { applyOverrides, getClassKey, replaceMultipleSpaces } from '../../helpers/index';
import { fade } from '../../helpers/index';
import provideClasses from '../../styles/provideClasses/index';
import useTheme from '../../styles/useTheme/index';
import { Ground, GroundProps } from '../Ground/index';

type HoverProp = boolean | string;
type SelectedProp = boolean | string;

export interface TableRowProps extends GroundProps {
  hover: HoverProp;
  selected: SelectedProp;
}

export const TableRowClassKey = getClassKey('table-row');

export type TableRowClasses = 'root';

export function TableRowStyles(theme: Theme): Styles {
  const selectedColor = fade(theme.palette.primary.main, theme.palette.action.selectedOpacity);
  return applyOverrides(
    {
      root: {
        color: 'inherit',
        display: 'table-row',
        verticalAlign: 'middle'
      },
      hover: {
        '&:hover': {
          backgroundColor: theme.palette.action.hover
        }
      },
      selected: {
        backgroundColor: selectedColor,
        '&:hover': {
          backgroundColor: selectedColor
        }
      }
    },
    'TableRow'
  );
}

const options: StyleSheetFactoryOptions = {
  index: 2,
  meta: TableRowClassKey
};

@Component({
  selector: TableRowClassKey,
  encapsulation: ViewEncapsulation.None,
  template: `
    <ng-template #template>
      <tr [class]="composedClasses">
        <ng-content></ng-content>
      </tr>
    </ng-template>
  `
})
export class TableRow extends Ground implements OnChanges, OnInit {
  @Input() hover: HoverProp = false;
  @Input() selected: SelectedProp = false;

  @ViewChild('template', { static: true }) template: TemplateRef<Object>;

  constructor(private viewContainerRef: ViewContainerRef) {
    super();
    this.classes = provideClasses(TableRowStyles, options);
  }

  ngOnInit(): void {
    this.viewContainerRef.createEmbeddedView(this.template);
    this.prepareComponent();
  }

  ngOnChanges(): void {
    this.prepareComponent();
  }

  prepareComponent(): void {
    this.composeClasses();
  }

  composeClasses(): void {
    const hoverClass = this.hover && this.hover !== 'false' ? this.classes.hover : '';
    const selectedClass = this.selected && this.selected !== 'false' ? this.classes.selected : '';
    const composedClasses = `${this.classes.root} ${hoverClass} ${selectedClass} ${this.className}`.trim();
    this.composedClasses = replaceMultipleSpaces(composedClasses);
  }
}

const theme = useTheme();
const TableRowStyle = TableRowStyles(theme);

export default TableRowStyle;
