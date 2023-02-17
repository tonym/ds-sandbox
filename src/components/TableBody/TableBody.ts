import { Component, OnChanges, OnInit, TemplateRef, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { Styles, StyleSheetFactoryOptions, Theme } from '../../types/index';
import { applyOverrides, getClassKey } from '../../helpers/index';
import provideClasses from '../../styles/provideClasses/index';
import useTheme from '../../styles/useTheme/index';
import { Ground, GroundProps } from '../Ground/index';

export interface TableBodyProps extends GroundProps {}

export const TableBodyClassKey = getClassKey('table-body');

export type TableBodyClasses = 'root';

export function TableBodyStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      root: {
        display: 'table-row-group'
      }
    },
    'TableBody'
  );
}

const options: StyleSheetFactoryOptions = {
  index: 2,
  meta: TableBodyClassKey
};

@Component({
  selector: TableBodyClassKey,
  encapsulation: ViewEncapsulation.None,
  template: `
    <ng-template #template>
      <tbody [class]="composedClasses">
        <ng-content></ng-content>
      </tbody>
    </ng-template>
  `
})
export class TableBody extends Ground implements OnChanges, OnInit {
  @ViewChild('template', { static: true }) template: TemplateRef<Object>;

  constructor(private viewContainerRef: ViewContainerRef) {
    super();
    this.classes = provideClasses(TableBodyStyles, options);
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
    this.composedClasses = `${this.classes.root} ${this.className}`.trim();
  }
}

const theme = useTheme();
const TableBodyStyle = TableBodyStyles(theme);

export default TableBodyStyle;
