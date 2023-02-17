import {
  AfterViewChecked,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  QueryList,
  ViewEncapsulation
} from '@angular/core';
import { Styles, StyleSheetFactoryOptions, Theme } from '../../types/index';
import { applyOverrides, capitalize, getClassKey, replaceMultipleSpaces } from '../../helpers/index';
import provideClasses from '../../styles/provideClasses/index';
import useTheme from '../../styles/useTheme/index';
import { Ground, GroundProps } from '../Ground/index';
import { Tab } from '../Tab/index';

type ActiveTabProp = string | number;
type AriaLabelProp = string;
type AriaLabelledbyProp = string;
type CenteredProp = boolean | string;
type ColorProp = 'inherit' | 'primary' | 'secondary';
type SelfSelectProp = boolean | string;

export interface TabsProps extends GroundProps {
  activeTab?: ActiveTabProp;
  ariaLabel?: AriaLabelProp;
  ariaLabeledBy?: AriaLabelledbyProp;
  centered?: CenteredProp;
  color?: ColorProp;
  selfSelect?: SelfSelectProp;
}

export const TabsClassKey = getClassKey('tabs');

export type TabsClasses =
  | 'root'
  | 'centered'
  | 'indicator'
  | 'indicatorColorInherit'
  | 'indicatorColorPrimary'
  | 'indicatorColorSecondary'
  | 'selected';

export function TabsStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      root: {
        display: 'flex',
        overflow: 'hidden',
        position: 'relative'
      },
      centered: {
        justifyContent: 'center'
      },
      indicator: {
        height: 3,
        position: 'absolute',
        bottom: 0,
        transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'
      },
      indicatorColorInherit: {
        backgroundColor: 'inherit'
      },
      indicatorColorPrimary: {
        backgroundColor: theme.palette.primary.main
      },
      indicatorColorSecondary: {
        backgroundColor: theme.palette.secondary.main
      },
      selected: {
        display: 'inline-block',
        '& div': {
          textStroke: `0.5px ${theme.palette.text.primary}`
        }
      }
    },
    'Tabs'
  );
}

const options: StyleSheetFactoryOptions = {
  index: 2,
  meta: TabsClassKey
};

@Component({
  selector: TabsClassKey,
  encapsulation: ViewEncapsulation.None,
  template: `
    <div
      id="tabs-root"
      [class]="composedClasses"
      [attr.aria-label]="ariaLabel ? ariaLabel : null"
      [attr.aria-labelledby]="ariaLabelledby ? ariaLabelledby : null"
    >
      <div id="variant-container" [class]="composedVariantClass" *ngFor="let tab of tabs; let i = index">
        <div class="tab-container" [id]="'tab-container-' + i">
          <span *ngIf="i === activeTab" (click)="selectTab(i)" [id]="'tab-' + i" [class]="classes.selected">
            <ng-template [ngTemplateOutlet]="tab.tabTemplate"></ng-template>
          </span>
          <span *ngIf="i !== activeTab" (click)="selectTab(i)">
            <ng-template [ngTemplateOutlet]="tab.tabTemplate"></ng-template>
          </span>
        </div>
      </div>
      <div [class]="composedIndicatorClass" [style]="indicatorStyle"></div>
    </div>
  `
})
export class Tabs extends Ground implements AfterViewChecked, OnChanges, OnInit {
  @Input() activeTab: ActiveTabProp = -1;
  @Input() ariaLabel: AriaLabelProp = '';
  @Input() ariaLabelledby: AriaLabelledbyProp = '';
  @Input() centered: CenteredProp = false;
  @Input() color: ColorProp = 'primary';
  @Input() selfSelect: SelfSelectProp = true;

  @Output() tabClick: EventEmitter<{ component: string; activeTab: number }> = new EventEmitter();

  composedIndicatorClass = '';
  composedVariantClass = '';

  indicatorStyle = '';

  @ContentChildren(Tab) tabs: QueryList<Tab>;

  constructor(public changeDetector: ChangeDetectorRef, public element: ElementRef) {
    super();
    this.classes = provideClasses(TabsStyles, options);
  }

  ngOnInit(): void {
    this.prepareComponent();
  }

  ngOnChanges(): void {
    this.prepareComponent();
  }

  ngAfterViewChecked(): void {
    this.composeIndicatorStyle();
    this.changeDetector.detectChanges();
  }

  prepareComponent(): void {
    this.composeClasses();
    this.composeIndicatorClass();
    this.activeTab = +this.activeTab;
  }

  composeClasses(): void {
    const centeredClass = this.centered && this.centered !== 'false' ? this.classes.centered : '';
    const composedClasses = `${this.classes.root} ${centeredClass} ${this.className}`.trim();
    this.composedClasses = replaceMultipleSpaces(composedClasses);
  }

  composeIndicatorClass(): void {
    const indicatorColorClass = this.classes[`indicatorColor${capitalize(this.color)}`];
    this.composedIndicatorClass = `${this.classes.indicator} ${indicatorColorClass}`;
  }

  composeIndicatorStyle(): void {
    const indicatorElementRef = this.element.nativeElement;
    if (indicatorElementRef) {
      const activeTab = this.activeTab > -1 ? indicatorElementRef.querySelector(`div#tab-container-${this.activeTab}`) : undefined;
      const indicatorWidth = activeTab ? activeTab.offsetWidth : 0;
      const indicatorLeft = activeTab ? activeTab.offsetLeft : 0;
      this.indicatorStyle = `left: ${indicatorLeft}px; width: ${indicatorWidth}px;`;
    }
  }

  selectTab(tab: number): void {
    if (this.selfSelect && this.selfSelect !== 'false') {
      this.activeTab = tab;
      this.tabClick.emit({ component: 'Tabs', activeTab: this.activeTab });
    }
    this.changeDetector.detectChanges();
  }
}

const theme = useTheme();
const TabsStyle = TabsStyles(theme);

export default TabsStyle;
