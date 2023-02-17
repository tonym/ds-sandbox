import { AfterViewInit, Component, ElementRef, Input, OnChanges, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs';
import { SvgIconService } from './SvgIcon.service';
import { Styles, StyleSheetFactoryOptions, Theme } from '../../types/index';
import { applyOverrides, capitalize, getClassKey, isUrl, replaceMultipleSpaces } from '../../helpers/index';
import { addSvg, store } from '../../store/index';
import provideClasses from '../../styles/provideClasses/index';
import useTheme from '../../styles/useTheme';
import { Ground, GroundProps } from '../Ground/index';

type ColorProp = 'error' | 'info' | 'inherit' | 'primary' | 'secondary' | 'success' | 'warning';
type FontSizeProp = 'inherit' | 'lg' | 'md' | 'sm';
type IconProp = string;
type IconStyleProp = 'filled' | 'outlined' | 'rounded' | 'sharp' | 'twotone';
type ShapeRenderingProp = 'auto' | 'optimizeSpeed' | 'crispEdges' | 'geometricPrecision' | undefined;
type SvgTitleProp = string;
type ViewBoxProp = string;

export interface SvgIconProps extends GroundProps {
  color?: ColorProp;
  fontSize?: FontSizeProp;
  icon?: IconProp;
  iconStyle?: IconStyleProp;
  shapeRendering?: ShapeRenderingProp;
  svgTitle?: SvgTitleProp;
  viewBox?: ViewBoxProp;
}

export const SvgIconClassKey = getClassKey('svg-icon');

export type SvgIconClasses =
  | 'root'
  | 'colorError'
  | 'colorInfo'
  | 'colorInherit'
  | 'colorPrimary'
  | 'colorSecondary'
  | 'colorSuccess'
  | 'colorWarning'
  | 'fontSizeInherit'
  | 'fontSizeLg'
  | 'fontSizeMd'
  | 'fontSizeSm';

export function SvgIconStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      root: {
        display: 'inline-block',
        fill: 'currentColor',
        flexShrink: 0,
        height: '1em',
        transition: 'fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        userSelect: 'none',
        width: '1em'
      },
      colorError: {
        color: theme.palette.error.main
      },
      colorInfo: {
        color: theme.palette.info.main
      },
      colorInherit: {
        color: 'inherit'
      },
      colorPrimary: {
        color: theme.palette.primary.main
      },
      colorSecondary: {
        color: theme.palette.secondary.main
      },
      colorSuccess: {
        color: theme.palette.success.main
      },
      colorWarning: {
        color: theme.palette.warning.main
      },
      fontSizeInherit: {
        fontSize: 'inherit'
      },
      fontSizeLg: {
        fontSize: '2rem'
      },
      fontSizeMd: {
        fontSize: '1.5rem'
      },
      fontSizeSm: {
        fontSize: '1.25rem'
      }
    },
    'SvgIcon'
  );
}

const options: StyleSheetFactoryOptions = {
  index: 2,
  meta: SvgIconClassKey
};

@Component({
  selector: SvgIconClassKey,
  encapsulation: ViewEncapsulation.None,
  providers: [SvgIconService],
  template: `<svg
    #svgElement
    xmlns="http://www.w3.org/2000/svg"
    [attr.class]="composedClasses"
    [attr.shape-rendering]="shapeRendering ? shapeRendering : null"
    [attr.viewBox]="viewBox"
  ></svg>`
})
export class SvgIcon extends Ground implements AfterViewInit, OnChanges, OnDestroy, OnInit {
  @Input() color: ColorProp = 'primary';
  @Input() fontSize: FontSizeProp = 'md';
  @Input() icon: IconProp;
  @Input() iconStyle: IconStyleProp = 'filled';
  @Input() shapeRendering: ShapeRenderingProp;
  @Input() svgTitle: SvgTitleProp = '';
  @Input() viewBox: ViewBoxProp = '0 0 24 24';

  @ViewChild('svgElement', { static: false }) public svgElement: ElementRef;

  iconUrl = '';
  mediaSubscription: Subscription;
  svgString = '';
  theme: Theme = useTheme();

  constructor(private svgIconService: SvgIconService) {
    super();
    this.classes = provideClasses(SvgIconStyles, options);
  }

  ngOnInit(): void {
    this.prepareComponent();
  }

  ngOnChanges(): void {
    this.prepareComponent();
  }

  ngAfterViewInit(): void {
    this.prepareComponent();
  }

  ngOnDestroy(): void {
    if (this.mediaSubscription) {
      this.mediaSubscription.unsubscribe();
    }
  }

  prepareComponent(): void {
    this.composeIconUrl();
    this.composeIcon();
    this.composeClasses();
  }

  composeClasses(): void {
    const colorClass = this.color ? this.classes[`color${capitalize(this.color)}`] : '';
    const fontSizeClass = this.classes[`fontSize${capitalize(this.fontSize)}`];
    const composedClasses = `${this.classes.root} ${colorClass} ${fontSizeClass} ${this.className}`.trim();
    this.composedClasses = replaceMultipleSpaces(composedClasses);
  }

  composeIcon(): void {
    if (this.iconUrl) {
      const svg = store.getState().svgs[this.iconUrl];
      if (svg) {
        this.showIcon(svg);
      } else {
        this.getIcon();
      }
    }
  }

  composeIconUrl(): void {
    if (this.icon) {
      this.iconUrl = isUrl(this.icon) ? this.icon : `${this.theme.media.baseUrl}/icons/${this.icon}/${this.iconStyle}.svg`;
    }
  }

  getIcon(): void {
    if (this.iconUrl) {
      this.mediaSubscription = this.svgIconService.getIcon(this.iconUrl).subscribe(svg => {
        this.svgString = svg;
        this.parseIcon();
      });
    }
  }

  parseIcon(): void {
    const parser = new DOMParser();
    const parsedSvg = parser.parseFromString(this.svgString, 'image/svg+xml');
    const svgElement = parsedSvg.querySelector('svg');
    if (this.svgTitle) {
      const svgTitle = parsedSvg.createElement('title');
      const svgTitleText = parsedSvg.createTextNode(this.svgTitle);
      svgTitle.appendChild(svgTitleText);
      svgElement ? svgElement.prepend(svgTitle) : null;
    }
    const innerSvg = svgElement ? svgElement.innerHTML : '';
    store.dispatch(addSvg({ [this.iconUrl]: innerSvg }));
    this.showIcon(innerSvg);
  }

  showIcon(icon: string = ''): void {
    if (this.svgElement) {
      this.svgElement.nativeElement.innerHTML = icon;
    }
  }
}

const theme = useTheme();
const SvgIconStyle = SvgIconStyles(theme);

export default SvgIconStyle;
