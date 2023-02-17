import { Component, OnChanges, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Classes, Styles, StyleSheet, StyleSheetFactoryOptions, Theme } from '../../types/index';
import { applyOverrides, capitalize, getClassKey, replaceMultipleSpaces, transitions } from '../../helpers/index';
import provideClasses from '../../styles/provideClasses/index';
import useTheme from '../../styles/useTheme/index';
import { Ground, GroundProps } from '../Ground/index';
import provideStylesheet from '../../styles/provideStylesheet/index';

const baseSize = 44;

type ColorProp = 'inherit' | 'primary' | 'secondary';
type DisableShrinkProp = boolean | string;
type SizeProp = number | string;
type ThicknessProp = number | string;
type ValueProp = number | string;
type VariantProp = 'determinate' | 'indeterminate';

export interface CircularProgressProps extends GroundProps {
  color?: ColorProp;
  disableShrink?: DisableShrinkProp;
  size?: SizeProp;
  thickness?: ThicknessProp;
  value?: ValueProp;
  variant?: VariantProp;
}

export const CircularProgressClassKey = getClassKey('circular-progress');

export type CircularProgressClasses =
  | 'root'
  | 'circle'
  | 'circleDeterminate'
  | 'circleDisableShrink'
  | 'circleIndeterminate'
  | 'colorInherit'
  | 'colorPrimary'
  | 'colorSecondary'
  | 'determinate'
  | 'indeterminate'
  | 'svg';

export function CircularProgressStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      root: {
        display: 'inline-block'
      },
      circle: {
        stroke: 'currentColor',
        strokeLinecap: 'butt'
      },
      circleDeterminate: {
        transition: transitions.create('stroke-dashoffset')
      },
      circleDisableShrink: {
        animation: 'none'
      },
      circleIndeterminate: {
        strokeDasharray: '80px, 200px',
        strokeDashoffset: '0px'
      },
      circleShrink: {
        animation: '$circular-dash 1.4s ease-in-out infinite'
      },
      colorInherit: {
        color: 'inherit'
      },
      colorPrimary: {
        color: theme.palette.primary.main
      },
      colorSecondary: {
        color: theme.palette.secondary.main
      },
      determinate: {
        transition: transitions.create('transform')
      },
      indeterminate: {
        animation: '$circular-rotate 1.4s linear infinite'
      },
      svg: {
        display: 'block'
      },
      '@keyframes circular-rotate': {
        '0%': {
          transformOrigin: '50% 50%'
        },
        '100%': {
          transform: 'rotate(360deg)'
        }
      },
      '@keyframes circular-dash': {
        '0%': {
          strokeDasharray: '1px, 200px',
          strokeDashoffset: '0px'
        },
        '50%': {
          strokeDasharray: '100px, 200px',
          strokeDashoffset: '-15px'
        },
        '100%': {
          strokeDasharray: '100px, 200px',
          strokeDashoffset: '-125px'
        }
      }
    },
    'CircularProgress'
  );
}

const options: StyleSheetFactoryOptions = {
  index: 2,
  meta: CircularProgressClassKey
};

@Component({
  selector: CircularProgressClassKey,
  encapsulation: ViewEncapsulation.None,
  template: `
    <div [class]="composedClasses" role="progressbar">
      <svg [attr.class]="classes.svg" [attr.viewBox]="viewBoxSize">
        <circle
          [attr.class]="composedCircleClasses"
          fill="none"
          [attr.cx]="baseSize"
          [attr.cy]="baseSize"
          [attr.r]="circleR"
          [attr.stroke-width]="thickness"
        />
      </svg>
    </div>
  `
})
export class CircularProgress extends Ground implements OnChanges, OnInit {
  @Input() color: ColorProp = 'primary';
  @Input() disableShrink: DisableShrinkProp = false;
  @Input() size: SizeProp = 40;
  @Input() thickness: ThicknessProp = 3.6;
  @Input() value: ValueProp = 0;
  @Input() variant: VariantProp = 'indeterminate';

  public baseSize = baseSize;
  public circleR = '';
  public circleClass = '';
  public composedCircleClasses = '';
  public sizeClass = '';
  public viewBoxSize = `${this.baseSize / 2} ${this.baseSize / 2} ${this.baseSize} ${this.baseSize}`;

  constructor() {
    super();
    this.classes = provideClasses(CircularProgressStyles, options);
  }

  ngOnInit(): void {
    this.prepareComponent();
  }

  ngOnChanges(): void {
    this.prepareComponent();
  }

  prepareComponent(): void {
    this.composeClasses();
    this.composeCircleClasses();
  }

  composeClasses(): void {
    this.createSizeStyleSheet();
    const variantClass = this.classes[this.variant];
    const colorClass = this.classes[`color${capitalize(this.color)}`];
    this.composedClasses = `${this.classes.root} ${colorClass} ${variantClass} ${this.sizeClass} ${this.className}`.trim();
  }

  composeCircleClasses(): void {
    this.createCircleStyleSheet();
    const circleVariantClass = this.classes[`circle${capitalize(this.variant)}`];
    const circleDisableShrinkClass =
      (this.disableShrink && this.disableShrink !== 'false') || this.variant === 'determinate'
        ? this.classes.circleDisableShrink
        : this.classes.circleShrink;
    const composedCircleClasses = `${this.classes.circle} ${circleVariantClass} ${circleDisableShrinkClass} ${this.circleClass}`.trim();
    this.composedCircleClasses = replaceMultipleSpaces(composedCircleClasses);
  }

  createCircleStyleSheet(): void {
    const thickness = parseFloat(`${this.thickness}`);
    this.circleR = `${(this.baseSize - thickness) / 2}`;
    if (this.variant === 'determinate') {
      const value = parseFloat(`${this.value}`);
      const circumference = 2 * Math.PI * ((this.baseSize - thickness) / 2);
      const circleOptions: StyleSheetFactoryOptions = {
        ...options,
        meta: `${CircularProgressClassKey}-circle-${this.variant}-${this.value}`
      };
      const circleClass = `circle`;
      const circleStyles = {
        [circleClass]: {
          strokeDasharray: circumference.toFixed(3),
          strokeDashoffset: (((100 - value) / 100) * circumference).toFixed(3)
        }
      };
      const circleSheet: StyleSheet = provideStylesheet(circleStyles, circleOptions);
      const circleClasses: Classes = { ...circleSheet.classes };
      this.circleClass = circleClasses[circleClass];
    }
  }

  createSizeStyleSheet(): void {
    const sizeOptions: StyleSheetFactoryOptions = { ...options, meta: `${CircularProgressClassKey}-size-${this.size}` };
    const sizeClass = `size${this.size}`;
    const sizeStyles = {
      [sizeClass]: {
        height: `${this.size}px`,
        width: `${this.size}px`
      }
    };
    const sizeSheet: StyleSheet = provideStylesheet(sizeStyles, sizeOptions);
    const sizeClasses: Classes = { ...sizeSheet.classes };
    this.sizeClass = sizeClasses[sizeClass];
  }
}

const theme = useTheme();
const CircularProgressStyle = CircularProgressStyles(theme);

export default CircularProgressStyle;
