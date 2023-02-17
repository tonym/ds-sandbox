import { Component, ElementRef, EventEmitter, OnChanges, OnInit, Output, ViewEncapsulation, Input } from '@angular/core';
import { Styles, StyleSheetFactoryOptions, Theme } from '../../types/index';
import { applyOverrides, getClassKey } from '../../helpers/index';
import provideClasses from '../../styles/provideClasses/index';
import useTheme from '../../styles/useTheme/index';
import { Ground, GroundProps } from '../Ground/index';

export type ShouldHandleProp = boolean | string;

export interface ClickAwayListenerProps extends GroundProps {
  shouldHandle?: ShouldHandleProp;
}

export const ClickAwayListenerClassKey = getClassKey('click-away-listener');

export type ClickAwayListenerClasses = 'root';

export function ClickAwayListenerStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      root: {}
    },
    'ClickAwayListener'
  );
}

const options: StyleSheetFactoryOptions = {
  index: 2,
  meta: ClickAwayListenerClassKey
};

@Component({
  selector: ClickAwayListenerClassKey,
  encapsulation: ViewEncapsulation.None,
  template: `
    <span [class]="composedClasses" (document:click)="handleClick($event)" (window:keydown.esc)="handleEscape($event)">
      <ng-content></ng-content>
    </span>
  `
})
export class ClickAwayListener extends Ground implements OnChanges, OnInit {
  @Input() shouldHandle: ShouldHandleProp = true;
  @Output() clickAwayListenerClick: EventEmitter<{ component: string; source: string; event: Event }> = new EventEmitter();

  constructor(private elementRef: ElementRef) {
    super();
    this.classes = provideClasses(ClickAwayListenerStyles, options);
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
    this.composedClasses = `${this.classes.root} ${this.className}`.trim();
  }

  handleClick(event: Event): void {
    if (this.checkShouldHandle()) {
      const element = this.elementRef.nativeElement;
      if (!element.contains(event.target) && this.isVisible()) {
        this.clickAwayListenerClick.emit({ component: 'ClickAwayListener', source: 'document:click', event });
      }
    }
  }

  handleEscape(event: Event): void {
    if (this.checkShouldHandle() && this.isVisible()) {
      this.clickAwayListenerClick.emit({ component: 'ClickAwayListener', source: 'window:esc', event });
    }
  }

  checkShouldHandle(): boolean {
    return this.shouldHandle && this.shouldHandle !== 'false' ? true : false;
  }

  isVisible(): boolean {
    return this.elementRef.nativeElement.offsetParent !== null;
  }
}

const theme = useTheme();
const ClickAwayListenerStyle = ClickAwayListenerStyles(theme);

export default ClickAwayListenerStyle;
