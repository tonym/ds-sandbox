import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  Input,
  OnChanges,
  OnInit,
  QueryList,
  ViewEncapsulation
} from '@angular/core';
import { Styles, StyleSheetFactoryOptions, Theme } from '../../types/index';
import { applyOverrides, arrayify, getClassKey, replaceMultipleSpaces } from '../../helpers/index';
import provideClasses from '../../styles/provideClasses/index';
import useTheme from '../../styles/useTheme/index';
import { Button } from '../Button/index';
import { Ground, GroundProps } from '../Ground/index';

type ButtonTypeProp = 'button' | 'reset' | 'submit';
type ColorProp = 'default' | 'inherit' | 'primary' | 'secondary';
type DisabledProp = boolean | string;
type ElevatedProp = boolean | string;
type FullWidthProp = boolean | string;
type SizeProp = 'lg' | 'md' | 'sm';
type VariantProp = 'contained' | 'outlined' | 'text';

export interface ButtonGroupProps extends GroundProps {
  buttonType?: ButtonTypeProp;
  color?: ColorProp;
  disabled?: DisabledProp;
  elevated?: ElevatedProp;
  fullWidth?: FullWidthProp;
  size?: SizeProp;
  variant?: VariantProp;
}

export const ButtonGroupClassKey = getClassKey('button-group');

export type ButtonGroupClasses = 'root' | 'buttonGroupFirst' | 'buttonGroupLast' | 'buttonGroupMiddle' | 'fullWidth';

export function ButtonGroupStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      root: {
        '& a': {
          textDecoration: 'none',
          '-moz-appearance': 'none',
          '-webkit-appearance': 'none',
          '&::-moz-focus-inner': {
            borderStyle: 'none'
          }
        }
      },
      buttonGroupFirst: {
        borderBottomRightRadius: 0,
        borderTopRightRadius: 0
      },
      buttonGroupLast: {
        borderBottomLeftRadius: 0,
        borderLeft: 'none',
        borderTopLeftRadius: 0
      },
      buttonGroupMiddle: {
        borderLeft: 'none',
        borderRadius: 0
      },
      fullWidth: {
        alignContent: 'stretch',
        display: 'flex',
        width: '100%',
        '& *': {
          whiteSpace: 'nowrap',
          width: '100%'
        }
      }
    },
    'ButtonGroup'
  );
}

const options: StyleSheetFactoryOptions = {
  index: 2,
  meta: ButtonGroupClassKey
};

@Component({
  selector: ButtonGroupClassKey,
  encapsulation: ViewEncapsulation.None,
  template: `
    <div [class]="composedClasses">
      <ng-content></ng-content>
    </div>
  `
})
export class ButtonGroup extends Ground implements AfterViewInit, OnChanges, OnInit {
  @Input() buttonType: ButtonTypeProp = 'button';
  @Input() color: ColorProp = 'default';
  @Input() disabled: DisabledProp = false;
  @Input() elevated: ElevatedProp = false;
  @Input() fullWidth: FullWidthProp = false;
  @Input() size: SizeProp = 'md';
  @Input() variant: VariantProp = 'outlined';

  @ContentChildren(Button) buttons: QueryList<Button>;

  constructor(private changeDetectorRef: ChangeDetectorRef) {
    super();
    this.classes = provideClasses(ButtonGroupStyles, options);
  }

  ngOnInit(): void {
    this.prepareComponent();
  }

  ngOnChanges(): void {
    this.prepareChildren();
    this.prepareComponent();
  }

  ngAfterViewInit(): void {
    this.prepareChildren();
    this.changeDetectorRef.detectChanges();
  }

  prepareComponent(): void {
    this.composeClasses();
  }

  composeClasses(): void {
    const fullWidthClass = this.fullWidth && this.fullWidth !== 'false' ? this.classes.fullWidth : '';
    const composedClasses = `${this.classes.root} ${fullWidthClass} ${this.className}`.trim();
    this.composedClasses = replaceMultipleSpaces(composedClasses);
  }

  prepareChildren(): void {
    if (this.buttons) {
      this.buttons.forEach((button, index) => {
        button.buttonType = this.buttonType;
        button.color = this.color;
        button.disabled = this.disabled;
        button.elevated = this.elevated;
        button.size = this.size;
        button.variant = this.variant;
        let className = arrayify(button.className).join(' ');
        className = className.replace(` ${this.classes.buttonGroupFirst}`, '');
        className = className.replace(` ${this.classes.buttonGroupLast}`, '');
        className = className.replace(` ${this.classes.buttonGroupMiddle}`, '');
        if (index === 0) {
          button.className = `${className} ${this.classes.buttonGroupFirst}`;
        } else if (index === this.buttons.length - 1) {
          button.className = `${className} ${this.classes.buttonGroupLast}`;
        } else {
          button.className = `${className} ${this.classes.buttonGroupMiddle}`;
        }
        button.ngOnChanges();
      });
    }
  }
}

const theme = useTheme();
const ButtonGroupStyle = ButtonGroupStyles(theme);

export default ButtonGroupStyle;
