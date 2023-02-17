import { Component, OnChanges, OnInit, TemplateRef, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { Styles, StyleSheetFactoryOptions, Theme } from '../../types/index';
import { applyOverrides, getClassKey } from '../../helpers/index';
import provideClasses from '../../styles/provideClasses/index';
import useTheme from '../../styles/useTheme/index';
import { Ground, GroundProps } from '../Ground/index';

export interface TableHeadProps extends GroundProps {}

export const TableHeadClassKey = getClassKey('table-head');

export type TableHeadClasses = 'root';

export function TableHeadStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      root: {
        display: 'table-header-group'
      }
    },
    'TableHead'
  );
}

const options: StyleSheetFactoryOptions = {
  index: 2,
  meta: TableHeadClassKey
};

@Component({
  selector: TableHeadClassKey,
  encapsulation: ViewEncapsulation.None,
  template: `
    <ng-template #template>
      <thead [class]="composedClasses">
        <ng-content></ng-content>
      </thead>
    </ng-template>
  `
})
export class TableHead extends Ground implements OnChanges, OnInit {
  @ViewChild('template', { static: true }) template: TemplateRef<Object>;

  constructor(private viewContainerRef: ViewContainerRef) {
    super();
    this.classes = provideClasses(TableHeadStyles, options);
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
const TableHeadStyle = TableHeadStyles(theme);

export default TableHeadStyle;
