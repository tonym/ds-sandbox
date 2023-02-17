import { Component, OnChanges, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Styles, StyleSheetFactoryOptions, Theme } from '../../types/index';
import { applyOverrides, capitalize, getClassKey, pxToRem } from '../../helpers/index';
import provideClasses from '../../styles/provideClasses/index';
import useTheme from '../../styles/useTheme/index';
import { Ground, GroundProps } from '../Ground/index';

type ColorProp = 'error' | 'info' | 'inherit' | 'primary' | 'secondary' | 'success' | 'warning';
type FontSizeProp = 'inherit' | 'lg' | 'md' | 'sm';

export interface IconProps extends GroundProps {
  color?: ColorProp;
  fontSize?: FontSizeProp;
}

export const IconClassKey = getClassKey('icon');

export type IconClasses =
  | 'root'
  | 'colorError'
  | 'colorInfo'
  | 'colorInherit'
  | 'colorPrimary'
  | 'colorSecondary'
  | 'colorSuccess'
  | 'colorWarning'
  | 'fontSizeDefault'
  | 'fontSizeInherit'
  | 'fontSizeLg'
  | 'fontSizeSm';

export function IconStyles(theme: Theme): Styles {
  // !important for when Material Icon stylesheet loads after this sheet and overrides the styles
  return applyOverrides(
    {
      root: {
        height: '1em',
        userSelect: 'none',
        width: '1em'
      },
      colorError: {
        color: `${theme.palette.error.main} ! important`
      },
      colorInfo: {
        color: `${theme.palette.info.main} ! important`
      },
      colorInherit: {
        color: 'inherit ! important'
      },
      colorPrimary: {
        color: `${theme.palette.primary.main} ! important`
      },
      colorSecondary: {
        color: `${theme.palette.secondary.main} ! important`
      },
      colorSuccess: {
        color: `${theme.palette.success.main} ! important`
      },
      colorWarning: {
        color: `${theme.palette.warning.main} ! important`
      },
      fontSizeInherit: {
        fontSize: 'inherit ! important'
      },
      fontSizeLg: {
        fontSize: `${pxToRem(36)} ! important`
      },
      fontSizeMd: {
        fontSize: `${pxToRem(24)} ! important`
      },
      fontSizeSm: {
        fontSize: `${pxToRem(20)} ! important`
      }
    },
    'Icon'
  );
}

const options: StyleSheetFactoryOptions = {
  index: 2,
  meta: IconClassKey
};

@Component({
  selector: IconClassKey,
  encapsulation: ViewEncapsulation.None,
  template: `
    <span [class]="composedClasses" aria-hidden="true">
      <ng-content></ng-content>
    </span>
  `
})
export class Icon extends Ground implements OnChanges, OnInit {
  @Input() color: ColorProp = 'inherit';
  @Input() fontSize: FontSizeProp = 'md';

  constructor() {
    super();
    this.classes = provideClasses(IconStyles, options);
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
    const colorClass = this.classes[`color${capitalize(this.color)}`];
    const fontSizeClass = this.classes[`fontSize${capitalize(this.fontSize)}`];
    this.composedClasses = `material-icons notranslate ${this.classes.root} ${colorClass} ${fontSizeClass} ${this.className}`.trim();
  }
}

const theme = useTheme();
const IconStyle = IconStyles(theme);

export default IconStyle;
