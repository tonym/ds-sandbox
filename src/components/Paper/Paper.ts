import { Component, Input, OnChanges, OnInit, ViewEncapsulation } from '@angular/core';
import { applyOverrides, capitalize, getClassKey, replaceMultipleSpaces } from '../../helpers/index';
import { Styles, StyleSheetFactoryOptions, Theme } from '../../types/index';
import provideClasses from '../../styles/provideClasses/index';
import useTheme from '../../styles/useTheme/index';
import { Ground, GroundProps } from '../Ground/index';

type ElevationProp = string | number;
type OutlinedProp = boolean | string;
type RadiusProp = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type SquareProp = boolean | string;

export interface PaperProps extends GroundProps {
  elevation?: ElevationProp;
  outlined?: OutlinedProp;
  radius?: RadiusProp;
  square?: SquareProp;
}

export const PaperClassKey = getClassKey('paper');

export type PaperClasses =
  | 'root'
  | 'elevation0'
  | 'elevation1'
  | 'elevation2'
  | 'elevation3'
  | 'elevation4'
  | 'elevation5'
  | 'elevation6'
  | 'elevation7'
  | 'elevation8'
  | 'elevation9'
  | 'elevation10'
  | 'elevation11'
  | 'elevation12'
  | 'elevation13'
  | 'elevation14'
  | 'elevation15'
  | 'elevation16'
  | 'elevation17'
  | 'elevation18'
  | 'elevation19'
  | 'elevation20'
  | 'elevation21'
  | 'elevation22'
  | 'elevation23'
  | 'elevation24'
  | 'outlined'
  | 'rounded';

export function PaperStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      root: {
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary
      },
      elevation0: { boxShadow: theme.shadows[0] },
      elevation1: { boxShadow: theme.shadows[1] },
      elevation2: { boxShadow: theme.shadows[2] },
      elevation3: { boxShadow: theme.shadows[3] },
      elevation4: { boxShadow: theme.shadows[4] },
      elevation5: { boxShadow: theme.shadows[5] },
      elevation6: { boxShadow: theme.shadows[6] },
      elevation7: { boxShadow: theme.shadows[7] },
      elevation8: { boxShadow: theme.shadows[8] },
      elevation9: { boxShadow: theme.shadows[9] },
      elevation10: { boxShadow: theme.shadows[10] },
      elevation11: { boxShadow: theme.shadows[11] },
      elevation12: { boxShadow: theme.shadows[12] },
      elevation13: { boxShadow: theme.shadows[13] },
      elevation14: { boxShadow: theme.shadows[14] },
      elevation15: { boxShadow: theme.shadows[15] },
      elevation16: { boxShadow: theme.shadows[16] },
      elevation17: { boxShadow: theme.shadows[17] },
      elevation18: { boxShadow: theme.shadows[18] },
      elevation19: { boxShadow: theme.shadows[19] },
      elevation20: { boxShadow: theme.shadows[20] },
      elevation21: { boxShadow: theme.shadows[21] },
      elevation22: { boxShadow: theme.shadows[22] },
      elevation23: { boxShadow: theme.shadows[23] },
      elevation24: { boxShadow: theme.shadows[24] },
      outlined: {
        border: `1px solid ${theme.palette.divider}`
      },
      roundedXs: {
        borderRadius: theme.shape.borderRadius
      },
      roundedSm: {
        borderRadius: theme.shape.borderRadius * 2
      },
      roundedMd: {
        borderRadius: theme.shape.borderRadius * 4
      },
      roundedLg: {
        borderRadius: theme.shape.borderRadius * 6
      },
      roundedXl: {
        borderRadius: theme.shape.borderRadius * 8
      }
    },
    'Paper'
  );
}

const options: StyleSheetFactoryOptions = {
  index: 2,
  meta: PaperClassKey
};

@Component({
  selector: PaperClassKey,
  encapsulation: ViewEncapsulation.None,
  template: `
    <div [class]="composedClasses">
      <ng-content></ng-content>
    </div>
  `
})
export class Paper extends Ground implements OnChanges, OnInit {
  @Input() elevation: ElevationProp = 1;
  @Input() outlined: OutlinedProp = false;
  @Input() radius: RadiusProp = 'sm';
  @Input() square: SquareProp = false;

  constructor() {
    super();
    this.classes = provideClasses(PaperStyles, options);
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
    const elevationKey = `elevation${this.elevation}`;
    const elevationClass = this.classes[elevationKey];
    const roundedClass = !this.square || this.square === 'false' ? this.classes[`rounded${capitalize(this.radius)}`] : '';
    const outlinedClass = !this.outlined || this.outlined === 'false' ? '' : this.classes.outlined;
    const composedClasses = `${this.classes.root} ${elevationClass} ${roundedClass} ${outlinedClass} ${this.className}`.trim();
    this.composedClasses = replaceMultipleSpaces(composedClasses);
  }
}

const theme = useTheme();
const PaperStyle = PaperStyles(theme);

export default PaperStyle;
