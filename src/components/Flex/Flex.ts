import { Component, Input, OnChanges, OnInit, ViewEncapsulation } from '@angular/core';
import { applyOverrides, capitalize, getClassKey, replaceMultipleSpaces } from '../../helpers/index';
import { Classes, CSSProperties, Styles, StyleSheet, StyleSheetFactoryOptions, Theme } from '../../types/index';
import provideStylesheet from '../../styles/provideStylesheet/index';
import provideClasses from '../../styles/provideClasses/index';
import useTheme from '../../styles/useTheme/index';
import { Ground, GroundProps } from '../Ground/index';

type AlignContentProp = CSSProperties['alignContent'];
type AlignItemsProp = CSSProperties['alignItems'];
type FlexDirectionProp = CSSProperties['flexDirection'];
type FlexWrapProp = CSSProperties['flexWrap'];
type GapProp = CSSProperties['gap'];
type JustifyContentProp = CSSProperties['justifyContent'];

export interface FlexProps extends GroundProps {
  alignContent?: AlignContentProp;
  alignItems?: AlignItemsProp;
  flexDirection?: FlexDirectionProp;
  flexWrap?: FlexWrapProp;
  gap?: GapProp;
  justifyContent?: JustifyContentProp;
}

export const FlexClassKey = getClassKey('flex');

export type FlexClasses =
  | 'root'
  | 'alignContentCenter'
  | 'alignContentFlexEnd'
  | 'alginContentFlexStart'
  | 'alignContentSpaceAround'
  | 'alignContentSpaceBetween'
  | 'alignContentStretch'
  | 'alignItemsBaseline'
  | 'alignItemsCenter'
  | 'alignItemsFlexEnd'
  | 'alignItemsFlexStart'
  | 'alignItemsStretch'
  | 'flexDirectionColumn'
  | 'flexDirectionColumnReverse'
  | 'flexDirectionRow'
  | 'flexDirectionRowReverse'
  | 'flexWrapNoWrap'
  | 'flexWrapWrap'
  | 'flexWrapWrapReverse'
  | 'justifyContentCenter'
  | 'justifyContentFlexEnd'
  | 'justifyContentFlexStart'
  | 'justifyContentSpaceAround'
  | 'justifyContentSpaceBetween'
  | 'justifyContentSpaceEvenly';

export function FlexStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      root: {
        display: 'flex'
      },
      alignContentCenter: {
        alignContent: 'center'
      },
      alignContentFlexEnd: {
        alignContent: 'flex-end'
      },
      alignContentFlexStart: {
        alignContent: 'flex-start'
      },
      alignContentSpaceAround: {
        alignContent: 'space-around'
      },
      alignContentSpaceBetween: {
        alignContent: 'space-between'
      },
      alignContentStretch: {
        alignContent: 'stretch'
      },
      alignItemsBaseline: {
        alignItems: 'baseline'
      },
      alignItemsCenter: {
        alignItems: 'center'
      },
      alignItemsFlexEnd: {
        alignItems: 'flex-end'
      },
      alignItemsFlexStart: {
        alignItems: 'flex-start'
      },
      alignItemsStretch: {
        alignItems: 'stretch'
      },
      flexDirectionColumn: {
        flexDirection: 'column'
      },
      flexDirectionColumnReverse: {
        flexDirection: 'column-reverse'
      },
      flexDirectionRow: {
        flexDirection: 'row'
      },
      flexDirectionRowReverse: {
        flexDirection: 'row-reverse'
      },
      flexWrapNowrap: {
        flexWrap: 'nowrap'
      },
      flexWrapWrap: {
        flexWrap: 'wrap'
      },
      flexWrapWrapReverse: {
        flexWrap: 'wrap-reverse'
      },
      justifyContentCenter: {
        justifyContent: 'center'
      },
      justifyContentFlexEnd: {
        justifyContent: 'flex-end'
      },
      justifyContentFlexStart: {
        justifyContent: 'flex-start'
      },
      justifyContentSpaceAround: {
        justifyContent: 'space-around'
      },
      justifyContentSpaceBetween: {
        justifyContent: 'space-between'
      },
      justifyContentSpaceEvenly: {
        justifyContent: 'space-evenly'
      }
    },
    'Flex'
  );
}

const options: StyleSheetFactoryOptions = {
  index: 2,
  meta: FlexClassKey
};

@Component({
  selector: FlexClassKey,
  encapsulation: ViewEncapsulation.None,
  template: `
    <div [class]="composedClasses">
      <ng-content></ng-content>
    </div>
  `
})
export class Flex extends Ground implements OnChanges, OnInit {
  @Input() alignContent: AlignContentProp = 'flexStart';
  @Input() alignItems: AlignItemsProp = 'stretch';
  @Input() flexDirection: FlexDirectionProp = 'row';
  @Input() flexWrap: FlexWrapProp = 'nowrap';
  @Input() gap: GapProp = 0;
  @Input() justifyContent: JustifyContentProp = 'flexStart';

  gapClass = '';

  constructor() {
    super();
    this.classes = provideClasses(FlexStyles, options);
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
    const alignContent = this.classes[`alignContent${capitalize(this.alignContent)}`];
    const alignItems = this.classes[`alignItems${capitalize(this.alignItems)}`];
    const flexDirection = this.classes[`flexDirection${capitalize(this.flexDirection)}`];
    const flexWrap = this.classes[`flexWrap${capitalize(this.flexWrap)}`];
    this.gapClass = this.gap ? this.selectGap() : '';
    const justifyContent = this.classes[`justifyContent${capitalize(this.justifyContent)}`];
    const composedClasses = `${this.classes.root}
      ${alignContent} ${alignItems} ${flexDirection} ${flexWrap} ${this.gapClass} ${justifyContent} ${this.className}`.trim();
    this.composedClasses = replaceMultipleSpaces(composedClasses);
  }

  selectGap(): string {
    const gapOptions: StyleSheetFactoryOptions = { ...options, meta: `${FlexClassKey}-flex-${this.gap}` };
    const gapClass = `flex${this.gap}`;
    const gapSheet: StyleSheet = provideStylesheet({ [gapClass]: { gap: this.gap } }, gapOptions);
    const gapClasses: Classes = { ...gapSheet.classes };
    return gapClasses[gapClass];
  }
}

const theme = useTheme();
const FlexStyle = FlexStyles(theme);

export default FlexStyle;
