import { Component, Input, OnChanges, OnInit, ViewEncapsulation } from '@angular/core';
import { Styles, StyleSheetFactoryOptions, Theme } from '../../types/index';
import { applyOverrides, getClassKey } from '../../helpers/index';
import provideClasses from '../../styles/provideClasses/index';
import useTheme from '../../styles/useTheme/index';
import { Ground, GroundProps } from '../Ground/index';
import { ImageProps } from '../Image/index';

type SrcProp = string;

export interface AvatarProps extends GroundProps {
  imageProps?: ImageProps;
  src?: SrcProp;
}

export const AvatarClassKey = getClassKey('avatar');

export type AvatarClasses = 'root' | 'image';

export function AvatarStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      root: {
        alignItems: 'center',
        borderRadius: '50%',
        display: 'flex',
        flexShrink: 0,
        height: 36,
        justifyContent: 'center',
        lineHeight: 0,
        overflow: 'hidden',
        position: 'relative',
        userSelect: 'none',
        width: 36
      },
      image: {
        width: '100%'
      }
    },
    'Avatar'
  );
}

const options: StyleSheetFactoryOptions = {
  index: 2,
  meta: AvatarClassKey
};

@Component({
  selector: AvatarClassKey,
  encapsulation: ViewEncapsulation.None,
  template: `
    <ng-template #content><ng-content></ng-content></ng-template>
    <div [class]="composedClasses">
      <ng-container *ngIf="src; else content">
        <og-image
          [alt]="imageProps.alt || 'avatar'"
          [attr.bgColor]="imageProps.bgColor ? imageProps.bgColor : null"
          [attr.blur]="imageProps.blur ? imageProps.blur : null"
          [attr.brightness]="imageProps.brightness ? imageProps.brightness : null"
          [attr.canvas]="imageProps.canvas ? imageProps.canvas : null"
          [attr.contrast]="imageProps.contrast ? imageProps.contrast : null"
          [attr.crop]="imageProps.crop ? imageProps.crop : null"
          [attr.disable]="imageProps.disable ? imageProps.disable : null"
          [attr.dpr]="imageProps.dpr ? imageProps.dpr : null"
          [attr.element]="imageProps.element ? imageProps.element : null"
          [attr.enable]="imageProps.enable ? imageProps.enable : null"
          [attr.fit]="imageProps.fit ? imageProps.fit : null"
          [attr.format]="imageProps.format ? imageProps.format : null"
          [attr.height]="imageProps.height ? imageProps.height : null"
          [attr.intrinsicValues]="imageProps.intrinsicValues ? imageProps.intrinsicValues : null"
          [attr.optimize]="imageProps.optimize ? imageProps.optimize : null"
          [attr.orient]="imageProps.orient ? imageProps.orient : null"
          [attr.pad]="imageProps.pad ? imageProps.pad : null"
          [attr.quality]="imageProps.quality ? imageProps.quality : null"
          [attr.resizeFilter]="imageProps.resizeFilter ? imageProps.resizeFilter : null"
          [attr.saturation]="imageProps.saturation ? imageProps.saturation : null"
          [attr.sharpen]="imageProps.sharpen ? imageProps.sharpen : null"
          [attr.sizes]="imageProps.sizes ? imageProps.sizes : null"
          [attr.sources]="imageProps.sources ? imageProps.sources : null"
          [attr.srcset]="imageProps.srcset ? imageProps.srcset : null"
          [attr.trim]="imageProps.trim ? imageProps.trim : null"
          [attr.variant]="imageProps.variant ? imageProps.variant : null"
          [attr.width]="imageProps.width ? imageProps.width : null"
          [className]="classes.image"
          [src]="src"
        ></og-image>
      </ng-container>
    </div>
  `
})
export class Avatar extends Ground implements OnChanges, OnInit {
  @Input() src: SrcProp = '';
  @Input() imageProps: ImageProps = {};

  constructor() {
    super();
    this.classes = provideClasses(AvatarStyles, options);
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
const AvatarStyle = AvatarStyles(theme);

export default AvatarStyle;
