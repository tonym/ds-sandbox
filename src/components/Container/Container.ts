import { Component, Input, OnChanges, OnInit, ViewEncapsulation } from '@angular/core';
import { applyOverrides, breakpoints, capitalize, getClassKey, replaceMultipleSpaces } from '../../helpers/index';
import { Breakpoint, Styles, StyleSheetFactoryOptions, Theme } from '../../types/index';
import provideClasses from '../../styles/provideClasses/index';
import useTheme from '../../styles/useTheme/index';
import { Ground, GroundProps } from '../Ground/index';

type FixedProp = boolean | string;
type MaxWidthProp = string | false;

export interface ContainerProps extends GroundProps {
  fixed?: FixedProp;
  maxWidth?: MaxWidthProp;
}

export const ContainerClassKey = getClassKey('container');

export type ContainerClasses = 'root' | 'fixed' | 'maxWidthLg' | 'maxWidthMd' | 'maxWidthSm' | 'maxWidthXl' | 'maxWidthXs';

export function ContainerStyles(theme: Theme): Styles {
  const fixed = theme.breakpoints.keys.reduce((accumulator: { [key: string]: any }, key: Breakpoint): {} => {
    const breakpoint = theme.breakpoints.values[key];
    const mediaQuery = breakpoints.up(key);
    if (breakpoint > 0) {
      accumulator[mediaQuery] = {
        maxWidth: breakpoint
      };
    }
    return accumulator;
  }, {});

  const styles = {
    root: {
      boxSizing: 'border-box',
      display: 'block',
      margin: 'auto',
      paddingLeft: theme.spacing.unit * 2,
      paddingRight: theme.spacing.unit * 2,
      width: '100%'
    },
    fixed: fixed,
    maxWidthLg: {},
    maxWidthMd: {},
    maxWidthSm: {},
    maxWidthXl: {},
    maxWidthXs: {}
  };

  styles.root[breakpoints.up('sm')] = {
    paddingLeft: theme.spacing.unit * 3,
    paddingRight: theme.spacing.unit * 3
  };

  styles.root[breakpoints.up('md')] = {
    paddingLeft: theme.spacing.unit * 4,
    paddingRight: theme.spacing.unit * 4
  };

  styles.maxWidthLg[breakpoints.up('lg')] = {
    maxWidth: theme.breakpoints.values.lg
  };

  styles.maxWidthMd[breakpoints.up('md')] = {
    maxWidth: theme.breakpoints.values.md
  };

  styles.maxWidthSm[breakpoints.up('sm')] = {
    maxWidth: theme.breakpoints.values.sm
  };

  styles.maxWidthXl[breakpoints.up('xl')] = {
    maxWidth: theme.breakpoints.values.xl
  };

  styles.maxWidthXs[breakpoints.up('xs')] = {
    maxWidth: theme.breakpoints.values.xs
  };

  return applyOverrides(styles, 'Container');
}

const options: StyleSheetFactoryOptions = {
  index: 2,
  meta: ContainerClassKey
};

@Component({
  selector: ContainerClassKey,
  encapsulation: ViewEncapsulation.None,
  template: `
    <div [class]="composedClasses">
      <ng-content></ng-content>
    </div>
  `
})
export class Container extends Ground implements OnInit {
  @Input() fixed: FixedProp = false;
  @Input() maxWidth: MaxWidthProp = 'lg';

  constructor() {
    super();
    this.classes = provideClasses(ContainerStyles, options);
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
    this.composedClasses = '';
    const maxWidthSize = this.maxWidth && this.maxWidth !== 'false' ? capitalize(this.maxWidth) : '';
    const maxWidthClass = maxWidthSize ? this.classes[`maxWidth${maxWidthSize}`] : '';
    const fixedClass = this.fixed && this.fixed !== 'false' ? `${this.classes['fixed']} ` : '';
    const composedClasses = `${this.classes.root} ${maxWidthClass} ${fixedClass} ${this.className}`.trim();
    this.composedClasses = replaceMultipleSpaces(composedClasses);
  }
}

const theme = useTheme();
const ContainerStyle = ContainerStyles(theme);

export default ContainerStyle;
