import { Component, OnChanges, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { ImageVariant, Styles, StyleSheetFactoryOptions, Theme } from '../../types/index';
import { applyOverrides, capitalize, getClassKey, replaceMultipleSpaces } from '../../helpers/index';
import provideClasses from '../../styles/provideClasses/index';
import useTheme from '../../styles/useTheme/index';
import { Ground, GroundProps } from '../Ground/index';

type AltProp = string;
type DisplayProp = 'block' | 'inherit' | 'initial' | 'inlineBlock';
type FixedProp = boolean | string;
type SizeProp = 'lg' | 'md' | 'sm';
type SrcProp = string;

export interface BrandProps extends GroundProps {
  alt: AltProp;
  display: DisplayProp;
  fixed: FixedProp;
  size: SizeProp;
  src: SrcProp;
  variant: ImageVariant;
}

export const BrandClassKey = getClassKey('brand');

export type BrandClasses =
  | 'root'
  | 'displayBlock'
  | 'displayInherit'
  | 'displayInlineBlock'
  | 'fixedLg'
  | 'fixedMd'
  | 'fixedSm'
  | 'lg'
  | 'md'
  | 'sm';

export function BrandStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      root: {
        width: 'auto'
      },
      displayBlock: {
        display: 'block'
      },
      displayInherit: {
        display: 'inherit'
      },
      displayInlineBlock: {
        display: 'inline-block'
      },
      fixedLg: {
        height: 80
      },
      fixedMd: {
        height: 50
      },
      fixedSm: {
        height: 24
      },
      lg: {
        height: 'auto',
        maxHeight: 80,
        maxWidth: '100%'
      },
      md: {
        height: 'auto',
        maxHeight: 50,
        maxWidth: '100%'
      },
      sm: {
        height: 'auto',
        maxHeight: 24,
        maxWidth: '100%'
      }
    },
    'Brand'
  );
}

const options: StyleSheetFactoryOptions = {
  index: 3,
  meta: BrandClassKey
};

@Component({
  selector: BrandClassKey,
  encapsulation: ViewEncapsulation.None,
  template: ` <og-image [className]="composedClasses" [alt]="alt" [src]="src" [variant]="variant"></og-image> `
})
export class Brand extends Ground implements OnChanges, OnInit {
  @Input() alt: AltProp = 'brand logo';
  @Input() display: DisplayProp = 'initial';
  @Input() fixed: FixedProp = false;
  @Input() size: SizeProp = 'md';
  @Input() src: SrcProp = '';
  @Input() variant: ImageVariant = '';

  constructor() {
    super();
    this.classes = provideClasses(BrandStyles, options);
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
    const displayClass = this.display !== 'initial' ? this.classes[`display${capitalize(this.display)}`] : '';
    const sizeClass = this.fixed && this.fixed !== 'false' ? this.classes[`fixed${capitalize(this.size)}`] : this.classes[this.size];
    const composedClasses = `${this.classes.root} ${displayClass} ${sizeClass} ${this.className}`.trim();
    this.composedClasses = replaceMultipleSpaces(composedClasses);
  }
}

const theme = useTheme();
const BrandStyle = BrandStyles(theme);

export default BrandStyle;
