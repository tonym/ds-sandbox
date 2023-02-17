import { Component, Input, OnChanges, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Subscription } from 'rxjs';
import { Classes, Styles, StyleSheet, StyleSheetFactoryOptions, Theme } from '../../types/index';
import { applyOverrides, breakpoints, getClassKey, replaceMultipleSpaces } from '../../helpers/index';
import provideClasses from '../../styles/provideClasses/index';
import provideStylesheet from '../../styles/provideStylesheet/index';
import useTheme from '../../styles/useTheme/index';
import { Ground, GroundProps } from '../Ground/index';

type DownProp = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type OnlyProp = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type UpProp = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type VariantProp = 'css' | 'js';

export interface HiddenProps extends GroundProps {
  down?: DownProp;
  only?: OnlyProp;
  up?: UpProp;
  variant?: VariantProp;
}

export const HiddenClassKey = getClassKey('hidden');

export type HiddenClasses = 'root';

export function HiddenStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      root: {
        display: 'inline-block',
        position: 'relative'
      }
    },
    'Hidden'
  );
}

const options: StyleSheetFactoryOptions = {
  index: 2,
  meta: HiddenClassKey
};

@Component({
  selector: HiddenClassKey,
  encapsulation: ViewEncapsulation.None,
  template: `
    <ng-template #content><ng-content></ng-content></ng-template>
    <span *ngIf="variant === 'js' && !shouldBeHidden" [class]="composedClasses">
      <ng-container *ngTemplateOutlet="content"></ng-container>
    </span>
    <span *ngIf="variant === 'css'" [class]="composedClasses">
      <ng-container *ngTemplateOutlet="content"></ng-container>
    </span>
  `
})
export class Hidden extends Ground implements OnChanges, OnDestroy, OnInit {
  @Input() down: DownProp;
  @Input() only: OnlyProp;
  @Input() up: UpProp;
  @Input() variant: VariantProp = 'js';

  breakpointClass = '';
  breakpoints: string[] = [];
  breakpointChanges: Subscription;
  shouldBeHidden = true;
  theme: Theme = useTheme();

  constructor(private breakpointObserver: BreakpointObserver) {
    super();
    this.classes = provideClasses(HiddenStyles, options);
  }

  ngOnInit(): void {
    this.prepareComponent();
  }

  ngOnChanges(): void {
    this.prepareComponent();
  }

  ngOnDestroy(): void {
    this.unsubscribeLayoutChanges();
  }

  prepareComponent(): void {
    this.composeBreakpoints();
    this.subscribeLayoutChanges();
    this.composeClasses();
  }

  composeClasses(): void {
    this.breakpointClass = this.variant === 'css' ? this.selectBreakpointClass() : '';
    const composedClasses = `${this.classes.root} ${this.breakpointClass} ${this.className}`.trim();
    this.composedClasses = replaceMultipleSpaces(composedClasses);
  }

  composeBreakpoints(): void {
    const withAtRule = this.variant === 'css' ? true : false;
    this.breakpoints.length = 0;
    this.breakpoints.push(this.down ? breakpoints.down(this.down, withAtRule) : '');
    this.breakpoints.push(this.only ? breakpoints.only(this.only, withAtRule) : '');
    this.breakpoints.push(this.up ? breakpoints.up(this.up, withAtRule) : '');
    this.breakpoints = this.breakpoints.filter(breakpoint => breakpoint);
  }

  subscribeLayoutChanges(): void {
    if (this.variant === 'js') {
      this.unsubscribeLayoutChanges();
      if (this.breakpoints.length) {
        this.breakpointChanges = this.breakpointObserver.observe(this.breakpoints).subscribe((state: BreakpointState): void => {
          this.shouldBeHidden = state.matches;
        });
      }
    }
  }

  unsubscribeLayoutChanges(): void {
    if (this.breakpointChanges) {
      this.breakpointChanges.unsubscribe();
    }
  }

  selectBreakpointClass(): string {
    const breakpointRules: Styles = this.createBreakpointRules();
    const breakpointOptions: StyleSheetFactoryOptions = { classNamePrefix: `${HiddenClassKey}-` };
    const breakpointClass = 'hidden';
    const breakpointSheet: StyleSheet = provideStylesheet({ [breakpointClass]: { ...breakpointRules } }, breakpointOptions);
    const breakpointClasses: Classes = { ...breakpointSheet.classes };
    return breakpointClasses[breakpointClass];
  }

  createBreakpointRules(): Styles {
    const breakpointRules = {};
    this.breakpoints.forEach((breakpoint): void => {
      breakpointRules[breakpoint] = { display: 'none' };
    });
    return breakpointRules;
  }
}

const theme = useTheme();
const HiddenStyle = HiddenStyles(theme);

export default HiddenStyle;
