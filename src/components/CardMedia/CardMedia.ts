import { Component, Input, OnChanges, OnInit, ViewEncapsulation } from '@angular/core';
import { applyOverrides, arrayify, getClassKey, replaceMultipleSpaces } from '../../helpers/index';
import { Styles, StyleSheetFactoryOptions, Theme } from '../../types/index';
import provideClasses from '../../styles/provideClasses/index';
import useTheme from '../../styles/useTheme/index';
import { Ground, GroundProps } from '../Ground/index';

type AltProp = string;
type ElementProp = 'audio' | 'div' | 'img' | 'picture' | 'video';
type MediaProp = string | string[];
type PosterProp = string;
type SrcProp = string | string[];
type TypeProp = string | string[];

export interface CardMediaProps extends GroundProps {
  alt?: AltProp;
  element?: ElementProp;
  media?: MediaProp;
  poster?: PosterProp;
  src?: SrcProp;
  type?: TypeProp;
}

export const CardMediaClassKey = getClassKey('card-media');

export type CardMediaClasses = 'root' | 'media' | 'img';

export function CardMediaStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      root: {
        display: 'block',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
      },
      img: {
        objectFit: 'cover'
      },
      media: {
        width: '100%'
      }
    },
    'CardMedia'
  );
}

const options: StyleSheetFactoryOptions = {
  index: 2,
  meta: CardMediaClassKey
};

@Component({
  selector: CardMediaClassKey,
  encapsulation: ViewEncapsulation.None,
  template: `
    <ng-container [ngSwitch]="element">
      <audio *ngSwitchCase="'audio'" [class]="composedClasses" controls [src]="src[0]">Your browser doesn't support embedded audio.</audio>
      <div *ngSwitchCase="'div'" [class]="composedClasses" [ngStyle]="{ 'background-image': src[0] ? 'url(' + src[0] + ')' : '' }">
        <ng-content></ng-content>
      </div>
      <img *ngSwitchCase="'img'" [class]="composedClasses" [src]="src[0]" [alt]="alt" />
      <picture *ngSwitchCase="'picture'" [class]="composedClasses">
        <source
          *ngFor="let value of src; let i = index"
          [srcset]="value"
          [attr.media]="media[i] ? media[i] : null"
          [attr.type]="type[i] ? type[i] : null"
        />
        <img [src]="src[0]" [alt]="alt" />
      </picture>
      <video *ngSwitchCase="'video'" [class]="composedClasses" controls [poster]="poster">
        <source *ngFor="let value of src; let i = index" [src]="value" [attr.type]="type[i] ? type[i] : null" />
      </video>
    </ng-container>
  `
})
export class CardMedia extends Ground implements OnChanges, OnInit {
  @Input() alt: AltProp = 'card image';
  @Input() element: ElementProp = 'div';
  @Input('media')
  set media(value: MediaProp) {
    this._media = arrayify(value);
  }
  get media(): MediaProp {
    return this._media;
  }
  @Input() poster: PosterProp = '';
  @Input('src')
  set src(value: SrcProp) {
    this._src = arrayify(value);
  }
  get src(): SrcProp {
    return this._src;
  }
  @Input('type')
  set type(value: TypeProp) {
    this._type = arrayify(value);
  }
  get type(): TypeProp {
    return this._type;
  }

  private _media: MediaProp = [];
  private _src: SrcProp = [''];
  private _type: TypeProp = [];

  constructor() {
    super();
    this.classes = provideClasses(CardMediaStyles, options);
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
    const elementsForMediaClass: Partial<ElementProp>[] = ['audio', 'img', 'picture', 'video'];
    const elementsForImgClass: Partial<ElementProp>[] = ['img', 'picture'];
    const mediaClass = elementsForMediaClass.includes(this.element) ? this.classes.media : '';
    const imgClass = elementsForImgClass.includes(this.element) ? this.classes.img : '';
    const composedClasses = `${this.classes.root} ${mediaClass} ${imgClass} ${this.className}`.trim();
    this.composedClasses = replaceMultipleSpaces(composedClasses);
  }
}

const theme = useTheme();
const CardMediaStyle = CardMediaStyles(theme);

export default CardMediaStyle;
