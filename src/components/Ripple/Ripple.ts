import { Component, OnChanges, OnInit, ViewEncapsulation } from '@angular/core';
import { Styles, StyleSheetFactoryOptions, Theme } from '../../types/index';
import { applyOverrides, getClassKey } from '../../helpers/index';
import provideClasses from '../../styles/provideClasses/index';
import useTheme from '../../styles/useTheme/index';
import { Ground, GroundProps } from '../Ground/index';

export interface RippleProps extends GroundProps {}

export const RippleClassKey = getClassKey('ripple');

export type RippleClasses = 'root';

export function RippleStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      root: {}
    },
    'Ripple'
  );
}

const options: StyleSheetFactoryOptions = {
  index: 2,
  meta: RippleClassKey
};

@Component({
  selector: RippleClassKey,
  encapsulation: ViewEncapsulation.None,
  template: `
    <span [class]="composedClasses">
      <ng-content></ng-content>
    </span>
  `
})
export class Ripple extends Ground implements OnChanges, OnInit {
  constructor() {
    super();
    this.classes = provideClasses(RippleStyles, options);
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
const RippleStyle = RippleStyles(theme);

export default RippleStyle;
