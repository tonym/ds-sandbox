import {
  AfterViewInit,
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
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { Classes, Styles, StyleSheet, StyleSheetFactoryOptions, Theme, TypographyVariants } from '../../types/index';
import { applyOverrides, capitalize, getClassKey, replaceMultipleSpaces } from '../../helpers/index';
import provideClasses from '../../styles/provideClasses/index';
import { ButtonProps } from '../Button/index';
import { Ground, GroundProps } from '../Ground/index';
import provideStylesheet from '../../styles/provideStylesheet/index';
import useTheme from '../../styles/useTheme/index';
import { TypographyProps } from '../Typography/index';

type ClassNameProp = string | string[];
type ContentProp = string;
type ControlLabelLessProp = string;
type ControlLabelMoreProp = string;
type ControlTypeProp = 'button' | 'typography';
type ForceClampProp = boolean | string;
type HeightProp = number | string;
type OverlayProp = boolean | string;
type WhiteSpaceProp = 'breakSpaces' | 'normal' | 'nowrap' | 'pre' | 'preLine' | 'preWrap';

export interface LineClampButtonProps extends ButtonProps {
  endIconLess?: string;
  endIconMore?: string;
  startIconLess?: string;
  startIconMore?: string;
}

export interface LineClampProps extends GroundProps {
  content?: ContentProp;
  contentTypographyVariant?: TypographyVariants;
  controlButtonClassName?: ClassNameProp;
  controlButtonProps?: LineClampButtonProps;
  controlLabelLess?: ControlLabelLessProp;
  controlLabelMore?: ControlLabelMoreProp;
  controlType?: ControlTypeProp;
  controlTypographyClassName?: ClassNameProp;
  controlTypographyProps?: TypographyProps;
  forceClamp?: ForceClampProp;
  height?: HeightProp;
  overlay?: OverlayProp;
  whiteSpace?: WhiteSpaceProp;
}

export const LineClampDefaultButtonProps: LineClampButtonProps = {
  color: 'default',
  disabled: false,
  fullWidth: false,
  size: 'sm',
  buttonType: 'button',
  variant: 'text'
};

export const LineClampDefaultTypographyProps: TypographyProps = {
  align: 'inherit',
  color: 'secondary',
  display: 'block',
  gutterBottom: false,
  noWrap: false,
  paragraph: false,
  variant: 'inherit'
};

export const LineClampClassKey = getClassKey('line-clamp');

export type LineClampClasses =
  | 'root'
  | 'clamped'
  | 'overlay'
  | 'whiteSpaceBreakSpaces'
  | 'whiteSpaceNormal'
  | 'whiteSpaceNoWrap'
  | 'whiteSpacePre'
  | 'whiteSpacePreLine'
  | 'whiteSpacePreWrap';

export function LineClampStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      root: {
        display: 'inline-block'
      },
      clamped: {
        position: 'relative',
        overflow: 'hidden',
        wordBreak: 'break-word'
      },
      overlay: {
        '&:after': {
          backgroundImage: 'linear-gradient(0deg, white 0, rgba(255, 255, 255, 0.4) 100%)',
          bottom: 0,
          content: '""',
          display: 'block',
          height: theme.spacing.unit * 4,
          left: 0,
          position: 'absolute',
          width: '100%'
        }
      },
      whiteSpaceNormal: {
        whiteSpace: 'normal'
      },
      whiteSpaceNorap: {
        whiteSpace: 'nowrap'
      },
      whiteSpacePre: {
        whiteSpace: 'pre'
      },
      whiteSpacePreWrap: {
        whiteSpace: 'pre-wrap'
      },
      whiteSpacePreLine: {
        whiteSpace: 'pre-line'
      },
      whiteSpaceBreakSpaces: {
        whiteSpace: 'break-spaces'
      }
    },
    'LineClamp'
  );
}

const options: StyleSheetFactoryOptions = {
  index: 3,
  meta: LineClampClassKey
};

@Component({
  selector: LineClampClassKey,
  encapsulation: ViewEncapsulation.None,
  template: `
    <ng-container>
      <span [class]="composedClasses" #clampedElement>
        <og-typography [variant]="contentTypographyVariant" display="block">
          <span [class]="whiteSpaceClass" [innerHTML]="content" *ngIf="content"></span>
          <span [class]="whiteSpaceClass" *ngIf="!content">
            <ng-content></ng-content>
          </span>
        </og-typography>
      </span>
      <ng-container *ngIf="useClamp">
        <og-typography
          *ngIf="controlType === 'typography'"
          [className]="[controlTypographyClassName, 'control']"
          [align]="controlTypographyProps.align"
          [color]="controlTypographyProps.color"
          [display]="controlTypographyProps.display"
          [gutterBottom]="controlTypographyProps.gutterBottom"
          [noWrap]="controlTypographyProps.noWrap"
          [paragraph]="controlTypographyProps.paragraph"
          [variant]="controlTypographyProps.variant"
        >
          <span role="button" draggable="false">
            <og-link className="og-line-clamp-link" (click)="toggleClamp($event)" color="inherit" hasParent="true">{{
              clampControlLabel
            }}</og-link>
          </span>
        </og-typography>
        <og-button
          *ngIf="controlType === 'button'"
          [buttonType]="controlButtonProps.buttonType"
          (click)="toggleClamp($event)"
          [className]="[controlButtonClassName, 'og-line-clamp-button control']"
          [color]="controlButtonProps.color"
          [disabled]="controlButtonProps.disabled"
          [endIcon]="controlButtonEndIcon"
          [fullWidth]="controlButtonProps.fullWidth"
          [size]="controlButtonProps.size"
          [startIcon]="controlButtonStartIcon"
          [variant]="controlButtonProps.variant"
        >
          {{ clampControlLabel }}
        </og-button>
      </ng-container>
    </ng-container>
  `
})
export class LineClamp extends Ground implements AfterViewInit, OnChanges, OnInit {
  @Input() content: ContentProp = '';
  @Input() contentTypographyVariant: TypographyVariants = 'inherit';
  @Input() controlButtonClassName: ClassNameProp = '';
  @Input('controlButtonProps')
  set controlButtonProps(value: LineClampButtonProps) {
    this._controlButtonProps = { ...LineClampDefaultButtonProps, ...value };
  }
  get controlButtonProps(): LineClampButtonProps {
    return this._controlButtonProps;
  }
  @Input() controlLabelLess: ControlLabelLessProp = 'Less';
  @Input() controlLabelMore: ControlLabelMoreProp = 'More';
  @Input() controlType: ControlTypeProp = 'typography';
  @Input() controlTypographyClassName: ClassNameProp = '';
  @Input('controlTypographyProps')
  set controlTypographyProps(value: TypographyProps) {
    this._controlTypographyProps = { ...LineClampDefaultTypographyProps, ...value };
  }
  get controlTypographyProps(): TypographyProps {
    return this._controlTypographyProps;
  }
  @Input() forceClamp: ForceClampProp = false;
  @Input() height: HeightProp = 136;
  @Input() overlay: OverlayProp = true;
  @Input() whiteSpace: WhiteSpaceProp = 'normal';

  @Output() lineClampClick: EventEmitter<{ component: string; clamped: boolean; event: Event }> = new EventEmitter();

  @ViewChild('clampedElement', { static: false }) public clampedElement!: ElementRef;

  public clampControlLabel = '';
  public controlButtonEndIcon = '';
  public controlButtonStartIcon = '';
  public heightClass = '';
  public useClamp = true;
  public whiteSpaceClass = '';

  private subscriptions: Array<Subscription> = [];
  private _controlButtonProps: LineClampButtonProps = { ...LineClampDefaultButtonProps };
  private _controlTypographyProps: TypographyProps = { ...LineClampDefaultTypographyProps };

  constructor() {
    super();
    this.classes = provideClasses(LineClampStyles, options);
  }

  ngOnInit(): void {
    this.prepareComponent();
    this.clampControlLabel = this.controlLabelMore;
    this.controlButtonEndIcon = this.controlButtonProps.endIconMore || this.controlButtonProps.endIcon || '';
    this.controlButtonStartIcon = this.controlButtonProps.startIconMore || this.controlButtonProps.startIcon || '';
  }

  ngOnChanges(): void {
    this.prepareComponent();
  }

  ngAfterViewInit(): void {
    setTimeout(() => this.shouldUseClamp());
    this.subscriptions.push(
      fromEvent(window, 'resize')
        .pipe(debounceTime(300))
        .subscribe(() => {
          this.shouldUseClamp();
        })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription: Subscription): void => {
      subscription.unsubscribe();
    });
  }

  prepareComponent(): void {
    this.composeClasses();
  }

  composeClasses(): void {
    this.createHeightStyleSheet();
    const overlayClass = this.overlay && this.overlay !== 'false' ? this.classes.overlay : '';
    this.whiteSpaceClass = this.classes[`whiteSpace${capitalize(this.whiteSpace)}`];
    const composedClasses = `${this.classes.root} ${this.classes.clamped} ${overlayClass} ${this.heightClass} ${this.className}`.trim();
    this.composedClasses = replaceMultipleSpaces(composedClasses);
  }

  createHeightStyleSheet(): void {
    const heightOptions: StyleSheetFactoryOptions = { ...options, meta: `${LineClampClassKey}-height-${this.height}` };
    const heightClass = `height${this.height}`;
    const heightStyles = {
      [heightClass]: {
        maxHeight: `${this.height}px`
      }
    };
    const heightSheet: StyleSheet = provideStylesheet(heightStyles, heightOptions);
    const heightClasses: Classes = { ...heightSheet.classes };
    this.heightClass = heightClasses[heightClass];
  }

  addClamp(): void {
    const { classList } = this.clampedElement.nativeElement;
    classList.add(this.classes.clamped);
    classList.add(this.heightClass);
    this.overlay && this.overlay !== 'false' ? classList.add(this.classes.overlay) : null;
    this.clampControlLabel = this.controlLabelMore;
    this.controlButtonEndIcon = this.controlButtonProps.endIconMore || this.controlButtonProps.endIcon || '';
    this.controlButtonStartIcon = this.controlButtonProps.startIconMore || this.controlButtonProps.startIcon || '';
  }

  checkClampHeight(): boolean {
    const clientHeight = this.selectClientHeight();
    const scrollHeight = this.selectScrollHeight();
    return scrollHeight > clientHeight + 1;
  }

  removeClamp(): void {
    const { classList } = this.clampedElement.nativeElement;
    classList.remove(this.classes.clamped);
    classList.remove(this.heightClass);
    classList.remove(this.classes.overlay);
    this.clampControlLabel = this.controlLabelLess;
    this.controlButtonEndIcon = this.controlButtonProps.endIconLess || this.controlButtonProps.endIcon || '';
    this.controlButtonStartIcon = this.controlButtonProps.startIconLess || this.controlButtonProps.startIcon || '';
  }

  resetClamp(): void {
    this.useClamp = true;
    this.clampControlLabel = this.controlLabelMore;
    this.addClamp();
  }

  selectClientHeight(): number {
    return this.clampedElement.nativeElement.clientHeight;
  }

  selectScrollHeight(): number {
    return this.clampedElement.nativeElement.scrollHeight;
  }

  shouldUseClamp(): void {
    this.resetClamp();
    this.useClamp = this.forceClamp && this.forceClamp !== 'false' ? true : this.checkClampHeight();
    this.useClamp ? null : this.removeClamp();
  }

  toggleClamp(event): void {
    const clamped = this.clampedElement.nativeElement.classList.contains(this.classes.clamped);
    clamped ? this.removeClamp() : this.addClamp();
    this.lineClampClick.emit({ component: 'LineClamp', clamped, event });
  }
}

const theme = useTheme();
const LineClampStyle = LineClampStyles(theme);

export default LineClampStyle;
