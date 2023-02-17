import { Component, OnChanges, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Styles, StyleSheetFactoryOptions, Theme } from '../../types/index';
import { applyOverrides, capitalize, fade, getClassKey, replaceMultipleSpaces, transitions } from '../../helpers/index';
import provideClasses from '../../styles/provideClasses/index';
import useStyleOverrides from '../../styles/useStyleOverrides/index';
import useTheme from '../../styles/useTheme/index';
import { Ground, GroundProps } from '../Ground/index';

type ButtonTypeProp = 'button' | 'reset' | 'submit';
type ColorProp = 'default' | 'error' | 'info' | 'inherit' | 'primary' | 'secondary' | 'success' | 'warning';
type DisabledProp = boolean | string;
type DisableFocusRippleProp = boolean | string;
type DisableRippleProp = boolean | string;
type ElevatedProp = boolean | string;
type EndIconProp = string;
type FullWidthProp = boolean | string;
type HasParentProp = boolean | string;
type LinkProp = string;
type NewTabProp = boolean | string;
type SizeProp = 'lg' | 'md' | 'sm';
type StartIconProp = string;
type TitleProp = string;
type VariantProp = 'contained' | 'outlined' | 'passive' | 'text';

export interface ButtonProps extends GroundProps {
  buttonType?: ButtonTypeProp;
  color?: ColorProp;
  disabled?: DisabledProp;
  disableFocusRipple?: DisableFocusRippleProp;
  disableRipple?: DisableRippleProp;
  elevated?: ElevatedProp;
  endIcon?: EndIconProp;
  fullWidth?: FullWidthProp;
  hasParent?: HasParentProp;
  link?: LinkProp;
  newTab?: NewTabProp;
  size?: SizeProp;
  startIcon?: StartIconProp;
  title?: TitleProp;
  variant?: VariantProp;
}

export const ButtonClassKey = getClassKey('button');

export type ButtonClasses =
  | 'root'
  | 'colorInherit'
  | 'contained'
  | 'containedColorError'
  | 'containedColorInfo'
  | 'containedColorPrimary'
  | 'containedColorSecondary'
  | 'containedColorSuccess'
  | 'containedColorWarning'
  | 'containedSizeLg'
  | 'containedSizeSm'
  | 'disabled'
  | 'elevated'
  | 'endIcon'
  | 'focusVisible'
  | 'fullWidth'
  | 'iconSizeLg'
  | 'iconSizeMd'
  | 'iconSizeSm'
  | 'label'
  | 'outlined'
  | 'outlinedColorError'
  | 'outlinedColorInfo'
  | 'outlinedColorPrimary'
  | 'outlinedColorSecondary'
  | 'outlinedColorSuccess'
  | 'outlinedColorWarning'
  | 'outlinedSizeLg'
  | 'outlinedSizeSm'
  | 'sizeLg'
  | 'sizeSm'
  | 'startIcon'
  | 'text'
  | 'textColorError'
  | 'textColorInfo'
  | 'textColorPrimary'
  | 'textColorSecondary'
  | 'textColorSuccess'
  | 'textColorWarning'
  | 'textSizeLg'
  | 'textSizeSm';

export function ButtonStyles(theme: Theme): Styles {
  const { root, sizeLg, sizeSm } = useStyleOverrides().Button.styleOverrides || {};
  return applyOverrides(
    {
      root: {
        ...root,
        backgroundColor: 'transparent',
        boxSizing: 'border-box',
        color: theme.palette.text.primary,
        transition: transitions.create(['background-color', 'box-shadow', 'border', 'color'], {
          duration: theme.transitions.duration.short
        }),
        '&:hover': {
          backgroundColor: fade(theme.palette.text.primary, theme.palette.action.hoverOpacity),
          cursor: 'pointer',
          textDecoration: 'none',
          '@media (hover: none)': {
            backgroundColor: 'transparent'
          },
          '& $disabled': {
            backgroundColor: 'transparent'
          }
        },
        '& $disabled': {
          backgroundColor: 'transparent'
        }
      },
      buttonBaseRoot: {
        display: 'inline-flex'
      },
      colorInherit: {
        color: 'inherit',
        borderColor: 'currentColor'
      },
      contained: {
        backgroundColor: theme.palette.grey[300],
        border: `1px solid ${theme.palette.grey[500]}`,
        color: theme.palette.text.primary,
        boxShadow: 'none',
        '&:active': {
          boxShadow: 'none'
        },
        '&:hover': {
          backgroundColor: theme.palette.grey.A100,
          boxShadow: 'none',
          '@media (hover: none)': {
            backgroundColor: theme.palette.grey[300],
            boxShadow: 'none'
          },
          '&$disabled': {
            backgroundColor: theme.palette.action.disabledBackground
          }
        },
        '&$disabled': {
          backgroundColor: theme.palette.action.disabledBackground,
          borderColor: theme.palette.grey[500],
          boxShadow: 'none',
          color: theme.palette.action.disabled
        },
        '&$focusVisible': {
          boxShadow: 'none'
        }
      },
      containedColorError: {
        backgroundColor: fade(theme.palette.error.main, 0.85),
        border: `1px solid ${theme.palette.error.main}`,
        color: theme.palette.error.contrastText,
        '&:hover': {
          backgroundColor: fade(theme.palette.error.main, 0.9),
          '@media (hover: none)': {
            backgroundColor: fade(theme.palette.error.main, 0.85)
          }
        }
      },
      containedColorInfo: {
        backgroundColor: fade(theme.palette.info.main, 0.85),
        border: `1px solid ${theme.palette.info.main}`,
        color: theme.palette.info.contrastText,
        '&:hover': {
          backgroundColor: fade(theme.palette.info.main, 0.9),
          '@media (hover: none)': {
            backgroundColor: fade(theme.palette.info.main, 0.85)
          }
        }
      },
      containedColorPrimary: {
        backgroundColor: fade(theme.palette.primary.main, 0.85),
        border: `1px solid ${theme.palette.primary.main}`,
        color: theme.palette.primary.contrastText,
        '&:hover': {
          backgroundColor: fade(theme.palette.primary.main, 0.9),
          '@media (hover: none)': {
            backgroundColor: fade(theme.palette.primary.main, 0.85)
          }
        }
      },
      containedColorSecondary: {
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.secondary.contrastText,
        '&:hover': {
          backgroundColor: theme.palette.secondary.dark,
          '@media (hover: none)': {
            backgroundColor: theme.palette.secondary.main
          }
        }
      },
      containedColorSuccess: {
        backgroundColor: fade(theme.palette.success.main, 0.85),
        border: `1px solid ${theme.palette.success.main}`,
        color: theme.palette.success.contrastText,
        '&:hover': {
          backgroundColor: fade(theme.palette.success.main, 0.9),
          '@media (hover: none)': {
            backgroundColor: fade(theme.palette.success.main, 0.85)
          }
        }
      },
      containedColorWarning: {
        backgroundColor: fade(theme.palette.warning.main, 0.85),
        border: `1px solid ${theme.palette.warning.main}`,
        color: theme.palette.warning.contrastText,
        '&:hover': {
          backgroundColor: fade(theme.palette.warning.main, 0.9),
          '@media (hover: none)': {
            backgroundColor: fade(theme.palette.warning.main, 0.85)
          }
        }
      },
      containedSizeLg: {
        ...sizeLg
      },
      containedSizeSm: {
        ...sizeSm
      },
      disabled: {},
      elevated: {
        boxShadow: theme.shadows[2],
        '&:hover': {
          boxShadow: theme.shadows[4],
          '@media (hover: none)': {
            boxShadow: theme.shadows[2]
          }
        },
        '&$focusVisible': {
          boxShadow: theme.shadows[6]
        },
        '&:active': {
          boxShadow: theme.shadows[8]
        },
        '&$disabled': {
          boxShadow: theme.shadows[0]
        }
      },
      endIcon: {
        display: 'inline-block',
        fontWeight: theme.typography.fontWeightBold,
        lineHeight: 1,
        marginRight: theme.spacing.unit / -2,
        marginLeft: theme.spacing.unit,
        '&$iconSizeSm': {
          marginRight: theme.spacing.unit / -4
        }
      },
      focusVisible: {},
      fullWidth: {
        width: '100%'
      },
      iconSizeLg: {
        '& > *:first-child': {
          fontSize: '1.375rem'
        }
      },
      iconSizeMd: {
        '& > *:first-child': {
          fontSize: '1.25rem'
        }
      },
      iconSizeSm: {
        '& > *:first-child': {
          fontSize: '1rem'
        }
      },
      label: {
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        width: '100%'
      },
      outlined: {
        border: '1px solid rgba(0, 0, 0, 0.2)',
        '&$disabled': {
          color: theme.palette.text.disabled,
          border: `1px solid ${theme.palette.action.disabled}`
        }
      },
      outlinedColorError: {
        color: theme.palette.error.main,
        border: `1px solid ${fade(theme.palette.error.main, 0.5)}`,
        '&:hover': {
          border: `1px solid ${theme.palette.error.main}`,
          backgroundColor: fade(theme.palette.error.main, theme.palette.action.hoverOpacity),
          '@media (hover: none)': {
            backgroundColor: 'transparent'
          }
        },
        '&$disabled': {
          border: `1px solid ${theme.palette.action.disabled}`
        }
      },
      outlinedColorInfo: {
        color: theme.palette.info.main,
        border: `1px solid ${fade(theme.palette.info.main, 0.5)}`,
        '&:hover': {
          border: `1px solid ${theme.palette.info.main}`,
          backgroundColor: fade(theme.palette.info.main, theme.palette.action.hoverOpacity),
          '@media (hover: none)': {
            backgroundColor: 'transparent'
          }
        },
        '&$disabled': {
          border: `1px solid ${theme.palette.action.disabled}`
        }
      },
      outlinedColorPrimary: {
        color: theme.palette.primary.main,
        border: `1px solid ${fade(theme.palette.primary.main, 0.5)}`,
        '&:hover': {
          border: `1px solid ${theme.palette.primary.main}`,
          backgroundColor: fade(theme.palette.primary.main, theme.palette.action.hoverOpacity),
          '@media (hover: none)': {
            backgroundColor: 'transparent'
          }
        },
        '&$disabled': {
          border: `1px solid ${theme.palette.action.disabled}`
        }
      },
      outlinedColorSecondary: {
        color: theme.palette.secondary.main,
        border: `1px solid ${fade(theme.palette.secondary.main, 0.5)}`,
        '&:hover': {
          border: `1px solid ${theme.palette.secondary.main}`,
          backgroundColor: fade(theme.palette.secondary.main, theme.palette.action.hoverOpacity),
          '@media (hover: none)': {
            backgroundColor: 'transparent'
          }
        },
        '&$disabled': {
          border: `1px solid ${theme.palette.action.disabled}`
        }
      },
      outlinedColorSuccess: {
        color: theme.palette.success.main,
        border: `1px solid ${fade(theme.palette.success.main, 0.5)}`,
        '&:hover': {
          border: `1px solid ${theme.palette.success.main}`,
          backgroundColor: fade(theme.palette.success.main, theme.palette.action.hoverOpacity),
          '@media (hover: none)': {
            backgroundColor: 'transparent'
          }
        },
        '&$disabled': {
          border: `1px solid ${theme.palette.action.disabled}`
        }
      },
      outlinedColorWarning: {
        color: theme.palette.warning.main,
        border: `1px solid ${fade(theme.palette.warning.main, 0.5)}`,
        '&:hover': {
          border: `1px solid ${theme.palette.warning.main}`,
          backgroundColor: fade(theme.palette.warning.main, theme.palette.action.hoverOpacity),
          '@media (hover: none)': {
            backgroundColor: 'transparent'
          }
        },
        '&$disabled': {
          border: `1px solid ${theme.palette.action.disabled}`
        }
      },
      outlinedSizeLg: {
        ...sizeLg
      },
      outlinedSizeSm: {
        ...sizeSm
      },
      passive: {
        backgroundColor: theme.palette.grey[50],
        border: 0,
        color: theme.palette.text.primary,
        boxShadow: theme.shadows[4],
        '&:active': {
          boxShadow: theme.shadows[4]
        },
        '&:hover': {
          backgroundColor: theme.palette.grey[50],
          '&$disabled': {
            backgroundColor: theme.palette.action.disabledBackground
          }
        },
        '&$disabled': {
          backgroundColor: theme.palette.action.disabledBackground,
          boxShadow: 'none',
          color: theme.palette.action.disabled
        },
        '&$focusVisible': {
          boxShadow: theme.shadows[4]
        }
      },
      passiveColorError: {
        color: theme.palette.error.main
      },
      passiveColorInfo: {
        color: theme.palette.info.main
      },
      passiveColorPrimary: {
        color: theme.palette.primary.main
      },
      passiveColorSecondary: {
        color: theme.palette.secondary.main
      },
      passiveColorSuccess: {
        color: theme.palette.success.main
      },
      passiveColorWarning: {
        color: theme.palette.warning.main
      },
      passiveSizeLg: {
        ...sizeLg
      },
      passiveSizeSm: {
        ...sizeSm
      },
      sizeLg: {},
      sizeSm: {},
      startIcon: {
        display: 'inline-block',
        fontWeight: theme.typography.fontWeightBold,
        lineHeight: 1,
        marginLeft: theme.spacing.unit / -2,
        marginRight: theme.spacing.unit,
        '&$iconSizeSm': {
          marginLeft: theme.spacing.unit / -4
        }
      },
      text: {
        border: 0,
        '&:hover': {
          backgroundColor: theme.palette.grey[100]
        }
      },
      textColorError: {
        color: theme.palette.error.main,
        '&:hover': {
          backgroundColor: theme.palette.error.light,
          color: theme.palette.error.dark
        }
      },
      textColorInfo: {
        color: theme.palette.info.main,
        '&:hover': {
          backgroundColor: theme.palette.info.light,
          color: theme.palette.info.dark
        }
      },
      textColorPrimary: {
        color: theme.palette.primary.main,
        '&:hover': {
          backgroundColor: theme.palette.primary.light,
          color: theme.palette.primary.dark
        }
      },
      textColorSecondary: {
        color: theme.palette.secondary.main,
        '&:hover': {
          backgroundColor: theme.palette.secondary.light,
          color: theme.palette.secondary.dark
        }
      },
      textColorSuccess: {
        color: theme.palette.success.main,
        '&:hover': {
          backgroundColor: theme.palette.success.light,
          color: theme.palette.success.dark
        }
      },
      textColorWarning: {
        color: theme.palette.warning.main,
        '&:hover': {
          backgroundColor: theme.palette.warning.light,
          color: theme.palette.warning.dark
        }
      },
      textSizeLg: {
        ...sizeLg
      },
      textSizeSm: {
        ...sizeSm
      }
    },
    'Button'
  );
}

export const ButtonStyleSheetOptions: StyleSheetFactoryOptions = {
  index: 3,
  meta: ButtonClassKey
};

@Component({
  selector: ButtonClassKey,
  encapsulation: ViewEncapsulation.None,
  template: `
    <og-button-base
      [buttonType]="buttonType"
      [className]="composedClasses"
      [classes]="{ root: classes.buttonBaseRoot }"
      [disabled]="disabled"
      [hasParent]="hasParent"
      [link]="link"
      [newTab]="newTab"
      [title]="title"
    >
      <div [class]="classes.label">
        <span [class]="classes.startIcon">
          <og-svg-icon
            *ngIf="startIcon"
            [class]="startIconClasses"
            color="inherit"
            fontSize="inherit"
            [icon]="startIcon"
            viewBox="0 0 24 20"
          >
          </og-svg-icon>
        </span>
        <span>
          <ng-content></ng-content>
        </span>
        <span [class]="classes.endIcon">
          <og-svg-icon *ngIf="endIcon" [class]="endIconClasses" color="inherit" fontSize="inherit" [icon]="endIcon" viewBox="0 0 24 20">
          </og-svg-icon>
        </span>
      </div>
    </og-button-base>
  `
})
export class Button extends Ground implements OnChanges, OnInit {
  @Input() buttonType: ButtonTypeProp = 'button';
  @Input() color: ColorProp = 'default';
  @Input() disabled: DisabledProp = false;
  @Input() disableFocusRipple: DisableFocusRippleProp = false;
  @Input() disableRipple: DisableRippleProp = false;
  @Input() elevated: ElevatedProp = false;
  @Input() endIcon: EndIconProp = '';
  @Input() fullWidth: FullWidthProp = false;
  @Input() hasParent: HasParentProp = false;
  @Input() link: LinkProp = '';
  @Input() newTab: NewTabProp = false;
  @Input() size: SizeProp = 'md';
  @Input() startIcon: StartIconProp = '';
  @Input() title: TitleProp = '';
  @Input() variant: VariantProp = 'outlined';

  public endIconClasses = '';
  public startIconClasses = '';

  constructor() {
    super();
    this.classes = provideClasses(ButtonStyles, ButtonStyleSheetOptions);
  }

  ngOnInit(): void {
    this.prepareComponent();
  }

  ngOnChanges(): void {
    this.prepareComponent();
  }

  prepareComponent(): void {
    this.composeClasses();
    this.composeEndIconClasses();
    this.composeStartIconClasses();
  }

  composeClasses(): void {
    const classes: Array<string | string[]> = [];
    const classyTextSize = this.size !== 'md';
    this.composedClasses = '';
    classes.push(this.classes.root);
    classes.push(this.classes[this.variant]);
    classes.push(this.color === 'inherit' ? this.classes.colorInherit : this.classes[`${this.variant}Color${capitalize(this.color)}`]);
    classes.push(classyTextSize ? this.classes[`${this.variant}Size${capitalize(this.size)}`] : '');
    classes.push(classyTextSize ? this.classes[`size${capitalize(this.size)}`] : '');
    classes.push(this.elevated && this.elevated !== 'false' ? this.classes.elevated : '');
    classes.push(this.disabled && this.disabled !== 'false' ? this.classes.disabled : '');
    classes.push(this.fullWidth && this.fullWidth !== 'false' ? this.classes.fullWidth : '');
    classes.push(this.className);
    const composedClasses = classes.join(' ').trim();
    this.composedClasses = replaceMultipleSpaces(composedClasses);
  }

  composeEndIconClasses(): void {
    this.endIconClasses = this.classes[`iconSize${capitalize(this.size)}`];
  }

  composeStartIconClasses(): void {
    this.startIconClasses = this.classes[`iconSize${capitalize(this.size)}`];
  }
}

const theme = useTheme();
const ButtonStyle = ButtonStyles(theme);

export default ButtonStyle;
