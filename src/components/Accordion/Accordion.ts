import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import { Styles, StyleSheetFactoryOptions, Theme } from '../../types/index';
import { applyOverrides, getClassKey, replaceMultipleSpaces, transitions } from '../../helpers/index';
import provideClasses from '../../styles/provideClasses/index';
import useTheme from '../../styles/useTheme/index';
import { Ground, GroundProps } from '../Ground/index';

type DefaultExpandedProp = boolean | string;
type ShowControlProp = boolean | string;
type SummaryProp = string;
type SummaryEndIconProp = string;
type SummaryStartIconProp = string;
type SummaryTypographyFontWeightProp = 'bold' | 'inherit' | 'light' | 'medium' | 'regular';
type SummaryTypographyVariantProp = string;
type TitleProp = string;
type TitleEndIconProp = string;
type TitleStartIconProp = string;
type TitleTypographyFontWeightProp = 'bold' | 'inherit' | 'light' | 'medium' | 'regular';
type TitleTypographyVariantProp = string;

export interface AccordionProps extends GroundProps {
  defaultExpanded?: DefaultExpandedProp;
  showControl?: ShowControlProp;
  summary?: SummaryProp;
  summaryEndIcon?: SummaryEndIconProp;
  summaryStartIcon?: SummaryStartIconProp;
  summaryTypographyFontWeight?: SummaryTypographyFontWeightProp;
  summaryTypographyVariant?: SummaryTypographyVariantProp;
  title?: TitleProp;
  titleEndIcon?: TitleEndIconProp;
  titleStartIcon?: TitleStartIconProp;
  titleTypographyFontWeight?: TitleTypographyFontWeightProp;
  titleTypographyVariant?: TitleTypographyVariantProp;
}

export const AccordionClassKey = getClassKey('accordion');

export type AccordionClasses =
  | 'root'
  | 'content'
  | 'contentExpanded'
  | 'control'
  | 'controlExpanded'
  | 'controlShown'
  | 'endIcon'
  | 'flex'
  | 'icon'
  | 'startIcon'
  | 'summary'
  | 'title';

export function AccordionStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      root: {},
      content: {
        maxHeight: 0,
        overflow: 'hidden',
        transition: transitions.create('max-height', { duration: '0.25s' })
      },
      contentExpanded: {
        maxHeight: 2500,
        transition: transitions.create('max-height', { duration: '0.5s', easing: 'ease-in' })
      },
      control: {
        height: 24,
        transition: transitions.create()
      },
      controlExpanded: {
        transform: 'rotate(180deg)'
      },
      controlShown: {
        cursor: 'pointer'
      },
      endIcon: {
        marginLeft: theme.spacing.unit
      },
      flex: {
        color: theme.palette.grey[600],
        paddingBottom: theme.spacing.unit * 2,
        '&:hover': {
          color: theme.palette.primary.main
        }
      },
      icon: {
        verticalAlign: 'bottom'
      },
      startIcon: {
        marginRight: theme.spacing.unit
      },
      summary: {
        '&:hover': {
          color: theme.palette.primary.main
        }
      },
      title: {
        '&:hover': {
          color: theme.palette.primary.main
        }
      }
    },
    'Accordion'
  );
}

const options: StyleSheetFactoryOptions = {
  index: 2,
  meta: AccordionClassKey
};

@Component({
  selector: AccordionClassKey,
  encapsulation: ViewEncapsulation.None,
  template: `
    <div [class]="composedClasses">
      <og-flex (click)="toggle($event)" [className]="classes.flex" justifyContent="spaceBetween">
        <og-flex-child>
          <og-typography
            [className]="classes.title"
            color="textPrimary"
            [fontWeight]="titleTypographyFontWeight"
            [variant]="titleTypographyVariant"
          >
            <og-svg-icon
              *ngIf="titleStartIcon"
              [className]="classes.icon + ' ' + classes.startIcon"
              color="inherit"
              [icon]="titleStartIcon"
            ></og-svg-icon>
            {{ title }}
            <og-svg-icon
              *ngIf="titleEndIcon"
              [className]="classes.icon + ' ' + classes.endIcon"
              color="inherit"
              [icon]="titleEndIcon"
            ></og-svg-icon>
          </og-typography>
        </og-flex-child>
        <og-flex-child flex="0 50%">
          <og-typography
            [className]="classes.summary"
            color="textSecondary"
            [fontWeight]="summaryTypographyFontWeight"
            [variant]="summaryTypographyVariant"
          >
            <og-svg-icon
              *ngIf="summaryStartIcon"
              [className]="classes.icon + ' ' + classes.startIcon"
              color="inherit"
              [icon]="summaryStartIcon"
            ></og-svg-icon>
            {{ summary }}
            <og-svg-icon
              *ngIf="summaryEndIcon"
              [className]="classes.icon + ' ' + classes.endIcon"
              color="inherit"
              [icon]="summaryEndIcon"
            ></og-svg-icon>
          </og-typography>
        </og-flex-child>
        <og-flex-child>
          <div #control [class]="classes.control">
            <og-svg-icon *ngIf="shouldShowControl" color="inherit" icon="expand_more"></og-svg-icon>
          </div>
        </og-flex-child>
      </og-flex>
      <div #content [class]="classes.content">
        <ng-content></ng-content>
      </div>
      <og-divider></og-divider>
    </div>
  `
})
export class Accordion extends Ground implements AfterViewInit, OnChanges, OnInit {
  @Input() defaultExpanded: DefaultExpandedProp = false;
  @Input() showControl: ShowControlProp = true;
  @Input() summary: SummaryProp = '';
  @Input() summaryEndIcon: SummaryEndIconProp = '';
  @Input() summaryStartIcon: SummaryStartIconProp = '';
  @Input() summaryTypographyFontWeight: SummaryTypographyFontWeightProp = 'regular';
  @Input() summaryTypographyVariant: SummaryTypographyVariantProp = 'body2';
  @Input() title: TitleProp = '';
  @Input() titleEndIcon: TitleEndIconProp = '';
  @Input() titleStartIcon: TitleStartIconProp = '';
  @Input() titleTypographyFontWeight: TitleTypographyFontWeightProp = 'medium';
  @Input() titleTypographyVariant: TitleTypographyVariantProp = 'body2';

  @Output() accordionClick: EventEmitter<{ component: string; expanded: boolean; event: Event }> = new EventEmitter();

  @ViewChild('content', { static: false }) public content: ElementRef;
  @ViewChild('control', { static: false }) public control: ElementRef;

  public expanded: boolean;
  public shouldShowControl: boolean;

  constructor(public changeDetector: ChangeDetectorRef) {
    super();
    this.classes = provideClasses(AccordionStyles, options);
  }

  ngOnInit(): void {
    this.prepareComponent();
  }

  ngOnChanges(): void {
    this.prepareComponent();
  }

  ngAfterViewInit(): void {
    this.selectExpansionClasses();
    this.changeDetector.detectChanges();
  }

  prepareComponent(): void {
    this.expanded = this.defaultExpanded && this.defaultExpanded !== 'false' ? true : false;
    this.shouldShowControl = this.showControl && this.showControl !== 'false' ? true : false;
    this.composeClasses();
  }

  composeClasses(): void {
    const showControlClass = this.showControl && this.showControl !== 'false' ? this.classes.controlShown : '';
    const composedClasses = `${this.classes.root} ${showControlClass} ${this.className}`.trim();
    this.composedClasses = replaceMultipleSpaces(composedClasses);
  }

  addExpansionClasses(): void {
    this.content.nativeElement.classList.add(this.classes.contentExpanded);
    this.control.nativeElement.classList.add(this.classes.controlExpanded);
  }

  removeExpansionClasses(): void {
    this.content.nativeElement.classList.remove(this.classes.contentExpanded);
    this.control.nativeElement.classList.remove(this.classes.controlExpanded);
  }

  selectExpansionClasses(): void {
    this.expanded ? this.addExpansionClasses() : this.removeExpansionClasses();
  }

  toggle(event: Event): void {
    if (this.shouldShowControl) {
      this.expanded = !this.expanded;
      this.selectExpansionClasses();
      this.accordionClick.emit({ component: 'Accordion', expanded: this.expanded, event });
    }
  }
}

const theme = useTheme();
const AccordionStyle = AccordionStyles(theme);

export default AccordionStyle;
