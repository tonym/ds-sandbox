import { Component, Input, OnChanges, OnInit, ViewEncapsulation } from '@angular/core';
import { Styles, StyleSheetFactoryOptions, Theme, TypographyVariants } from '../../types/index';
import { applyOverrides, capitalize, getClassKey, replaceMultipleSpaces } from '../../helpers/index';
import provideClasses from '../../styles/provideClasses/index';
import useTheme from '../../styles/useTheme/index';
import { Ground, GroundProps } from '../Ground/index';
import { TypographyClasses } from '../Typography/index';

type ColorProp = 'error' | 'inherit' | 'primary' | 'secondary' | 'textPrimary' | 'textSecondary';
type DisplayProp = 'block' | 'inline' | 'inlineBlock';
type HasParentProp = boolean | string;
type LinkProp = string;
type NewTabProp = boolean | string;
type TypographyClassesProp = { [k in keyof TypographyClasses]?: string };
type UnderlineProps = 'always' | 'hover' | 'none';

export interface LinkProps extends GroundProps {
  color?: ColorProp;
  display?: DisplayProp;
  hasParent?: HasParentProp;
  link?: LinkProp;
  newTab?: NewTabProp;
  typographyClasses?: TypographyClassesProp;
  underline?: UnderlineProps;
  variant?: TypographyVariants;
}

export const LinkClassKey = getClassKey('link');

export type LinkClasses =
  | 'root'
  | 'colorError'
  | 'colorInherit'
  | 'colorPrimary'
  | 'colorSecondary'
  | 'colorTextPrimary'
  | 'colorTextSecondary'
  | 'displayBlock'
  | 'displayInline'
  | 'displayInlineBlock'
  | 'underlineNone'
  | 'underlineHover'
  | 'underlineAlways';

export function LinkStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      root: {
        cursor: 'pointer'
      },
      colorError: {
        color: theme.palette.error.main
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
      colorTextPrimary: {
        color: theme.palette.text.primary
      },
      colorTextSecondary: {
        color: theme.palette.text.secondary
      },
      displayBlock: {
        display: 'block'
      },
      displayInline: {
        display: 'inline'
      },
      displayInlineBlock: {
        display: 'inline-block'
      },
      underlineAlways: {
        textDecoration: 'underline'
      },
      underlineHover: {
        textDecoration: 'none',
        '&:hover': {
          textDecoration: 'underline'
        }
      },
      underlineNone: {
        textDecoration: 'none'
      }
    },
    'Link'
  );
}

const options: StyleSheetFactoryOptions = {
  index: 2,
  meta: LinkClassKey
};

@Component({
  selector: LinkClassKey,
  encapsulation: ViewEncapsulation.None,
  template: `
    <ng-template #content><ng-content></ng-content></ng-template>
    <og-typography [classes]="typographyClasses" [color]="color" [display]="display" [variant]="variant">
      <ng-container *ngIf="resolvedParent">
        <span [class]="composedClasses">
          <ng-container *ngTemplateOutlet="content"></ng-container>
        </span>
      </ng-container>
      <ng-container *ngIf="!resolvedParent">
        <a [class]="composedClasses" [href]="link" [attr.rel]="newTab ? rel : null" [attr.target]="newTab ? target : null">
          <ng-container *ngTemplateOutlet="content"></ng-container>
        </a>
      </ng-container>
    </og-typography>
  `
})
export class Link extends Ground implements OnChanges, OnInit {
  @Input() color: ColorProp = 'primary';
  @Input() display: DisplayProp = 'inline';
  @Input() hasParent: HasParentProp = false;
  @Input() link: LinkProp = '#';
  @Input() newTab: NewTabProp = false;
  @Input() typographyClasses: TypographyClassesProp = {};
  @Input() underline: UnderlineProps = 'none';
  @Input() variant: TypographyVariants = 'inherit';

  public rel = 'noreferrer noopener';
  public resolvedParent = false;
  public target = '_blank';

  constructor() {
    super();
    this.classes = provideClasses(LinkStyles, options);
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
    const colorClass = this.classes[`color${capitalize(this.color)}`];
    const displayClass = this.classes[`display${capitalize(this.display)}`];
    const underlineClass = this.classes[`underline${capitalize(this.underline)}`];
    const composedClasses = `${this.classes.root} ${colorClass} ${displayClass} ${underlineClass} ${this.className}`.trim();
    this.composedClasses = replaceMultipleSpaces(composedClasses);
  }

  resolveParent(): void {
    this.resolvedParent = this.hasParent && this.hasParent !== 'false' ? true : false;
  }
}

const theme = useTheme();
const LinkStyle = LinkStyles(theme);

export default LinkStyle;
