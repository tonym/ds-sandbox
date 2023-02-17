import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, ViewEncapsulation } from '@angular/core';
import { Styles, StyleSheetFactoryOptions, Theme, TypographyVariants } from '../../types/index';
import { applyOverrides, capitalize, getClassKey, replaceMultipleSpaces } from '../../helpers/index';
import provideClasses from '../../styles/provideClasses/index';
import useTheme from '../../styles/useTheme/index';
import { Ground, GroundProps } from '../Ground/index';

type AlignProp = 'inherit' | 'left' | 'center' | 'right' | 'justify';
type ColorProp = 'error' | 'info' | 'inherit' | 'primary' | 'secondary' | 'success' | 'textPrimary' | 'textSecondary' | 'warning';
type DisplayProp = 'block' | 'inherit' | 'initial' | 'inline' | 'inlineBlock';
type ElementProp = 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | undefined;
type ElementMapProp = { [key in TypographyVariants]: ElementProp };
type FontWeightProp = 'bold' | 'inherit' | 'light' | 'medium' | 'regular' | undefined;
type GutterBottomProp = boolean | string;
type NoWrapProp = boolean | string;
type ParagraphProp = boolean | string;

export interface TypographyProps extends GroundProps {
  align?: AlignProp;
  color?: ColorProp;
  display?: DisplayProp;
  element?: ElementProp;
  elementMap?: ElementMapProp;
  fontWeight?: FontWeightProp;
  gutterBottom?: GutterBottomProp;
  noWrap?: NoWrapProp;
  paragraph?: ParagraphProp;
  variant?: TypographyVariants;
}

export const TypographyElementMap: ElementMapProp = {
  body1: 'p',
  body2: 'p',
  button: 'span',
  caption: 'span',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  inherit: 'span',
  overline: 'span',
  srOnly: 'span',
  subtitle1: 'h6',
  subtitle2: 'h6'
};

export const TypographyClassKey = getClassKey('typography');

export type TypographyClasses =
  | 'root'
  | 'alignCenter'
  | 'alignInherit'
  | 'alignJustify'
  | 'alignLeft'
  | 'alignRight'
  | 'colorError'
  | 'colorInfo'
  | 'colorInherit'
  | 'colorPrimary'
  | 'colorSecondary'
  | 'colorSuccess'
  | 'colorWarning'
  | 'colorTextPrimary'
  | 'colorTextSecondary'
  | 'displayBlock'
  | 'displayInherit'
  | 'displayInitial'
  | 'displayInline'
  | 'displayInlineBlock'
  | 'fontWeightBlack'
  | 'fontWeightBold'
  | 'fontWeightExtraBold'
  | 'fontWeightExtraLight'
  | 'fontWeightInherit'
  | 'fontWeightLight'
  | 'fontWeightMedium'
  | 'fontWeightRegular'
  | 'fontWeightSemiBold'
  | 'fontWeightThin'
  | 'gutterBottom'
  | 'noWrap'
  | 'paragraph'
  | 'srOnly'
  | TypographyVariants;

export function TypographyStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      ...theme.typography.variants,
      root: {
        margin: 0
      },
      alignCenter: {
        textAlign: 'center'
      },
      alignInherit: {
        textAlign: 'inherit'
      },
      alignJustify: {
        textAlign: 'justify'
      },
      alignLeft: {
        textAlign: 'left'
      },
      alignRight: {
        textAlign: 'right'
      },
      colorError: {
        color: theme.palette.error.main
      },
      colorInfo: {
        color: theme.palette.info.main
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
      colorSuccess: {
        color: theme.palette.success.main
      },
      colorTextPrimary: {
        color: theme.palette.text.primary
      },
      colorTextSecondary: {
        color: theme.palette.text.secondary
      },
      colorWarning: {
        color: theme.palette.warning.main
      },
      displayBlock: {
        display: 'block'
      },
      displayInherit: {
        display: 'inherit'
      },
      displayInitial: {
        display: 'initial'
      },
      displayInline: {
        display: 'inline'
      },
      displayInlineBlock: {
        display: 'inline-block'
      },
      fontWeightBold: {
        fontWeight: theme.typography.fontWeightBold
      },
      fontWeightInherit: {
        fontWeight: 'inherit'
      },
      fontWeightLight: {
        fontWeight: theme.typography.fontWeightLight
      },
      fontWeightMedium: {
        fontWeight: theme.typography.fontWeightMedium
      },
      fontWeightRegular: {
        fontWeight: theme.typography.fontWeightRegular
      },
      gutterBottom: {
        marginBottom: '0.35em'
      },
      noWrap: {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      },
      paragraph: {
        marginBottom: theme.spacing.unit * 2
      }
    },
    'Typography'
  );
}

const options: StyleSheetFactoryOptions = {
  index: 2,
  meta: TypographyClassKey
};

@Component({
  selector: TypographyClassKey,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ng-template #content><ng-content></ng-content></ng-template>
    <ng-container [ngSwitch]="element">
      <div [class]="composedClasses" *ngSwitchCase="'div'"><ng-container *ngTemplateOutlet="content"></ng-container></div>
      <h1 [class]="composedClasses" *ngSwitchCase="'h1'"><ng-container *ngTemplateOutlet="content"></ng-container></h1>
      <h2 [class]="composedClasses" *ngSwitchCase="'h2'"><ng-container *ngTemplateOutlet="content"></ng-container></h2>
      <h3 [class]="composedClasses" *ngSwitchCase="'h3'"><ng-container *ngTemplateOutlet="content"></ng-container></h3>
      <h4 [class]="composedClasses" *ngSwitchCase="'h4'"><ng-container *ngTemplateOutlet="content"></ng-container></h4>
      <h5 [class]="composedClasses" *ngSwitchCase="'h5'"><ng-container *ngTemplateOutlet="content"></ng-container></h5>
      <h6 [class]="composedClasses" *ngSwitchCase="'h6'"><ng-container *ngTemplateOutlet="content"></ng-container></h6>
      <p [class]="composedClasses" *ngSwitchCase="'p'"><ng-container *ngTemplateOutlet="content"></ng-container></p>
      <span [class]="composedClasses" *ngSwitchDefault><ng-container *ngTemplateOutlet="content"></ng-container></span>
    </ng-container>
  `
})
export class TypographyComponent extends Ground implements OnChanges, OnInit {
  @Input() align: AlignProp = 'inherit';
  @Input() color: ColorProp = 'textPrimary';
  @Input() display: DisplayProp = 'block';
  @Input() element: ElementProp;
  @Input() elementMap: ElementMapProp = TypographyElementMap;
  @Input() fontWeight: FontWeightProp;
  @Input() gutterBottom: GutterBottomProp = false;
  @Input() noWrap: NoWrapProp = false;
  @Input() paragraph: ParagraphProp = false;
  @Input() variant: TypographyVariants = 'body1';

  constructor() {
    super();
    this.classes = provideClasses(TypographyStyles, options);
  }

  ngOnInit(): void {
    this.prepareComponent();
  }

  ngOnChanges(): void {
    this.prepareComponent();
  }

  prepareComponent(): void {
    this.composeClasses();
    this.selectElement();
  }

  composeClasses(): void {
    this.composedClasses = '';
    this.display = this.paragraph || this.gutterBottom ? 'block' : this.display;
    const align = this.classes[`align${capitalize(this.align)}`];
    const color = this.classes[`color${capitalize(this.color)}`];
    const display = this.classes[`display${capitalize(this.display)}`];
    const fontWeight = this.fontWeight ? this.classes[`fontWeight${capitalize(this.fontWeight)}`] : '';
    const noWrap = this.noWrap && this.noWrap !== 'false' ? this.classes.noWrap : '';
    const paragraph = this.getParagraphClass();
    const variantClass = this.classes[this.variant];
    const composedClasses = `${this.classes.root}
      ${variantClass} ${align} ${color} ${display} ${fontWeight} ${noWrap} ${paragraph} ${this.className}`.trim();
    this.composedClasses = replaceMultipleSpaces(composedClasses);
  }

  getParagraphClass(): string {
    let ret = '';
    if (this.paragraph && this.paragraph !== 'false') {
      ret = this.classes.paragraph;
    } else if (this.gutterBottom && this.gutterBottom !== 'false') {
      ret = this.classes.gutterBottom;
    }
    return ret;
  }

  selectElement(): void {
    this.element = this.element ? this.element : this.elementMap[this.variant];
  }
}

const theme = useTheme();
const TypographyStyle = TypographyStyles(theme);

export default TypographyStyle;
