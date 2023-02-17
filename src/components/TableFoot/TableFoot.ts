import { Component, OnChanges, OnInit, TemplateRef, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { Styles, StyleSheetFactoryOptions, Theme } from '../../types/index';
import { applyOverrides, getClassKey } from '../../helpers/index';
import provideClasses from '../../styles/provideClasses/index';
import useTheme from '../../styles/useTheme/index';
import { Ground, GroundProps } from '../Ground/index';

export interface TableFootProps extends GroundProps {}

export const TableFootClassKey = getClassKey('table-foot');

export type TableFootClasses = 'root';

export function TableFootStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      root: {
        display: 'table-footer-group'
      }
    },
    'TableFoot'
  );
}

const options: StyleSheetFactoryOptions = {
  index: 2,
  meta: TableFootClassKey
};

@Component({
  selector: TableFootClassKey,
  encapsulation: ViewEncapsulation.None,
  template: `
    <ng-template #template>
      <tfoot [class]="composedClasses">
        <ng-content></ng-content>
      </tfoot>
    </ng-template>
  `
})
export class TableFoot extends Ground implements OnChanges, OnInit {
  @ViewChild('template', { static: true }) template: TemplateRef<Object>;

  constructor(private viewContainerRef: ViewContainerRef) {
    super();
    this.classes = provideClasses(TableFootStyles, options);
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
const TableFootStyle = TableFootStyles(theme);

export default TableFootStyle;
