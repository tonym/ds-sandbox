import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  OnChanges,
  OnInit,
  QueryList,
  ViewEncapsulation,
  Input
} from '@angular/core';
import { Styles, StyleSheetFactoryOptions, Theme } from '../../types/index';
import { applyOverrides, getClassKey, replaceMultipleSpaces } from '../../helpers/index';
import provideClasses from '../../styles/provideClasses/index';
import useTheme from '../../styles/useTheme/index';
import { Ground, GroundProps } from '../Ground/index';
import { Step } from '../Step/index';

type AlternativeLabelProp = boolean | string;
type NonLinearProp = boolean | string;
type OrientationProp = 'horizontal' | 'vertical';
type SelectedStepProp = number | string;

export interface StepperProps extends GroundProps {
  alternativeLabel?: AlternativeLabelProp;
  nonLinear?: NonLinearProp;
  orientation?: OrientationProp;
  selectedStep?: SelectedStepProp;
}

export const StepperClassKey = getClassKey('stepper');

export type StepperClasses = 'root' | 'alternativeLabel' | 'horizontal' | 'vertical';

export function StepperStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      root: {
        display: 'flex',
        padding: theme.spacing.unit * 3
      },
      alternativeLabel: {
        alignItems: 'flex-start'
      },
      horizontal: {
        flexDirection: 'row',
        alignItems: 'center'
      },
      vertical: {
        flexDirection: 'column'
      }
    },
    'Stepper'
  );
}

const options: StyleSheetFactoryOptions = {
  index: 3,
  meta: StepperClassKey
};

@Component({
  selector: StepperClassKey,
  encapsulation: ViewEncapsulation.None,
  template: `
    <og-paper [className]="composedClasses" [square]="true" [elevation]="0">
      <ng-container *ngFor="let step of steps; let i = index">
        <ng-container *ngIf="i === selectedStep">
          <ng-template [ngTemplateOutlet]="step.stepTemplate"></ng-template>
        </ng-container>
      </ng-container>
    </og-paper>
  `
})
export class Stepper extends Ground implements AfterViewInit, OnChanges, OnInit {
  @Input() alternativeLabel: AlternativeLabelProp = false;
  @Input() nonLinear: NonLinearProp = false;
  @Input() orientation: OrientationProp = 'horizontal';
  @Input() selectedStep: SelectedStepProp = 0;

  @ContentChildren(Step) steps: QueryList<Step>;

  constructor(public changeDetector: ChangeDetectorRef) {
    super();
    this.classes = provideClasses(StepperStyles, options);
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

  ngAfterViewInit(): void {
    this.changeDetector.detectChanges();
  }

  composeClasses(): void {
    this.composedClasses = '';
    const alternativeLabelClass = this.alternativeLabel && this.alternativeLabel !== 'false' ? this.classes.alternativeLabel : '';
    const orientationClass = this.classes[this.orientation];
    const composedClasses = `${this.classes.root} ${alternativeLabelClass} ${orientationClass} ${this.className}`.trim();
    this.composedClasses = replaceMultipleSpaces(composedClasses);
  }
}

const theme = useTheme();
const StepperStyle = StepperStyles(theme);

export default StepperStyle;
