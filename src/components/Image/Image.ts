import { Component, Input, OnChanges, OnInit, ViewEncapsulation } from '@angular/core';
import { applyOverrides, getClassKey } from '../../helpers/index';
import {
  EnableAndDisable,
  Fit,
  Format,
  ImageVariant,
  ImageVariantValues,
  Optimize,
  ResizeFilter,
  Styles,
  StyleSheetFactoryOptions,
  Theme
} from '../../types/index';
import provideClasses from '../../styles/provideClasses/index';
import useTheme from '../../styles/useTheme/index';
import { Ground, GroundProps } from '../Ground/index';

type AltProp = string;
type BgColorProp = string | undefined;
type BlurProp = string | number | undefined;
type BrightnessProp = string | number | undefined;
type CanvasProp = string | undefined;
type ContrastProp = string | number | undefined;
type CropProp = string | undefined;
type DisableProp = EnableAndDisable | undefined;
type DprProp = string | number | undefined;
type ElementProp = 'img' | 'picture';
type EnableProp = EnableAndDisable | undefined;
type FitProp = Fit | undefined;
type FormatProp = Format | undefined;
type HeightProp = string | number;
type IntrinsicValuesProp = boolean | string;
type OptimizeProp = Optimize | undefined;
type OrientProp = string | number | undefined;
type PadProp = string | number | undefined;
type QualityProp = string | number | undefined;
type ResizeFilterProp = ResizeFilter | undefined;
type SaturationProp = string | number | undefined;
type SharpenProp = string | undefined;
type SizesProp = string;
type SourcesProp = { media?: string; srcset: string; type?: string }[];
type SrcProp = string;
type SrcsetProp = string;
type TrimProp = string | number | undefined;
type VariantProp = ImageVariant;
type WidthProp = string | number;

export interface ImageProps extends GroundProps {
  alt?: AltProp;
  bgColor?: BgColorProp;
  blur?: BlurProp;
  brightness?: BrightnessProp;
  canvas?: CanvasProp;
  contrast?: ContrastProp;
  crop?: CropProp;
  disable?: DisableProp;
  dpr?: DprProp;
  element?: ElementProp;
  enable?: EnableProp;
  fit?: FitProp;
  format?: FormatProp;
  height?: HeightProp;
  intrinsicValues?: IntrinsicValuesProp;
  optimize?: OptimizeProp;
  orient?: OrientProp;
  pad?: PadProp;
  quality?: QualityProp;
  resizeFilter?: ResizeFilterProp;
  saturation?: SaturationProp;
  sharpen?: SharpenProp;
  sizes?: SizesProp;
  sources?: SourcesProp;
  src?: SrcProp;
  srcset?: SrcsetProp;
  trim?: TrimProp;
  variant?: VariantProp;
  width?: WidthProp;
}

export const ImageClassKey = getClassKey('image');

export type ImageClasses = 'root';

export function ImageStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      root: {}
    },
    'Image'
  );
}

const options: StyleSheetFactoryOptions = {
  index: 2,
  meta: ImageClassKey
};

@Component({
  selector: ImageClassKey,
  encapsulation: ViewEncapsulation.None,
  template: `
    <ng-container [ngSwitch]="element">
      <img
        *ngSwitchCase="'img'"
        [class]="composedClasses"
        [alt]="alt"
        [attr.height]="useIntrinsicValues ? height : null"
        [src]="composedSrc"
        [attr.srcset]="srcset ? srcset : null"
        [attr.sizes]="sizes ? sizes : null"
        [attr.width]="useIntrinsicValues ? width : null"
      />
      <picture *ngSwitchCase="'picture'" [class]="composedClasses">
        <source
          *ngFor="let source of sources; let i = index"
          [srcset]="source.srcset"
          [attr.media]="source.media ? source.media : null"
          [attr.type]="source.type ? source.type : null"
        />
        <img [src]="composedSrc" [alt]="alt" />
      </picture>
    </ng-container>
  `
})
export class Image extends Ground implements OnChanges, OnInit {
  @Input() alt: AltProp = 'catalog image';
  @Input() bgColor: BgColorProp;
  @Input() blur: BlurProp;
  @Input() brightness: BrightnessProp;
  @Input() canvas: CanvasProp;
  @Input() contrast: ContrastProp;
  @Input() crop: CropProp;
  @Input() disable: DisableProp;
  @Input() dpr: DprProp;
  @Input() element: ElementProp = 'img';
  @Input() enable: EnableProp;
  @Input() fit: FitProp;
  @Input() format: FormatProp;
  @Input() height: HeightProp = 0;
  @Input() intrinsicValues: IntrinsicValuesProp = false;
  @Input() optimize: OptimizeProp;
  @Input() orient: OrientProp;
  @Input() pad: PadProp;
  @Input() quality: QualityProp;
  @Input() resizeFilter: ResizeFilterProp;
  @Input() saturation: SaturationProp;
  @Input() sharpen: SharpenProp;
  @Input() sizes: SizesProp = '';
  @Input() sources: SourcesProp = [];
  @Input() src: SrcProp = '';
  @Input() srcset: SrcsetProp = '';
  @Input() trim: TrimProp;
  @Input() variant: VariantProp = '';
  @Input() width: WidthProp = 0;

  private theme: Theme = useTheme();

  public composedSrc = '';
  public useIntrinsicValues = false;

  constructor() {
    super();
    this.classes = provideClasses(ImageStyles, options);
  }

  ngOnInit(): void {
    this.prepareImage();
  }

  ngOnChanges(): void {
    this.prepareImage();
  }

  composeClasses(): void {
    this.composedClasses = `${this.classes.root} ${this.className}`.trim();
  }

  composeSrc(): void {
    const queryString = this.selectQueryString();
    this.composedSrc = `${this.src}${queryString}`;
  }

  prepareImage(): void {
    this.composeClasses();
    this.composeSrc();
    this.useIntrinsicValues = this.intrinsicValues && this.intrinsicValues !== 'false' ? true : false;
  }

  selectQueryString(): string {
    const variant: ImageVariantValues = this.selectVariant();
    const queries: string[] = [];

    queries.push(variant.bgColor ? `bg-color=${variant.bgColor}` : '');
    queries.push(variant.blur ? `blur=${variant.blur}` : '');
    queries.push(variant.brightness ? `brightness=${variant.brightness}` : '');
    queries.push(variant.canvas ? `canvas=${variant.canvas}` : '');
    queries.push(variant.contrast ? `contrast=${variant.contrast}` : '');
    queries.push(variant.crop ? `crop=${variant.crop}` : '');
    queries.push(variant.disable ? `disable=${variant.disable}` : '');
    queries.push(variant.dpr ? `dpr=${variant.dpr}` : '');
    queries.push(variant.enable ? `enable=${variant.enable}` : '');
    queries.push(variant.fit ? `fit=${variant.fit}` : '');
    queries.push(variant.format ? `format=${variant.format}` : '');
    queries.push(variant.height ? `height=${variant.height}` : '');
    queries.push(variant.optimize ? `optimize=${variant.optimize}` : '');
    queries.push(variant.orient ? `orient=${variant.orient}` : '');
    queries.push(variant.pad ? `pad=${variant.pad}` : '');
    queries.push(variant.quality ? `quality=${variant.quality}` : '');
    queries.push(variant.resizeFilter ? `resize-filter=${variant.resizeFilter}` : '');
    queries.push(variant.saturation ? `saturation=${variant.saturation}` : '');
    queries.push(variant.sharpen ? `sharpen=${variant.sharpen}` : '');
    queries.push(variant.trim ? `trim=${variant.trim}` : '');
    queries.push(variant.width ? `width=${variant.width}` : '');

    const filteredQueries = queries.filter(query => query.length > 0);
    const joinedQueries = filteredQueries.join('&');
    const selectedQueryString = joinedQueries ? `?${joinedQueries}` : '';

    return selectedQueryString;
  }

  selectVariant(): ImageVariantValues {
    const themeVariant: ImageVariantValues = this.theme.media.images.variants[this.variant] || {};
    const selectedVariant: ImageVariantValues = {};

    if (this.bgColor) {
      selectedVariant.bgColor = this.bgColor;
    }
    if (this.blur) {
      selectedVariant.blur = this.blur;
    }
    if (this.brightness) {
      selectedVariant.brightness = this.brightness;
    }
    if (this.canvas) {
      selectedVariant.canvas = this.canvas;
    }
    if (this.contrast) {
      selectedVariant.contrast = this.contrast;
    }
    if (this.crop) {
      selectedVariant.crop = this.crop;
    }
    if (this.disable) {
      selectedVariant.disable = this.disable;
    }
    if (this.dpr) {
      selectedVariant.dpr = this.dpr;
    }
    if (this.enable) {
      selectedVariant.enable = this.enable;
    }
    if (this.fit) {
      selectedVariant.fit = this.fit;
    }
    if (this.format) {
      selectedVariant.format = this.format;
    }
    if (this.height) {
      selectedVariant.height = this.height;
    }
    if (this.optimize) {
      selectedVariant.optimize = this.optimize;
    }
    if (this.orient) {
      selectedVariant.orient = this.orient;
    }
    if (this.pad) {
      selectedVariant.pad = this.pad;
    }
    if (this.quality) {
      selectedVariant.quality = this.quality;
    }
    if (this.resizeFilter) {
      selectedVariant.resizeFilter = this.resizeFilter;
    }
    if (this.saturation) {
      selectedVariant.saturation = this.saturation;
    }
    if (this.sharpen) {
      selectedVariant.sharpen = this.sharpen;
    }
    if (this.trim) {
      selectedVariant.trim = this.trim;
    }
    if (this.width) {
      selectedVariant.width = this.width;
    }

    return { ...themeVariant, ...selectedVariant };
  }
}

const theme = useTheme();
const ImageStyle = ImageStyles(theme);

export default ImageStyle;
