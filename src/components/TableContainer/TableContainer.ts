import { Component, Input, OnChanges, OnInit, ViewEncapsulation } from '@angular/core';
import { Styles, StyleSheetFactoryOptions, Theme } from '../../types/index';
import { applyOverrides, getClassKey } from '../../helpers/index';
import provideClasses from '../../styles/provideClasses/index';
import useTheme from '../../styles/useTheme/index';
import { Ground, GroundProps } from '../Ground/index';

type ElevationProp = string | number;

export interface TableContainerProps extends GroundProps {
  elevation: ElevationProp;
}

export const TableContainerClassKey = getClassKey('table-container');

export type TableContainerClasses = 'root';

export function TableContainerStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      root: {
        overflowX: 'auto',
        width: '100%'
      }
    },
    'TableContainer'
  );
}

const options: StyleSheetFactoryOptions = {
  index: 3,
  meta: TableContainerClassKey
};

@Component({
  selector: TableContainerClassKey,
  encapsulation: ViewEncapsulation.None,
  template: `
    <og-paper [className]="composedClasses" [elevation]="elevation">
      <ng-content></ng-content>
    </og-paper>
  `
})
export class TableContainer extends Ground implements OnChanges, OnInit {
  @Input() elevation: ElevationProp = 0;

  constructor() {
    super();
    this.classes = provideClasses(TableContainerStyles, options);
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
    this.composedClasses = `${this.classes.root} ${this.className}`.trim();
  }
}

const theme = useTheme();
const TableContainerStyle = TableContainerStyles(theme);

export default TableContainerStyle;
