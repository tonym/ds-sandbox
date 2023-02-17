import { Component, HostBinding, Input, OnChanges, OnInit, ViewEncapsulation } from '@angular/core';
import { applyOverrides, capitalize, getClassKey, replaceMultipleSpaces } from '../../helpers/index';
import { Classes, CSSProperties, Styles, StyleSheet, StyleSheetFactoryOptions, Theme } from '../../types/index';
import provideStylesheet from '../../styles/provideStylesheet/index';
import provideClasses from '../../styles/provideClasses/index';
import useTheme from '../../styles/useTheme/index';
import { Ground, GroundProps } from '../Ground/index';

type AlignSelfProp = CSSProperties['alignSelf'];
type FlexBasisProp = CSSProperties['flexBasis'];
type FlexGrowProp = CSSProperties['flexGrow'];
type FlexProp = CSSProperties['flex'];
type FlexShrinkProp = CSSProperties['flexShrink'];
type OrderProp = CSSProperties['order'];

export interface FlexChildProps extends GroundProps {
  alignSelf?: AlignSelfProp;
  flex?: FlexProp;
  flexBasis?: FlexBasisProp;
  flexGrow?: FlexGrowProp;
  flexShrink?: FlexShrinkProp;
  order?: OrderProp;
}

export const FlexChildClassKey = getClassKey('flex-child');

export type FlexChildClasses =
  | 'root'
  | 'alignSelfAuto'
  | 'alignSelfBaseline'
  | 'alignSelfCenter'
  | 'alignSelfFlexEnd'
  | 'alignSelfFlexStart'
  | 'alignSelfStretch';

export function FlexChildStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      root: {},
      alignSelfAuto: {
        alignSelf: 'auto'
      },
      alignSelfBaseline: {
        alignSelf: 'baseline'
      },
      alignSelfCenter: {
        alignSelf: 'center'
      },
      alignSelfFlexEnd: {
        alignSelf: 'flex-end'
      },
      alignSelfFlexStart: {
        alignSelf: 'flex-start'
      },
      alignSelfStretch: {
        alignSelf: 'stretch'
      }
    },
    'FlexChild'
  );
}

const options: StyleSheetFactoryOptions = {
  index: 2,
  meta: FlexChildClassKey
};

@Component({
  selector: FlexChildClassKey,
  encapsulation: ViewEncapsulation.None,
  template: `
    <div [class]="composedClasses">
      <ng-content></ng-content>
    </div>
  `
})
export class FlexChild extends Ground implements OnChanges, OnInit {
  @Input() alignSelf: AlignSelfProp = 'auto';
  @Input() flex: FlexProp = undefined;
  @Input() flexBasis: FlexBasisProp = undefined;
  @Input() flexGrow: FlexGrowProp = undefined;
  @Input() flexShrink: FlexShrinkProp = undefined;
  @Input() order: OrderProp = undefined;

  public flexBasisClass = '';
  public flexClass = '';
  public flexGrowClass = '';
  public flexShrinkClass = '';
  public orderClass = '';

  @HostBinding('class') composedClasses = '';

  constructor() {
    super();
    this.classes = provideClasses(FlexChildStyles, options);
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
    const alignSelf = this.classes[`alignSelf${capitalize(this.alignSelf)}`];
    this.flexBasisClass = this.flexBasis ? this.selectFlexBasis() : '';
    this.flexClass = this.flex ? this.selectFlex() : '';
    this.flexGrowClass = this.flexGrow ? this.selectFlexGrow() : '';
    this.flexShrinkClass = this.flexShrink ? this.selectFlexShrink() : '';
    this.orderClass = this.order ? this.selectOrder() : '';
    const composedClasses = `${this.classes.root} ${alignSelf} ${this.flexClass}
      ${this.flexBasisClass} ${this.flexGrowClass} ${this.flexShrinkClass} ${this.orderClass} ${this.className}`.trim();
    this.composedClasses = replaceMultipleSpaces(composedClasses);
  }

  selectFlex(): string {
    const encodedFlex = encodeURIComponent(`${this.flex}`);
    const flexOptions: StyleSheetFactoryOptions = { ...options, meta: `${FlexChildClassKey}-flex-${encodedFlex}` };
    const flexClass = `flex${encodedFlex}`;
    const flexSheet: StyleSheet = provideStylesheet({ [flexClass]: { flex: this.flex } }, flexOptions);
    const flexClasses: Classes = { ...flexSheet.classes };
    return flexClasses[flexClass];
  }

  selectFlexBasis(): string {
    const flexBasisOptions: StyleSheetFactoryOptions = { ...options, meta: `${FlexChildClassKey}-flex-basis-${this.flexBasis}` };
    const flexBasisClass = `flexBasis${this.flexBasis}`;
    const flexBasisSheet: StyleSheet = provideStylesheet({ [flexBasisClass]: { flexBasis: this.flexBasis } }, flexBasisOptions);
    const flexBasisClasses: Classes = { ...flexBasisSheet.classes };
    return flexBasisClasses[flexBasisClass];
  }

  selectFlexGrow(): string {
    const flexGrowOptions: StyleSheetFactoryOptions = { ...options, meta: `${FlexChildClassKey}-flex-grow-${this.flexGrow}` };
    const flexGrowClass = `flexGrow${this.flexGrow}`;
    const flexGrowSheet: StyleSheet = provideStylesheet({ [flexGrowClass]: { flexGrow: this.flexGrow } }, flexGrowOptions);
    const flexGrowClasses: Classes = { ...flexGrowSheet.classes };
    return flexGrowClasses[flexGrowClass];
  }

  selectFlexShrink(): string {
    const flexShrinkOptions: StyleSheetFactoryOptions = { ...options, meta: `${FlexChildClassKey}-flex-shrink-${this.flexShrink}` };
    const flexShrinkClass = `flexShrink${this.flexShrink}`;
    const flexShrinkSheet: StyleSheet = provideStylesheet({ [flexShrinkClass]: { flexShrink: this.flexShrink } }, flexShrinkOptions);
    const flexShrinkClasses: Classes = { ...flexShrinkSheet.classes };
    return flexShrinkClasses[flexShrinkClass];
  }

  selectOrder(): string {
    const orderOptions: StyleSheetFactoryOptions = { ...options, meta: `${FlexChildClassKey}-order-${this.order}` };
    const orderClass = `order${this.order}`;
    const orderSheet: StyleSheet = provideStylesheet({ [orderClass]: { order: this.order } }, orderOptions);
    const orderClasses: Classes = { ...orderSheet.classes };
    return orderClasses[orderClass];
  }
}

const theme = useTheme();
const FlexChildStyle = FlexChildStyles(theme);

export default FlexChildStyle;
