import { Component, OnChanges, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Styles, StyleSheetFactoryOptions, Theme } from '../../types/index';
import { applyOverrides, getClassKey, replaceMultipleSpaces } from '../../helpers/index';
import provideClasses from '../../styles/provideClasses/index';
import useTheme from '../../styles/useTheme/index';
import { Ground, GroundProps } from '../Ground/index';

type ButtonTypeProp = 'button' | 'reset' | 'submit';
type DisabledProp = boolean | string;
type HasParentProp = boolean | string;
type LinkProp = string;
type NewTabProp = boolean | string;
type TitleProp = string;

export interface ButtonBaseProps extends GroundProps {
  buttonType?: ButtonTypeProp;
  disabled?: DisabledProp;
  hasParent?: HasParentProp;
  link?: LinkProp;
  newTab?: NewTabProp;
  title?: TitleProp;
}

export const ButtonBaseClassKey = getClassKey('button-base');

export type ButtonBaseClasses = 'root';

export function ButtonBaseStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      root: {
        alignItems: 'center',
        backgroundColor: 'transparent',
        border: 0,
        borderRadius: 0,
        color: 'inherit',
        cursor: 'pointer',
        display: 'inline-flex',
        fontFamily: theme.typography.fontFamily,
        justifyContent: 'center',
        margin: 0,
        outline: 0,
        padding: 0,
        position: 'relative',
        userSelect: 'none',
        verticalAlign: 'middle',
        WebkitTapHighlightColor: 'transparent',
        textDecoration: 'none',
        '-moz-appearance': 'none',
        '-webkit-appearance': 'none',
        '&::-moz-focus-inner': {
          borderStyle: 'none'
        },
        '&$disabled': {
          pointerEvents: 'none',
          cursor: 'default'
        }
      },
      disabled: {},
      focusVisible: {}
    },
    'ButtonBase'
  );
}

const options: StyleSheetFactoryOptions = {
  index: 2,
  meta: ButtonBaseClassKey
};

@Component({
  selector: ButtonBaseClassKey,
  encapsulation: ViewEncapsulation.None,
  template: `
    <ng-template #content><ng-content></ng-content></ng-template>
    <ng-container *ngIf="resolvedParent">
      <span [class]="composedClasses">
        <ng-container *ngTemplateOutlet="content"></ng-container>
      </span>
    </ng-container>
    <ng-container *ngIf="!resolvedParent">
      <button *ngIf="!link" [class]="composedClasses" [type]="buttonType" [disabled]="disabled" [attr.title]="title ? title : null">
        <ng-container *ngTemplateOutlet="content"></ng-container>
      </button>
      <a *ngIf="link" [class]="composedClasses" [href]="link" [attr.rel]="newTab ? rel : null" [attr.target]="newTab ? target : null">
        <ng-container *ngTemplateOutlet="content"></ng-container>
      </a>
    </ng-container>
  `
})
export class ButtonBase extends Ground implements OnChanges, OnInit {
  @Input() buttonType: ButtonTypeProp = 'button';
  @Input() disabled: DisabledProp = false;
  @Input() hasParent: HasParentProp = false;
  @Input() link: LinkProp = '';
  @Input() newTab: NewTabProp = false;
  @Input() title: TitleProp = '';

  public rel = 'noreferrer noopener';
  public resolvedParent = false;
  public target = '_blank';

  constructor() {
    super();
    this.classes = provideClasses(ButtonBaseStyles, options);
  }

  ngOnInit(): void {
    this.prepareComponent();
  }

  ngOnChanges(): void {
    this.prepareComponent();
  }

  prepareComponent(): void {
    this.composeClasses();
    this.resolveParent();
  }

  composeClasses(): void {
    this.composedClasses = '';
    const disabledClass = this.disabled && this.disabled !== 'false' ? this.classes.disabled : '';
    const composedClasses = `${this.classes.root} ${disabledClass} ${this.className}`.trim();
    this.composedClasses = replaceMultipleSpaces(composedClasses);
  }

  resolveParent(): void {
    this.resolvedParent = this.hasParent && this.hasParent !== 'false' ? true : false;
  }
}

const theme = useTheme();
const ButtonBaseStyle = ButtonBaseStyles(theme);

export default ButtonBaseStyle;
