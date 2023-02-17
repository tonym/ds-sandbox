import { Component, Input, OnChanges, OnInit, ViewEncapsulation } from '@angular/core';
import { Styles, StyleSheetFactoryOptions, Theme } from '../../types/index';
import { applyOverrides, fade, getClassKey, replaceMultipleSpaces } from '../../helpers/index';
import provideClasses from '../../styles/provideClasses/index';
import useTheme from '../../styles/useTheme/index';
import { Ground, GroundProps } from '../Ground/index';

type AbsoluteProp = boolean | string;
type LightProp = boolean | string;
type OrientationProp = 'horizontal' | 'vertical';
type VariantProp = 'fullWidth' | 'inset' | 'middle';

export interface DividerProps extends GroundProps {
  absolute?: AbsoluteProp;
  light?: LightProp;
  orientation?: OrientationProp;
  variant?: VariantProp;
}

export const DividerClassKey = getClassKey('divider');

export type DividerClasses = 'root' | 'absolute' | 'inset' | 'light' | 'middle' | 'vertical';

export function DividerStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      root: {
        backgroundColor: theme.palette.divider,
        border: 'none',
        flexShrink: 0,
        height: 1,
        margin: 0
      },
      absolute: {
        bottom: 0,
        left: 0,
        position: 'absolute',
        width: '100%'
      },
      inset: {
        marginLeft: theme.spacing.unit * 9
      },
      light: {
        backgroundColor: fade(theme.palette.divider, 0.08)
      },
      middle: {
        marginLeft: theme.spacing.unit * 2,
        marginRight: theme.spacing.unit * 2
      },
      vertical: {
        height: '100%',
        width: 1
      }
    },
    'Divider'
  );
}

const options: StyleSheetFactoryOptions = {
  index: 2,
  meta: DividerClassKey
};

@Component({
  selector: DividerClassKey,
  encapsulation: ViewEncapsulation.None,
  template: ` <hr [class]="composedClasses" /> `
})
export class Divider extends Ground implements OnChanges, OnInit {
  @Input() absolute: AbsoluteProp = false;
  @Input() light: LightProp = false;
  @Input() orientation: OrientationProp = 'horizontal';
  @Input() variant: VariantProp = 'fullWidth';

  constructor() {
    super();
    this.classes = provideClasses(DividerStyles, options);
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
    const absolute = this.absolute ? this.classes.absolute : '';
    const light = this.light ? this.classes.light : '';
    const orientation = this.orientation === 'vertical' ? this.classes.vertical : '';
    const variant = this.variant === 'fullWidth' ? '' : this.classes[this.variant];
    const composedClasses = `${this.classes.root} ${absolute} ${light} ${orientation} ${variant} ${this.className}`.trim();
    this.composedClasses = replaceMultipleSpaces(composedClasses);
  }
}

const theme = useTheme();
const DividerStyle = DividerStyles(theme);

export default DividerStyle;
