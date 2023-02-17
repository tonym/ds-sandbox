import { Component, OnChanges, OnInit, ViewEncapsulation } from '@angular/core';
import { applyOverrides, getClassKey } from '../../helpers/index';
import { Styles, StyleSheetFactoryOptions, Theme } from '../../types/index';
import provideClasses from '../../styles/provideClasses/index';
import useTheme from '../../styles/useTheme/index';
import { Ground, GroundProps } from '../Ground/index';

export interface CardContentProps extends GroundProps {}

export const CardContentClassKey = getClassKey('card-content');

export type CardContentClasses = 'root';

export function CardContentStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      root: {
        padding: theme.spacing.unit * 2,
        '&:last-child': {
          paddingBottom: theme.spacing.unit * 3
        }
      }
    },
    'CardContent'
  );
}

const options: StyleSheetFactoryOptions = {
  index: 2,
  meta: CardContentClassKey
};

@Component({
  selector: CardContentClassKey,
  encapsulation: ViewEncapsulation.None,
  template: `
    <div [class]="composedClasses">
      <ng-content></ng-content>
    </div>
  `
})
export class CardContent extends Ground implements OnChanges, OnInit {
  constructor() {
    super();
    this.classes = provideClasses(CardContentStyles, options);
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
}

const theme = useTheme();
const CardContentStyle = CardContentStyles(theme);

export default CardContentStyle;
