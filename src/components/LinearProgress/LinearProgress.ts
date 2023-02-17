import { Component, Input, OnChanges, OnInit, ViewEncapsulation } from '@angular/core';
import { Classes, Styles, StyleSheet, StyleSheetFactoryOptions, Theme } from '../../types/index';
import { applyOverrides, capitalize, darken, getClassKey, lighten, selectModeColor, replaceMultipleSpaces } from '../../helpers/index';
import provideStylesheet from '../../styles/provideStylesheet/index';
import provideClasses from '../../styles/provideClasses/index';
import useTheme from '../../styles/useTheme/index';
import { Ground, GroundProps } from '../Ground/index';

type ColorProp = 'error' | 'info' | 'primary' | 'secondary' | 'success' | 'warning';
type HeightProp = 'full' | 'lg' | 'md' | 'sm';
type ValueProp = number | string | undefined;
type ValueBufferProp = number | string | undefined;
type VariantProp = 'buffer' | 'determinate' | 'indeterminate';

export interface LinearProgressProps extends GroundProps {
  color?: ColorProp;
  height?: HeightProp;
  value?: ValueProp;
  valueBuffer?: ValueBufferProp;
  variant?: VariantProp;
}

export const LinearProgressClassKey = getClassKey('linear-progress');

export type LinearProgressClasses =
  | 'root'
  | 'bar'
  | 'bar1Buffer'
  | 'bar1Determinate'
  | 'bar1Indeterminate'
  | 'bar2Buffer'
  | 'bar2Indeterminate'
  | 'barColorError'
  | 'barColorInfo'
  | 'barColorPrimary'
  | 'barColorSecondary'
  | 'barColorSuccess'
  | 'barColorWarning'
  | 'buffer'
  | 'colorError'
  | 'colorInfo'
  | 'colorPrimary'
  | 'colorSecondary'
  | 'colorSuccess'
  | 'colorWarning'
  | 'dashed'
  | 'dashedColorError'
  | 'dashedColorInfo'
  | 'dashedColorPrimary'
  | 'dashedColorSecondary'
  | 'dashedColorSuccess'
  | 'dashedColorWarning'
  | 'heightFull'
  | 'heightLg'
  | 'heightMd'
  | 'heightSm';

export function LinearProgressStyles(theme: Theme): Styles {
  const backgroundError = selectModeColor(theme.palette.error.main, theme.palette.mode);
  const backgroundInfo = selectModeColor(theme.palette.info.main, theme.palette.mode);
  const backgroundPrimary = selectModeColor(theme.palette.primary.main, theme.palette.mode);
  const backgroundSecondary = selectModeColor(theme.palette.secondary.main, theme.palette.mode);
  const backgroundSuccess = selectModeColor(theme.palette.success.main, theme.palette.mode);
  const backgroundWarning = selectModeColor(theme.palette.warning.main, theme.palette.mode);
  const transitionDuration = 4;

  return applyOverrides(
    {
      root: {
        position: 'relative',
        overflow: 'hidden',
        '@media print': {
          colorAdjust: 'exact'
        }
      },
      bar: {
        width: '100%',
        position: 'absolute',
        left: 0,
        bottom: 0,
        top: 0,
        transition: 'transform 0.2s linear',
        transformOrigin: 'left'
      },
      bar1Buffer: {
        zIndex: 1,
        transition: `transform .${transitionDuration}s linear`
      },
      bar1Determinate: {
        transition: `transform .${transitionDuration}s linear`
      },
      bar1Indeterminate: {
        width: 'auto',
        animation: '$indeterminate1 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite'
      },
      bar2Buffer: {
        transition: `transform .${transitionDuration}s linear`
      },
      bar2Indeterminate: {
        width: 'auto',
        animation: '$indeterminate2 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite'
      },
      barColorError: {
        backgroundColor: theme.palette.error.main
      },
      barColorInfo: {
        backgroundColor: theme.palette.info.main
      },
      barColorPrimary: {
        backgroundColor: theme.palette.primary.main
      },
      barColorSecondary: {
        backgroundColor: theme.palette.secondary.main
      },
      barColorSuccess: {
        backgroundColor: theme.palette.success.main
      },
      barColorWarning: {
        backgroundColor: theme.palette.warning.main
      },
      buffer: {
        backgroundColor: 'transparent'
      },
      colorError: {
        backgroundColor: backgroundError
      },
      colorInfo: {
        backgroundColor: backgroundInfo
      },
      colorPrimary: {
        backgroundColor: backgroundPrimary
      },
      colorSecondary: {
        backgroundColor: backgroundSecondary
      },
      colorSuccess: {
        backgroundColor: backgroundSuccess
      },
      colorWarning: {
        backgroundColor: backgroundWarning
      },
      dashed: {
        position: 'absolute',
        marginTop: 0,
        height: '100%',
        width: '100%',
        animation: '$buffer 3s infinite linear'
      },
      dashedColorError: {
        backgroundImage: `linear-gradient(to right%, ${theme.palette.error.main} 50%, transparent 50%)`,
        backgroundSize: '10px 10px'
      },
      dashedColorInfo: {
        backgroundImage: `linear-gradient(to right, ${theme.palette.info.main} 50%, transparent 50%)`,
        backgroundSize: '10px 10px'
      },
      dashedColorPrimary: {
        backgroundImage: `linear-gradient(to right, ${theme.palette.primary.main} 50%, transparent 50%)`,
        backgroundSize: '10px 10px'
      },
      dashedColorSecondary: {
        backgroundImage: `linear-gradient(to right, ${theme.palette.secondary.main} 50%, transparent 50%)`,
        backgroundSize: '10px 10px'
      },
      dashedColorSuccess: {
        backgroundImage: `linear-gradient(to right, ${theme.palette.success.main} 50%, transparent 50%)`,
        backgroundSize: '10px 10px'
      },
      dashedColorWarning: {
        backgroundImage: `linear-gradient(to right, ${theme.palette.warning.main} 50%, transparent 50%)`,
        backgroundSize: '10px 10px'
      },
      heightFull: {
        height: '100%'
      },
      heightLg: {
        height: 16
      },
      heightMd: {
        height: 8
      },
      heightSm: {
        height: 4
      },
      '@keyframes indeterminate1': {
        '0%': {
          left: '-35%',
          right: '100%'
        },
        '60%': {
          left: '100%',
          right: '-90%'
        },
        '100%': {
          left: '100%',
          right: '-90%'
        }
      },
      '@keyframes indeterminate2': {
        '0%': {
          left: '-200%',
          right: '100%'
        },
        '60%': {
          left: '107%',
          right: '-8%'
        },
        '100%': {
          left: '107%',
          right: '-8%'
        }
      },
      '@keyframes buffer': {
        '0%': {
          opacity: 1,
          backgroundPosition: '0 -23px'
        },
        '50%': {
          opacity: 0,
          backgroundPosition: '0 -23px'
        },
        '100%': {
          opacity: 1,
          backgroundPosition: '-200px -23px'
        }
      }
    },
    'LinearProgress'
  );
}

const options: StyleSheetFactoryOptions = {
  index: 2,
  meta: LinearProgressClassKey
};

@Component({
  selector: LinearProgressClassKey,
  encapsulation: ViewEncapsulation.None,
  template: `
    <div
      [class]="composedClasses"
      role="progressbar"
      [attr.aria-valuenow]="ariaValueNow ? ariaValueNow : null"
      [attr.aria-valuemax]="ariaValueNow ? 100 : null"
      [attr.aria-valuemin]="ariaValueNow ? 0 : null"
    >
      <div *ngIf="variant === 'buffer'" [class]="composedDashedClasses"></div>
      <div [class]="composedBarClasses"></div>
      <div *ngIf="variant !== 'determinate'" [class]="composedIndeterminateClasses"></div>
    </div>
  `
})
export class LinearProgress extends Ground implements OnChanges, OnInit {
  @Input() color: ColorProp = 'primary';
  @Input() height: HeightProp = 'sm';
  @Input() value: ValueProp;
  @Input() valueBuffer: ValueBufferProp;
  @Input() variant: VariantProp = 'indeterminate';

  public ariaValueNow: number;
  public bar1Class = '';
  public bar2Class = '';
  public composedBarClasses = '';
  public composedDashedClasses = '';
  public composedIndeterminateClasses = '';
  public theme: Theme = useTheme();

  constructor() {
    super();
    this.classes = provideClasses(LinearProgressStyles, options);
  }

  ngOnInit(): void {
    this.prepareComponent();
  }

  ngOnChanges(): void {
    this.prepareComponent();
  }

  prepareComponent(): void {
    this.composeClasses();
    this.composeBarClasses();
    this.composeDashedClasses();
    this.composeIndeterminateClasses();
  }

  composeClasses(): void {
    const colorClass = this.classes[`color${capitalize(this.color)}`];
    const heightClass = this.classes[`height${capitalize(this.height)}`];
    const variantClass = this.variant === 'buffer' ? this.classes.buffer : '';
    const composedClasses = `${this.classes.root} ${colorClass} ${heightClass} ${variantClass} ${this.className}`.trim();
    this.composedClasses = replaceMultipleSpaces(composedClasses);
  }

  composeBarClasses(): void {
    if (this.variant === 'determinate' || this.variant === 'buffer') {
      this.createBar1Stylesheet();
    }
    const colorClass = this.classes[`barColor${capitalize(this.color)}`];
    const variantClass = this.classes[`bar1${capitalize(this.variant)}`];
    this.composedBarClasses = `${this.classes.bar} ${colorClass} ${variantClass} ${this.bar1Class}`.trim();
  }

  composeDashedClasses(): void {
    const colorClass = this.classes[`dashedColor${capitalize(this.color)}`];
    this.composedDashedClasses = `${this.classes.dashed} ${colorClass}`.trim();
  }

  composeIndeterminateClasses(): void {
    if (this.variant === 'buffer') {
      this.createBar2Stylesheet();
    }
    const colorClass =
      this.variant === 'buffer' ? this.classes[`color${capitalize(this.color)}`] : this.classes[`barColor${capitalize(this.color)}`];
    const variantClass = this.variant === 'determinate' ? '' : this.classes[`bar2${capitalize(this.variant)}`];
    this.composedIndeterminateClasses = `${this.classes.bar} ${colorClass} ${variantClass} ${this.bar2Class}`.trim();
  }

  createBar1Stylesheet(): void {
    if (this.value && !isNaN(+this.value)) {
      this.ariaValueNow = Math.round(+this.value);
      const transform = this.theme.direction === 'rtl' ? +this.value : +this.value - 100;
      const bar1Options: StyleSheetFactoryOptions = { ...options, meta: `${LinearProgressClassKey}-bar1-${this.variant}-${this.value}` };
      const bar1Class = 'bar1';
      const bar1Styles = {
        [bar1Class]: {
          transform: `translateX(${transform}%)`
        }
      };
      const bar1Sheet: StyleSheet = provideStylesheet(bar1Styles, bar1Options);
      const bar1Classes: Classes = { ...bar1Sheet.classes };
      this.bar1Class = bar1Classes[bar1Class];
    }
  }

  createBar2Stylesheet(): void {
    if (this.valueBuffer && !isNaN(+this.valueBuffer)) {
      const transform = this.theme.direction === 'rtl' ? +this.valueBuffer : +this.valueBuffer - 100;
      const bar2Options: StyleSheetFactoryOptions = {
        ...options,
        meta: `${LinearProgressClassKey}-bar2-${this.variant}-${this.valueBuffer}`
      };
      const bar2Class = 'bar2';
      const bar2Styles = {
        [bar2Class]: {
          transform: `translateX(${transform}%)`
        }
      };
      const bar2Sheet: StyleSheet = provideStylesheet(bar2Styles, bar2Options);
      const bar2Classes: Classes = { ...bar2Sheet.classes };
      this.bar2Class = bar2Classes[bar2Class];
    }
  }
}

const theme = useTheme();
const LinearProgressStyle = LinearProgressStyles(theme);

export default LinearProgressStyle;
