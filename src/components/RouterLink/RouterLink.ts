import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Styles, StyleSheetFactoryOptions, TypographyVariants, Theme } from '../../types/index';
import { applyOverrides, arrayify, capitalize, getClassKey, replaceMultipleSpaces } from '../../helpers/index';
import WithStyles from '../../styles/withStyles/index';
import useTheme from '../../styles/useTheme/index';
import { Ground, GroundProps } from '../Ground/index';
import { TypographyClasses } from '../Typography/index';

type ColorProp = 'error' | 'inherit' | 'primary' | 'secondary' | 'textPrimary' | 'textSecondary';
type DisplayProp = 'initial' | 'block' | 'inline';
type FragmentProp = string;
type LinkProp = string | any[];
type PreserveFragmentProp = boolean;
type QueryParamsProp = { [k: string]: any };
type ReplaceUrlProp = boolean;
type SkipLocationChangeProp = boolean;
type StateProp = { [k: string]: any };
type TypographyClassesProp = { [k in keyof TypographyClasses]?: string };
type UnderlineProps = 'always' | 'hover' | 'none';

export interface RouterLinkProps extends GroundProps {
  color?: ColorProp;
  display?: DisplayProp;
  fragment?: FragmentProp;
  link?: LinkProp;
  preserveFragment?: PreserveFragmentProp;
  queryParams?: QueryParamsProp;
  replaceUrl?: ReplaceUrlProp;
  skipLocationChange?: SkipLocationChangeProp;
  state?: StateProp;
  typographyClasses?: TypographyClassesProp;
  underline?: UnderlineProps;
  variant?: TypographyVariants;
}

export const RouterLinkClassKey = getClassKey('router-link');

export type RouterLinkClasses = 'root' | 'underlineNone' | 'underlineHover' | 'underlineAlways';

export function RouterLinkStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      root: {},
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
    'RouterLink'
  );
}

const options: StyleSheetFactoryOptions = {
  index: 2,
  meta: RouterLinkClassKey
};

@Component({
  selector: RouterLinkClassKey,
  encapsulation: ViewEncapsulation.None,
  template: `
    <og-typography [classes]="typographyClasses" [color]="color" [display]="display" [variant]="variant">
      <a
        [class]="composedClasses"
        [routerLink]="link"
        [preserveFragment]="preserveFragment"
        [queryParams]="queryParams"
        [replaceUrl]="replaceUrl"
        [skipLocationChange]="skipLocationChange"
        [state]="state"
      >
        <ng-content></ng-content>
      </a>
    </og-typography>
  `
})
@WithStyles(RouterLinkStyles, options)
export class RouterLink extends Ground implements OnInit {
  @Input() color: ColorProp = 'primary';
  @Input() display: DisplayProp = 'inline';
  @Input('link')
  set link(value: LinkProp) {
    this._link = arrayify(value);
  }
  get link(): LinkProp {
    return this._link;
  }
  @Input() preserveFragment: PreserveFragmentProp = false;
  @Input() queryParams: QueryParamsProp = {};
  @Input() replaceUrl: ReplaceUrlProp = false;
  @Input() skipLocationChange: SkipLocationChangeProp = false;
  @Input() state: StateProp = {};
  @Input() typographyClasses: TypographyClassesProp = {};
  @Input() underline: UnderlineProps = 'hover';
  @Input() variant: TypographyVariants = 'inherit';

  private _link: LinkProp = ['/'];

  ngOnInit(): void {
    this.composeClasses();
  }

  composeClasses(): void {
    this.composedClasses = '';
    const underlineClass = this.classes[`underline${capitalize(this.underline)}`];
    const composedClasses = `${this.classes.root} ${underlineClass} ${this.className}`.trim();
    this.composedClasses = replaceMultipleSpaces(composedClasses);
  }
}

const theme = useTheme();
const RouterLinkStyle = RouterLinkStyles(theme);

export default RouterLinkStyle;
