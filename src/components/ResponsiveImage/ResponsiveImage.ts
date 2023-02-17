import { Component, Input, OnChanges, OnInit, ViewEncapsulation } from '@angular/core';
import {
  Breakpoint,
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
import { applyOverrides, getClassKey } from '../../helpers/index';
import provideClasses from '../../styles/provideClasses/index';
import useTheme from '../../styles/useTheme/index';
import { Ground, GroundProps } from '../Ground/index';

export interface ImageSourceOptionsProp {
  bgColor?: BgColorProp;
  blur?: BlurProp;
  brightness?: BrightnessProp;
  canvas?: CanvasProp;
  contrast?: ContrastProp;
  crop?: CropProp;
  disable?: DisableProp;
  dpr?: DprProp;
  enable?: EnableProp;
  fit?: FitProp;
  format?: FormatProp;
  height?: HeightProp;
  optimize?: OptimizeProp;
  orient?: OrientProp;
  pad?: PadProp;
  quality?: QualityProp;
  resizeFilter?: ResizeFilterProp;
  saturation?: SaturationProp;
  sharpen?: SharpenProp;
  trim?: TrimProp;
  variant?: VariantProp;
  width?: WidthProp;
}

export interface ImageSourceProp {
  breakpoint?: Breakpoint;
  imageOptions?: ImageSourceOptionsProp;
  size?: string | number;
  srcset?: string | number;
  type?: string;
}

type PictureSource = { media?: string; srcset: string; type?: string };

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
type SourcesProp = ImageSourceProp[];
type SrcProp = string;
type TrimProp = string | number | undefined;
type VariantProp = ImageVariant;
type WidthProp = string | number;

export interface ResponsiveImageProps extends GroundProps {
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
  sources?: SourcesProp;
  src?: SrcProp;
  trim?: TrimProp;
  variant?: VariantProp;
  width?: WidthProp;
}

export const ResponsiveImageClassKey = getClassKey('responsive-image');

export type ResponsiveImageClasses = 'root';

export function ResponsiveImageStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      root: {}
    },
    'ResponsiveImage'
  );
}

const options: StyleSheetFactoryOptions = {
  index: 3,
  meta: ResponsiveImageClassKey
};

@Component({
  selector: ResponsiveImageClassKey,
  encapsulation: ViewEncapsulation.None,
  template: `
    <og-image
      [className]="composedClasses"
      [alt]="alt"
      [bgColor]="bgColor"
      [blur]="blur"
      [brightness]="brightness"
      [canvas]="canvas"
      [contrast]="contrast"
      [crop]="crop"
      [disable]="disable"
      [dpr]="dpr"
      [element]="element"
      [enable]="enable"
      [fit]="fit"
      [format]="format"
      [height]="height"
      [intrinsicValues]="intrinsicValues"
      [optimize]="optimize"
      [orient]="orient"
      [pad]="pad"
      [quality]="quality"
      [resizeFilter]="resizeFilter"
      [saturation]="saturation"
      [sharpen]="sharpen"
      [sizes]="composedImageSizes"
      [sources]="composedPictureSources"
      [src]="src"
      [srcset]="composedImageSrcset"
      [trim]="trim"
      [variant]="variant"
      [width]="width"
    ></og-image>
  `
})
export class ResponsiveImage extends Ground implements OnChanges, OnInit {
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
  @Input() sources: SourcesProp = [];
  @Input() src: SrcProp = '';
  @Input() trim: TrimProp;
  @Input() variant: VariantProp = '';
  @Input() width: WidthProp = 0;

  public composedImageSizes: string = '';
  public composedImageSrcset: string = '';
  public composedPictureSources: PictureSource[] = [];
  private theme: Theme = useTheme();

  constructor() {
    super();
    this.classes = provideClasses(ResponsiveImageStyles, options);
  }

  ngOnInit(): void {
    this.prepareComponent();
  }

  ngOnChanges(): void {
    this.prepareComponent();
  }

  prepareComponent(): void {
    this.composeClasses();
    this.composeSources();
  }

  composeClasses(): void {
    this.composedClasses = `${this.classes.root} ${this.className}`.trim();
  }

  composeSources(): void {
    if (this.element === 'img') {
      this.composeImageSources();
    } else {
      this.composePictureSources();
    }
  }

  composeImageSources(): void {
    const srcset: string[] = [];
    const sizes: string[] = [];

    let breakpoint: string | number;
    let queryString: string;
    let size: string | number;
    let srcsetSize: string;
    let useSizes = true;
    let variant: ImageVariantValues;

    this.sources.forEach(source => {
      variant = source.imageOptions && source.imageOptions.variant ? this.theme.media.images.variants[source.imageOptions.variant] : {};
      variant = { ...variant, ...source.imageOptions };
      queryString = this.selectQueryString(variant);

      breakpoint = source.breakpoint ? this.selectBreakpoint(source.breakpoint) : '';
      size = source.size ? `${this.theme.breakpoints.values[source.size]}` : `${source.size}`;

      if (source.srcset) {
        srcsetSize = `${source.srcset}`;
        srcsetSize = this.theme.breakpoints.values[srcsetSize] ? `${this.theme.breakpoints.values[srcsetSize]}` : srcsetSize;
        srcsetSize = srcsetSize.endsWith('w') || srcsetSize.endsWith('x') ? srcsetSize : `${srcsetSize}w`;
        if (srcsetSize.endsWith('x')) {
          useSizes = false;
        }
      } else {
        srcsetSize = `${size}w`;
      }

      sizes.push(`${breakpoint} ${size}px`);
      srcset.push(`${this.src}${queryString} ${srcsetSize}`);
    });
    this.composedImageSizes = useSizes ? sizes.join(', ') : '';
    this.composedImageSrcset = srcset.join(', ');
  }

  composePictureSources(): void {
    this.sources.forEach(source => this.composedPictureSources.push(this.selectPictureSource(source)));
  }

  selectPictureSource(source: ImageSourceProp): PictureSource {
    let queryString: string;
    let variant: ImageVariantValues;
    const pictureSource: PictureSource = { srcset: '' };

    variant = source.imageOptions && source.imageOptions.variant ? this.theme.media.images.variants[source.imageOptions.variant] : {};
    variant = { ...variant, ...source.imageOptions };

    queryString = this.selectQueryString(variant);

    if (source.breakpoint) {
      pictureSource.media = this.selectBreakpoint(source.breakpoint);
    }
    if (source.type) {
      pictureSource.type = source.type;
    }

    pictureSource.srcset = `${this.src}${queryString}`;

    return pictureSource;
  }

  selectBreakpoint(bp: string | number): string {
    let breakpoint: string = this.theme.breakpoints.values[bp] ? `${this.theme.breakpoints.values[bp]}` : `${bp}`;
    breakpoint = breakpoint.includes('px') ? breakpoint : `${breakpoint}px`;

    return `(max-width: ${breakpoint})`;
  }

  selectQueryString(variant: ImageVariantValues = {}): string {
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
    const queryString = joinedQueries ? `?${joinedQueries}` : '';

    return queryString;
  }
}

const theme = useTheme();
const ResponsiveImageStyle = ResponsiveImageStyles(theme);

export default ResponsiveImageStyle;
