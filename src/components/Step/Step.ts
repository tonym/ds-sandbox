import { Component, Input, OnChanges, OnInit, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { applyOverrides, getClassKey, replaceMultipleSpaces } from '../../helpers/index';
import { Styles, StyleSheetFactoryOptions, Theme } from '../../types/index';
import { Ground, GroundProps } from '../Ground/index';
import provideClasses from '../../styles/provideClasses/index';
import useTheme from '../../styles/useTheme/index';

type CompletedProp = boolean | string;
type DisabledProp = boolean | string;
type ExpandedProp = boolean | string;
type FullWidthProp = boolean | string;
type SelectedProp = boolean | string;

export interface StepProps extends GroundProps {
  completed?: CompletedProp;
  disabled?: DisabledProp;
  expanded?: ExpandedProp;
  fullWidth?: FullWidthProp;
  selected?: SelectedProp;
}

export const StepClassKey = getClassKey('step');

export type StepClasses = 'root' | 'alternativeLabel' | 'completed' | 'horizontal' | 'vertical';

export function StepStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      root: {},
      alternativeLabel: {
        flex: 1,
        position: 'relative'
      },
      completed: {},
      fullWidth: {
        width: '100%'
      },
      horizontal: {
        paddingLeft: theme.spacing.unit,
        paddingRight: theme.spacing.unit
      },
      vertical: {}
    },
    'Step'
  );
}

const options: StyleSheetFactoryOptions = {
  index: 2,
  meta: StepClassKey
};

@Component({
  selector: StepClassKey,
  encapsulation: ViewEncapsulation.None,
  template: `
    <ng-template #stepTemplate>
      <div [class]="composedClasses">
        <ng-content></ng-content>
      </div>
    </ng-template>
    <ng-container [ngTemplateOutlet]="stepTemplate"></ng-container>
  `
})
export class Step extends Ground implements OnChanges, OnInit {
  @Input() completed: CompletedProp = false;
  @Input() disabled: DisabledProp = false;
  @Input() expanded: ExpandedProp = false;
  @Input() fullWidth: FullWidthProp = false;
  @Input() selected: SelectedProp = false;

  @ViewChild('stepTemplate', { static: false }) stepTemplate!: TemplateRef<any>;

  constructor() {
    super();
    this.classes = provideClasses(StepStyles, options);
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
    this.composedClasses = '';
    const completedClass = this.completed && this.completed !== 'false' ? this.classes.completed : '';
    const fullWidthClass = this.fullWidth && this.fullWidth !== 'false' ? this.classes.fullWidth : '';
    const composedClasses = `${this.classes.root} ${completedClass} ${fullWidthClass} ${this.className}`.trim();
    this.composedClasses = replaceMultipleSpaces(composedClasses);
  }
}

const theme = useTheme();
const StepStyle = StepStyles(theme);

export default StepStyle;
