import { Component, Input, OnChanges, OnInit, ViewEncapsulation } from '@angular/core';
import { Styles, StyleSheetFactoryOptions, Theme } from '../../types/index';
import { applyOverrides, capitalize, getClassKey } from '../../helpers/index';
import provideClasses from '../../styles/provideClasses/index';
import useTheme from '../../styles/useTheme/index';
import { Ground, GroundProps } from '../Ground/index';

type OpenProp = boolean | string;
type PositionProp = 'absolute' | 'fixed';

export interface ScrimProps extends GroundProps {
  open?: OpenProp;
  position?: PositionProp;
}

export const ScrimClassKey = getClassKey('scrim');

export type ScrimClasses = 'root' | 'open' | 'positionAbsolute' | 'positionFixed';

export function ScrimStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      root: {
        backgroundColor: 'rgba(0, 0, 0, 0.35)',
        bottom: 0,
        boxShadow: '0 2px 5px rgba(36, 35, 35, 0.4)',
        left: 0,
        maxWidth: '100%',
        opacity: 0,
        right: 0,
        top: 0,
        transition: 'opacity 251ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, visibility 251ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        visibility: 'hidden',
        zIndex: theme.zIndex.scrim
      },
      open: {
        opacity: 1,
        visibility: 'visible'
      },
      positionAbsolute: {
        position: 'absolute'
      },
      positionFixed: {
        position: 'fixed'
      }
    },
    'Scrim'
  );
}

const options: StyleSheetFactoryOptions = {
  index: 2,
  meta: ScrimClassKey
};

@Component({
  selector: ScrimClassKey,
  encapsulation: ViewEncapsulation.None,
  template: `
    <div [class]="composedClasses">
      <ng-content></ng-content>
    </div>
  `
})
export class Scrim extends Ground implements OnChanges, OnInit {
  @Input() open: OpenProp = false;
  @Input() position: PositionProp = 'fixed';

  constructor() {
    super();
    this.classes = provideClasses(ScrimStyles, options);
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
    const openClass = this.open && this.open !== 'false' ? this.classes.open : '';
    const positionClass = this.classes[`position${capitalize(this.position)}`];
    this.composedClasses = `${this.classes.root} ${openClass} ${positionClass} ${this.className}`.trim();
  }
}

const theme = useTheme();
const ScrimStyle = ScrimStyles(theme);

export default ScrimStyle;
