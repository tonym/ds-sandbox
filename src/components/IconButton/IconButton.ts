import { Component, Input, OnChanges, OnInit, ViewEncapsulation } from '@angular/core';
import { Styles, StyleSheetFactoryOptions, Theme } from '../../types/index';
import { alpha, applyOverrides, capitalize, getClassKey, replaceMultipleSpaces, transitions } from '../../helpers/index';
import provideClasses from '../../styles/provideClasses/index';
import useTheme from '../../styles/useTheme/index';
import { Ground, GroundProps } from '../Ground/index';

type ButtonTypeProp = 'button' | 'reset' | 'submit';
type ColorProp = 'error' | 'info' | 'inherit' | 'primary' | 'secondary' | 'success' | 'warning';
type DisabledProp = boolean | string;
type EdgeProp = 'end' | 'start' | undefined;
type HasParentProp = boolean | string;
type HoverProp = 'background' | 'foreground' | 'icon';
type IconProp = string;
type IconStyleProp = 'filled' | 'outlined' | 'rounded' | 'sharp' | 'twotone';
type LinkProp = string;
type NewTabProp = boolean | string;
type ShapeRenderingProp = 'auto' | 'optimizeSpeed' | 'crispEdges' | 'geometricPrecision';
type SizeProp = 'md' | 'sm';
type SvgTitleProp = string;
type TitleProp = string;

export interface IconButtonProps extends GroundProps {
  buttonType?: ButtonTypeProp;
  color?: ColorProp;
  disabled?: DisabledProp;
  edge?: EdgeProp;
  hasParent?: HasParentProp;
  hover?: HoverProp;
  icon?: IconProp;
  iconStyle?: IconStyleProp;
  link?: LinkProp;
  newTab?: NewTabProp;
  shapeRendering?: ShapeRenderingProp;
  size?: SizeProp;
  svgTitle?: SvgTitleProp;
  title?: TitleProp;
}

export const IconButtonClassKey = getClassKey('icon-button');

export type IconButtonClasses =
  | 'root'
  | 'colorBackgroundError'
  | 'colorBackgroundInfo'
  | 'colorBackgroundInherit'
  | 'colorBackgroundPrimary'
  | 'colorBackgroundSecondary'
  | 'colorBackgroundSuccess'
  | 'colorBackgroundWarning'
  | 'colorForegroundError'
  | 'colorForegroundInfo'
  | 'colorForegroundInherit'
  | 'colorForegroundPrimary'
  | 'colorForegroundSecondary'
  | 'colorForegroundSuccess'
  | 'colorForegroundWarning'
  | 'disabled'
  | 'edgeEnd'
  | 'edgeStart'
  | 'enabledBackground'
  | 'enabledForeground'
  | 'sizeMd'
  | 'sizeSm';

export function IconButtonStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      root: {
        textAlign: 'center',
        flex: '0 0 auto',
        borderRadius: '50%',
        lineHeight: '1rem',
        transition: transitions.create('background-color', {
          duration: theme.transitions.duration.shortest
        }),
        '& svg': {
          verticalAlign: 'middle'
        }
      },
      colorBackgroundError: {
        color: theme.palette.error.main
      },
      colorBackgroundInfo: {
        color: theme.palette.info.main
      },
      colorBackgroundInherit: {
        color: 'inherit'
      },
      colorBackgroundPrimary: {
        color: theme.palette.primary.main
      },
      colorBackgroundSecondary: {
        color: theme.palette.secondary.main
      },
      colorBackgroundSuccess: {
        color: theme.palette.success.main
      },
      colorBackgroundWarning: {
        color: theme.palette.warning.main
      },
      colorForegroundError: {
        '&:hover': {
          backgroundColor: theme.palette.error.light
        }
      },
      colorForegroundInfo: {
        '&:hover': {
          backgroundColor: theme.palette.info.light
        }
      },
      colorForegroundInherit: {
        '&:hover': {
          backgroundColor: alpha(theme.palette.action.active, theme.palette.action.hoverOpacity)
        }
      },
      colorForegroundPrimary: {
        '&:hover': {
          backgroundColor: theme.palette.primary.light
        }
      },
      colorForegroundSecondary: {
        '&:hover': {
          backgroundColor: theme.palette.secondary.light
        }
      },
      colorForegroundSuccess: {
        '&:hover': {
          backgroundColor: theme.palette.success.light
        }
      },
      colorForegroundWarning: {
        '&:hover': {
          backgroundColor: theme.palette.warning.light
        }
      },
      colorIconError: {
        '&:hover': {
          color: theme.palette.error.main
        }
      },
      colorIconInfo: {
        '&:hover': {
          color: theme.palette.info.main
        }
      },
      colorIconInherit: {
        '&:hover': {
          color: 'inherit'
        }
      },
      colorIconPrimary: {
        '&:hover': {
          color: theme.palette.primary.main
        }
      },
      colorIconSecondary: {
        '&:hover': {
          color: theme.palette.secondary.main
        }
      },
      coloriconSuccess: {
        '&:hover': {
          color: theme.palette.success.main
        }
      },
      colorIconWarning: {
        '&:hover': {
          color: theme.palette.warning.main
        }
      },
      disabled: {
        color: theme.palette.action.disabled,
        '&:hover': {
          backgroundColor: 'transparent',
          color: theme.palette.action.disabled
        }
      },
      edgeEnd: {
        marginRight: -12,
        '$sizeSm&': {
          marginRight: -3
        }
      },
      edgeStart: {
        marginLeft: -12,
        '$sizeSm&': {
          marginLeft: -3
        }
      },
      enabledBackground: {
        '&:hover': {
          backgroundColor: alpha(theme.palette.action.active, theme.palette.action.hoverOpacity),
          '@media (hover: none)': {
            backgroundColor: 'transparent'
          }
        }
      },
      enabledForeground: {},
      sizeMd: {
        padding: 12
      },
      sizeSm: {
        padding: 3
      }
    },
    'IconButton'
  );
}

const options: StyleSheetFactoryOptions = {
  index: 2,
  meta: IconButtonClassKey
};

@Component({
  selector: IconButtonClassKey,
  encapsulation: ViewEncapsulation.None,
  template: `
    <og-button-base
      [buttonType]="buttonType"
      [className]="composedClasses"
      [disabled]="disabled"
      [hasParent]="hasParent"
      [link]="link"
      [newTab]="newTab"
      [title]="buttonTitle"
    >
      <og-svg-icon
        color="inherit"
        [fontSize]="size"
        [icon]="icon"
        [iconStyle]="iconStyle"
        [shapeRendering]="shapeRendering"
        [svgTitle]="svgTitle"
      ></og-svg-icon>
    </og-button-base>
  `
})
export class IconButton extends Ground implements OnChanges, OnInit {
  @Input() buttonType: ButtonTypeProp = 'button';
  @Input() color: ColorProp = 'primary';
  @Input() disabled: DisabledProp = false;
  @Input() edge: EdgeProp;
  @Input() hasParent: HasParentProp = false;
  @Input() hover: HoverProp = 'background';
  @Input() icon: IconProp = '';
  @Input() iconStyle: IconStyleProp = 'filled';
  @Input() link: LinkProp = '';
  @Input() newTab: NewTabProp = false;
  @Input() shapeRendering: ShapeRenderingProp;
  @Input() size: SizeProp = 'md';
  @Input() svgTitle: SvgTitleProp = '';
  @Input() title: TitleProp = '';

  buttonTitle = '';

  constructor() {
    super();
    this.classes = provideClasses(IconButtonStyles, options);
  }

  ngOnInit(): void {
    this.prepareComponent();
  }

  ngOnChanges(): void {
    this.prepareComponent();
  }

  prepareComponent(): void {
    this.composeClasses();
    this.composeTitle();
  }

  composeClasses(): void {
    const colorClass =
      this.disabled && this.disabled !== 'false' ? '' : this.classes[`color${capitalize(this.hover)}${capitalize(this.color)}`];
    const disabledClass =
      this.disabled && this.disabled !== 'false' ? this.classes.disabled : this.classes[`enabled${capitalize(this.hover)}`];
    const edgeClass = this.edge ? this.classes[`edge${capitalize(this.edge)}`] : '';
    const sizeClass = this.classes[`size${capitalize(this.size)}`];
    const composedClasses = `${this.classes.root} ${colorClass} ${disabledClass} ${edgeClass} ${sizeClass} ${this.className}`.trim();
    this.composedClasses = replaceMultipleSpaces(composedClasses);
  }

  composeTitle(): void {
    this.buttonTitle = this.title ? this.title : this.icon.replace(/_/g, ' ');
  }
}

const theme = useTheme();
const IconButtonStyle = IconButtonStyles(theme);

export default IconButtonStyle;
