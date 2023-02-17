import { Component, Input, OnChanges, OnInit, ViewEncapsulation } from '@angular/core';
import { applyOverrides, getClassKey } from '../../helpers/index';
import { Styles, StyleSheetFactoryOptions, Theme } from '../../types/index';
import provideClasses from '../../styles/provideClasses/index';
import useTheme from '../../styles/useTheme/index';
import { Ground, GroundProps } from '../Ground/index';

type ElevationProp = number | string;
type RadiusProp = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type RaisedProp = boolean | string;
type SquareProp = boolean | string;
type VariantProp = 'elevated' | 'outlined';

export interface CardProps extends GroundProps {
  elevation?: ElevationProp;
  radius?: RadiusProp;
  raised?: RaisedProp;
  square?: SquareProp;
  variant?: VariantProp;
}

export const CardClassKey = getClassKey('card');

export type CardClasses = 'root' | 'elevated' | 'outlined';

export function CardStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      root: {
        overflow: 'hidden',
        position: 'relative'
      },
      elevated: {
        border: 'none'
      },
      outlined: {
        border: [1, 'solid', theme.palette.grey[300]],
        '&:hover': {
          boxShadow: theme.shadows[4]
        }
      }
    },
    'Card'
  );
}

const options: StyleSheetFactoryOptions = {
  index: 2,
  meta: CardClassKey
};

@Component({
  selector: CardClassKey,
  encapsulation: ViewEncapsulation.None,
  template: `
    <og-paper [elevation]="elevation" [radius]="radius" [square]="square" [className]="composedClasses" [classes]="classes">
      <ng-content></ng-content>
    </og-paper>
  `
})
export class Card extends Ground implements OnChanges, OnInit {
  @Input() elevation: ElevationProp = 1;
  @Input() radius: RadiusProp = 'md';
  @Input('raised')
  set raised(value: RaisedProp) {
    this.elevation = value === true || value === 'true' ? this.defaultRaisedElevation : this.elevation;
  }
  @Input() square: SquareProp = false;
  @Input('variant')
  set variant(value: VariantProp) {
    this.elevation = value === 'outlined' ? 0 : this.elevation;
    this._variant = value;
  }
  get variant(): VariantProp {
    return this._variant;
  }

  private _variant: VariantProp = 'elevated';
  private defaultRaisedElevation: ElevationProp = 8;

  constructor() {
    super();
    this.classes = provideClasses(CardStyles, options);
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
    this.composedClasses = `${this.classes.root} ${this.classes[this.variant]} ${this.className}`.trim();
  }
}

const theme = useTheme();
const CardStyle = CardStyles(theme);

export default CardStyle;
