import { Component, Input, OnChanges, OnInit, ViewEncapsulation } from '@angular/core';
import { Classes, Styles, StyleSheet, StyleSheetFactoryOptions, Theme } from '../../types/index';
import { applyOverrides, getClassKey, isColor, replaceMultipleSpaces } from '../../helpers/index';
import provideStylesheet from '../../styles/provideStylesheet/index';
import useTheme from '../../styles/useTheme/index';
import provideClasses from '../../styles/provideClasses/index';
import { Ground, GroundProps } from '../Ground/index';

type BackgroundColorProp = 'primary' | 'secondary' | 'error' | string;
type DisableSpacingProp = boolean | string;

export interface CardActionsProps extends GroundProps {
  backgroundColor: BackgroundColorProp;
  disableSpacing: DisableSpacingProp;
}

export const CardActionsClassKey = getClassKey('card-actions');

export type CardActionsClasses = 'root' | 'spacing';

export function CardActionsStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      root: {
        alignItems: 'center',
        display: 'flex',
        margin: 1,
        padding: theme.spacing.unit
      },
      spacing: {
        '&>:not(:first-child)': {
          marginLeft: theme.spacing.unit
        }
      }
    },
    'CardActions'
  );
}

const options: StyleSheetFactoryOptions = {
  index: 2,
  meta: CardActionsClassKey
};

@Component({
  selector: CardActionsClassKey,
  encapsulation: ViewEncapsulation.None,
  template: `
    <div [class]="composedClasses">
      <ng-content></ng-content>
    </div>
  `
})
export class CardActions extends Ground implements OnChanges, OnInit {
  @Input() backgroundColor: BackgroundColorProp = '';
  @Input() disableSpacing: DisableSpacingProp = false;

  public backgroundColorClass = '';

  constructor() {
    super();
    this.classes = provideClasses(CardActionsStyles, options);
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
    const disableSpacing = this.disableSpacing && this.disableSpacing !== 'false' ? '' : this.classes.spacing;
    this.backgroundColorClass = this.backgroundColor ? this.selectBackgroundColor() : '';
    const composedClasses = `${this.classes.root} ${disableSpacing} ${this.backgroundColorClass} ${this.className}`.trim();
    this.composedClasses = replaceMultipleSpaces(composedClasses);
  }

  selectBackgroundColor(): string {
    let ret = '';
    const backgroundColorEncoded = encodeURIComponent(this.backgroundColor);
    const backgroundColorOptions: StyleSheetFactoryOptions = {
      ...options,
      meta: `${CardActionsClassKey}-background-color-${backgroundColorEncoded}`
    };
    const backgroundColorClass = `backgroundColor${backgroundColorEncoded}`;
    const backgroundColorParsed = this.parseBackgroundColor();
    if (isColor(backgroundColorParsed)) {
      const backgroundColorSheet: StyleSheet = provideStylesheet(
        {
          [backgroundColorClass]: {
            backgroundColor: backgroundColorParsed
          }
        },
        backgroundColorOptions
      );
      const backgroundColorClasses: Classes = { ...backgroundColorSheet.classes };
      ret = backgroundColorClasses[backgroundColorClass];
    }
    return ret;
  }

  parseBackgroundColor(): string {
    const theme: Theme = useTheme();
    const possibleValues: BackgroundColorProp[] = ['primary', 'secondary', 'error'];
    return possibleValues.includes(this.backgroundColor) ? theme.palette[this.backgroundColor].main : this.backgroundColor;
  }
}

const theme = useTheme();
const CardActionsStyle = CardActionsStyles(theme);

export default CardActionsStyle;
