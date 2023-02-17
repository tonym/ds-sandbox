import { Component, Input, OnChanges, OnInit, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { Styles, StyleSheetFactoryOptions, Theme } from '../../types/index';
import { applyOverrides, capitalize, getClassKey, replaceMultipleSpaces } from '../../helpers/index';
import provideClasses from '../../styles/provideClasses/index';
import useTheme from '../../styles/useTheme/index';
import { Ground, GroundProps } from '../Ground/index';

type BottomPaddingProp = 'md' | 'sm';
type ColorProp = 'inherit' | 'primary' | 'secondary';
type DisabledProp = boolean | string;
type SelectedProp = boolean | string;
type SidePaddingProp = 'lg' | 'md' | 'sm';
type SizeProp = 'md' | 'sm';
type WrappedProp = boolean | string;

export interface TabProps extends GroundProps {
  bottomPadding?: BottomPaddingProp;
  color?: ColorProp;
  disabled?: DisabledProp;
  selected?: SelectedProp;
  sidePadding?: SidePaddingProp;
  size?: SizeProp;
  wrapped?: WrappedProp;
}

export const TabClassKey = getClassKey('tab');

export type TabClasses =
  | 'root'
  | 'bottomPaddingMd'
  | 'bottomPaddingSm'
  | 'disabled'
  | 'selected'
  | 'selectedInherit'
  | 'selectedPrimary'
  | 'selectedSecondary'
  | 'sidePaddingLg'
  | 'sidePaddingMd'
  | 'sidePaddingSm'
  | 'sizeMd'
  | 'sizeSm'
  | 'wrapped'
  | 'wrapper';

export function TabStyles(theme: Theme): Styles {
  const textStroke = `0.5px ${theme.palette.text.primary}`;
  return applyOverrides(
    {
      root: {
        boxSizing: 'border-box',
        cursor: 'pointer',
        color: theme.palette.text.primary,
        display: 'inline-block',
        flexShrink: 0,
        maxWidth: 264,
        overflow: 'hidden',
        paddingTop: theme.spacing.unit,
        position: 'relative',
        textAlign: 'center',
        whiteSpace: 'normal',
        '&:hover': { textStroke }
      },
      bottomPaddingMd: {
        paddingBottom: theme.spacing.unit * 2
      },
      bottomPaddingSm: {
        paddingBottom: theme.spacing.unit
      },
      disabled: {
        opacity: '0.5'
      },
      selected: {
        marginBottom: -2,
        opacity: 1
      },
      selectedInherit: {
        borderBottom: `3px solid`
      },
      selectedPrimary: {
        borderBottom: `3px solid ${theme.palette.primary.main}`
      },
      selectedSecondary: {
        borderBottom: `3px solid ${theme.palette.secondary.main}`
      },
      sidePaddingLg: {
        paddingLeft: theme.spacing.unit * 5,
        paddingRight: theme.spacing.unit * 5
      },
      sidePaddingMd: {
        paddingLeft: theme.spacing.unit * 3,
        paddingRight: theme.spacing.unit * 3
      },
      sidePaddingSm: {
        paddingLeft: 0,
        paddingRight: 0
      },
      sizeMd: {
        ...theme.typography.variants.h4,
        fontWeight: 'inherit',
        '$selected&': { textStroke }
      },
      sizeSm: {
        ...theme.typography.variants.h5,
        fontWeight: 'inherit',
        '$selected&': { textStroke }
      },
      wrapped: {
        maxWidth: 264
      },
      wrapper: {
        alignItems: 'center',
        display: 'inline-flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '100%'
      }
    },
    'Tab'
  );
}

const options: StyleSheetFactoryOptions = {
  index: 2,
  meta: TabClassKey
};

@Component({
  selector: TabClassKey,
  encapsulation: ViewEncapsulation.None,
  template: `
    <ng-template #tabTemplate>
      <div [className]="composedClasses">
        <span [class]="classes.wrapper">
          <ng-content></ng-content>
        </span>
      </div>
    </ng-template>
    <ng-container [ngTemplateOutlet]="tabTemplate"></ng-container>
  `
})
export class Tab extends Ground implements OnChanges, OnInit {
  @Input() bottomPadding: BottomPaddingProp = 'md';
  @Input() color: ColorProp = 'inherit';
  @Input() disabled: DisabledProp = false;
  @Input() selected: SelectedProp = false;
  @Input() sidePadding: SidePaddingProp = 'md';
  @Input() size: SizeProp = 'md';
  @Input() wrapped: WrappedProp = false;

  @ViewChild('tabTemplate', { static: false }) tabTemplate!: TemplateRef<any>;

  constructor() {
    super();
    this.classes = provideClasses(TabStyles, options);
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
    const bottomPaddingClass = this.classes[`bottomPadding${capitalize(this.bottomPadding)}`];
    const colorClass = this.selected && this.selected !== 'false' ? this.classes[`selected${capitalize(this.color)}`] : '';
    const disabledClass = this.disabled && this.disabled !== 'false' ? this.classes.disabled : '';
    const selectedClass = this.selected && this.selected !== 'false' ? this.classes.selected : '';
    const sidePaddingClass = this.classes[`sidePadding${capitalize(this.sidePadding)}`];
    const sizeClass = this.classes[`size${capitalize(this.size)}`];
    const wrappedClass = this.wrapped && this.wrapped !== 'false' ? this.classes.wrapped : '';
    const composedClasses =
      `${this.classes.root} ${bottomPaddingClass} ${colorClass} ${disabledClass} ${selectedClass} ${sidePaddingClass} ${sizeClass} ${wrappedClass} ${this.className}`.trim();
    this.composedClasses = replaceMultipleSpaces(composedClasses);
  }
}

const theme = useTheme();
const TabStyle = TabStyles(theme);

export default TabStyle;
