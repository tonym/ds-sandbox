import { Component, Input, OnChanges, OnInit, ViewEncapsulation } from '@angular/core';
import { applyOverrides, getClassKey, transitions } from '../../helpers/index';
import provideClasses from '../../styles/provideClasses/index';
import useTheme from '../../styles/useTheme/index';
import { Ground, GroundProps } from '../Ground/index';
import { Styles, StyleSheetFactoryOptions, Theme } from '../../types';

type LinkProp = string;
type NewTabProp = boolean | string;

export interface CardActionAreaProps extends GroundProps {
  link: LinkProp;
  newTab: NewTabProp;
}

export const CardActionAreaClassKey = getClassKey('card-action-area');

export type CardActionAreaClasses = 'root' | 'focusVisible' | 'focusHighlight';

export function CardActionAreaStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      root: {
        display: 'block',
        textAlign: 'inherit',
        width: '100%',
        '&:hover $focusHighlight': {
          opacity: theme.palette.action.hoverOpacity
        },
        '& $focusVisible $focusHighlight': {
          opacity: 0.12
        }
      },
      focusHighlight: {
        backgroundColor: 'currentcolor',
        borderRadius: 'inherit',
        bottom: 0,
        left: 0,
        opacity: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        position: 'absolute',
        right: 0,
        top: 0,
        transition: transitions.create('opacity', {
          duration: theme.transitions.duration.short
        })
      },
      focusVisible: {}
    },
    'CardActionArea'
  );
}

const options: StyleSheetFactoryOptions = {
  index: 3,
  meta: CardActionAreaClassKey
};

@Component({
  selector: CardActionAreaClassKey,
  encapsulation: ViewEncapsulation.None,
  template: `
    <og-button-base [className]="composedClasses" [link]="link" [newTab]="newTab">
      <ng-content></ng-content>
      <span [class]="classes.focusHighlight"></span>
    </og-button-base>
  `
})
export class CardActionArea extends Ground implements OnChanges, OnInit {
  @Input() link: LinkProp = '';
  @Input() newTab: NewTabProp = false;

  constructor() {
    super();
    this.classes = provideClasses(CardActionAreaStyles, options);
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
const CardActionAreaStyle = CardActionAreaStyles(theme);
export default CardActionAreaStyle;
