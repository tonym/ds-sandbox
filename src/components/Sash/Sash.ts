import { Component, Input, OnChanges, OnInit, ViewEncapsulation } from '@angular/core';
import { Styles, StyleSheetFactoryOptions, Theme } from '../../types/index';
import { applyOverrides, getClassKey } from '../../helpers/index';
import provideClasses from '../../styles/provideClasses/index';
import useTheme from '../../styles/useTheme/index';
import { Ground, GroundProps } from '../Ground/index';

type LabelProp = string | number;

export interface SashProps extends GroundProps {
  label: LabelProp;
}

export const SashClassKey = getClassKey('sash');

export type SashClasses = 'root' | 'typography';

export function SashStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      root: {
        backgroundColor: theme.palette.primary.main,
        border: ['1px', 'solid', theme.palette.common.white],
        left: -25,
        padding: 0,
        position: 'absolute',
        textAlign: 'center',
        top: 10,
        transform: 'rotate(-45deg)',
        width: 100,
        zIndex: 1250
      },
      typography: {
        color: theme.palette.common.white,
        fontSize: '0.875rem',
        fontWeight: theme.typography.fontWeightBold,
        letterSpacing: '0.2em',
        lineHeight: '20px'
      }
    },
    'Sash'
  );
}

const options: StyleSheetFactoryOptions = {
  index: 3,
  meta: SashClassKey
};

@Component({
  selector: SashClassKey,
  encapsulation: ViewEncapsulation.None,
  template: `
    <div [class]="composedClasses">
      <og-typography align="center" [className]="classes.typography" variant="overline">
        {{ label }}
      </og-typography>
    </div>
  `
})
export class Sash extends Ground implements OnChanges, OnInit {
  @Input() label: LabelProp = '';

  constructor() {
    super();
    this.classes = provideClasses(SashStyles, options);
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
const SashStyle = SashStyles(theme);

export default SashStyle;
