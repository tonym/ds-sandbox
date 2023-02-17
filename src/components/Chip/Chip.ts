import { Component, EventEmitter, Input, OnChanges, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { Styles, StyleSheetFactoryOptions, Theme } from '../../types/index';
import { applyOverrides, capitalize, fade, getClassKey, replaceMultipleSpaces } from '../../helpers/index';
import provideClasses from '../../styles/provideClasses/index';
import useTheme from '../../styles/useTheme/index';
import { Ground, GroundProps } from '../Ground/index';

type clickableProp = boolean | string;
type colorProp = 'dark' | 'error' | 'info' | 'light' | 'primary' | 'secondary' | 'success' | 'warning';
type disabledProp = boolean | string;
type deletableProp = boolean | string;
type iconProp = string | undefined;
type outlinedProp = boolean | string;
type sizeProp = 'md' | 'sm';
type squareProp = boolean | string;
type uppercaseProp = boolean | string;

export interface ChipProps extends GroundProps {
  clickable?: clickableProp;
  color?: colorProp;
  deletable?: deletableProp;
  disabled?: disabledProp;
  icon?: iconProp;
  outlined?: outlinedProp;
  square?: squareProp;
  uppercase?: uppercaseProp;
}

export const ChipClassKey = getClassKey('chip');

export type ChipClasses =
  | 'root'
  | 'clickable'
  | 'colorSolidDark'
  | 'colorSolidError'
  | 'colorSolidInfo'
  | 'colorSolidLight'
  | 'colorSolidPrimary'
  | 'colorSolidSecondary'
  | 'colorSolidSuccess'
  | 'colorSolidWarning'
  | 'colorOutlinedDark'
  | 'colorOutlinedError'
  | 'colorOutlinedInfo'
  | 'colorOutlinedLight'
  | 'colorOutlinedPrimary'
  | 'colorOutlinedSecondary'
  | 'colorOutlinedSuccess'
  | 'colorOutlinedWarning'
  | 'deleteIcon'
  | 'deleteIconColor'
  | 'deleteIconColorLight'
  | 'disabled'
  | 'icon'
  | 'label'
  | 'labelSm'
  | 'sm'
  | 'square'
  | 'uppercase';

export function ChipStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      root: {
        ...theme.typography.variants.caption,
        alignItems: 'center',
        backgroundColor: 'transparent',
        border: 'none',
        borderRadius: 25,
        boxSizing: 'border-box',
        cursor: 'default',
        display: 'inline-flex',
        fontSize: '1rem',
        fontWeight: 500,
        height: 'auto',
        padding: '2px 8px',
        transition: 'background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        whiteSpace: 'nowrap'
      },
      clickable: {
        cursor: 'pointer',
        userSelect: 'none',
        WebkitTapHighlightColor: 'transparent',
        '&:hover, &:focus': {
          boxShadow: theme.shadows[1]
        },
        '&:active': {
          boxShadow: theme.shadows[1]
        }
      },
      colorSolidDark: {
        backgroundColor: theme.palette.grey[700],
        color: theme.palette.common.white
      },
      colorSolidError: {
        backgroundColor: theme.palette.error.main,
        color: theme.palette.error.contrastText
      },
      colorSolidInfo: {
        backgroundColor: theme.palette.info.main,
        color: theme.palette.info.contrastText
      },
      colorSolidLight: {
        backgroundColor: theme.palette.grey[400],
        color: theme.palette.text.primary
      },
      colorSolidPrimary: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText
      },
      colorSolidSecondary: {
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.secondary.contrastText
      },
      colorSolidSuccess: {
        backgroundColor: theme.palette.success.main,
        color: theme.palette.success.contrastText
      },
      colorSolidWarning: {
        backgroundColor: theme.palette.warning.main,
        color: theme.palette.warning.contrastText
      },
      colorOutlinedDark: {
        border: `1px solid ${theme.palette.grey[700]}`,
        color: theme.palette.text.primary
      },
      colorOutlinedError: {
        border: `1px solid ${theme.palette.error.main}`,
        color: theme.palette.error.main
      },
      colorOutlinedInfo: {
        border: `1px solid ${theme.palette.info.main}`,
        color: theme.palette.info.main
      },
      colorOutlinedLight: {
        border: `1px solid ${theme.palette.grey[400]}`,
        color: theme.palette.text.primary
      },
      colorOutlinedPrimary: {
        border: `1px solid ${theme.palette.primary.main}`,
        color: theme.palette.primary.main
      },
      colorOutlinedSecondary: {
        border: `1px solid ${theme.palette.secondary.main}`,
        color: theme.palette.secondary.main
      },
      colorOutlinedSuccess: {
        border: `1px solid ${theme.palette.success.main}`,
        color: theme.palette.success.main
      },
      colorOutlinedWarning: {
        border: `1px solid ${theme.palette.warning.main}`,
        color: theme.palette.warning.main
      },
      deleteIcon: {
        cursor: 'pointer',
        marginLeft: 6,
        marginRight: -4,
        verticalAlign: 'text-top'
      },
      deleteIconColor: {
        '&:hover': {
          opacity: 1
        }
      },
      deleteIconColorLight: {
        '&:hover': {
          opacity: 0.65
        }
      },
      deleteIconSizeMd: {
        fontSize: '1.375rem ! important'
      },
      deleteIconSizeSm: {
        fontSize: '1.125rem ! important'
      },
      disabled: {
        opacity: '0.5',
        pointerEvents: 'none'
      },
      icon: {
        display: 'inline-block',
        marginLeft: -4,
        marginRight: 6,
        verticalAlign: 'text-top'
      },
      iconSizeMd: {
        fontSize: '1.375rem ! important'
      },
      iconSizeSm: {
        fontSize: '1.125rem ! important'
      },
      label: {
        overflow: 'hidden',
        paddingLeft: 12,
        paddingRight: 12,
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      },
      labelSm: {
        overflow: 'hidden',
        paddingLeft: 8,
        paddingRight: 8,
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      },
      sm: {
        fontSize: 12,
        fontWeight: 500,
        height: 'auto',
        padding: `2px 8px`
      },
      square: {
        borderRadius: 0
      },
      uppercase: {
        textTransform: 'uppercase'
      }
    },
    'Chip'
  );
}

const options: StyleSheetFactoryOptions = {
  index: 2,
  meta: ChipClassKey
};

@Component({
  selector: ChipClassKey,
  encapsulation: ViewEncapsulation.None,
  template: `
    <div [class]="composedClasses">
      <og-svg-icon *ngIf="icon" [className]="composedIconClasses" color="inherit" fontSize="inherit" [icon]="icon"></og-svg-icon>
      <span>
        <ng-content></ng-content>
      </span>
      <og-svg-icon
        *ngIf="isDeletable"
        (click)="delete($event)"
        [className]="composedDeleteIconClasses"
        color="inherit"
        fontSize="inherit"
        icon="close"
      ></og-svg-icon>
    </div>
  `
})
export class Chip extends Ground implements OnChanges, OnInit {
  @Input() clickable: clickableProp = false;
  @Input() color: colorProp = 'light';
  @Input() deletable: deletableProp = false;
  @Input() disabled: disabledProp = false;
  @Input() icon: iconProp = '';
  @Input() outlined: outlinedProp = false;
  @Input() size: sizeProp = 'md';
  @Input() square: squareProp = false;
  @Input() uppercase: uppercaseProp = false;

  @Output() deleteClick: EventEmitter<{ component: string; delete: boolean; event: Event }> = new EventEmitter();

  public composedDeleteIconClasses = '';
  public composedIconClasses = '';
  public isDeletable = false;

  constructor() {
    super();
    this.classes = provideClasses(ChipStyles, options);
  }

  ngOnInit(): void {
    this.prepareComponent();
  }

  ngOnChanges(): void {
    this.prepareComponent();
  }

  prepareComponent(): void {
    this.isDeletable = this.deletable && this.deletable !== 'false' ? true : false;
    this.composeClasses();
    this.composeDeleteIconClasses();
    this.composeIconClasses();
  }

  composeClasses(): void {
    this.composedClasses = '';
    const clickableClass = this.clickable && this.clickable !== 'false' ? this.classes.clickable : '';
    const colorClass =
      this.outlined && this.outlined !== 'false'
        ? this.classes[`colorOutlined${capitalize(this.color)}`]
        : this.classes[`colorSolid${capitalize(this.color)}`];
    const disabledClass = this.disabled && this.disabled !== 'false' ? this.classes.disabled : '';
    const labelClass = this.size === 'sm' ? this.classes.labelSm : this.classes.label;
    const sizeClass = this.size === 'sm' ? this.classes.sm : '';
    const squareClass = this.square && this.square !== 'false' ? this.classes.square : '';
    const uppercaseClass = this.uppercase && this.uppercase !== 'false' ? this.classes.uppercase : '';
    const composedClasses = `${this.classes.root} ${clickableClass} ${colorClass} ${disabledClass} ${labelClass} ${sizeClass} ${squareClass} ${uppercaseClass} ${this.className}`;
    this.composedClasses = replaceMultipleSpaces(composedClasses);
  }

  composeDeleteIconClasses(): void {
    if (this.isDeletable) {
      const deleteIconColorClass = this.color === 'light' ? this.classes.deleteIconColorLight : this.classes.deleteIconColor;
      const deleteIconSizeClass = this.classes[`deleteIconSize${capitalize(this.size)}`];
      const composedDeleteIconClasses = `${this.classes.deleteIcon} ${deleteIconColorClass} ${deleteIconSizeClass}`.trim();
      this.composedDeleteIconClasses = replaceMultipleSpaces(composedDeleteIconClasses);
    }
  }

  composeIconClasses(): void {
    const iconSizeClass = this.classes[`iconSize${capitalize(this.size)}`];
    const composedIconClasses = `${this.classes.icon} ${iconSizeClass}`.trim();
    this.composedIconClasses = replaceMultipleSpaces(composedIconClasses);
  }
  delete(event: Event): void {
    this.deleteClick.emit({ component: 'Chip', delete: true, event });
  }
}

const theme = useTheme();
const ChipStyle = ChipStyles(theme);

export default ChipStyle;
