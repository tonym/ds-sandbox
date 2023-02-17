import { Component, Input, OnChanges, OnInit, ViewEncapsulation } from '@angular/core';
import { Styles, StyleSheetFactoryOptions, Theme } from '../../types/index';
import { applyOverrides, capitalize, getClassKey, pxToRem, replaceMultipleSpaces, transitions } from '../../helpers/index';
import provideClasses from '../../styles/provideClasses/index';
import useTheme from '../../styles/useTheme/index';
import { Ground, GroundProps } from '../Ground/index';

type AnchorOriginProp = 'bottomLeft' | 'bottomRight' | 'topLeft' | 'topRight';
type ColorProp = 'error' | 'info' | 'primary' | 'secondary' | 'success' | 'warning';
type LabelProp = number | string;
type MaxProp = number | string;
type OverlapProp = 'circle' | 'rectangle';
type ShowZeroProp = boolean | string;
type VariantProp = 'dot' | 'standard';

export interface BadgeProps extends GroundProps {
  anchorOrigin?: AnchorOriginProp;
  color?: ColorProp;
  label?: LabelProp;
  max?: MaxProp;
  overlap?: OverlapProp;
  showZero?: ShowZeroProp;
  variant?: VariantProp;
}

export const BadgeClassKey = getClassKey('badge');

export type BadgeClasses =
  | 'root'
  | 'anchorOriginBottomLeftCircle'
  | 'anchorOriginBottomLeftRectangle'
  | 'anchorOriginBottomRightCircle'
  | 'anchorOriginBottomRightRectangle'
  | 'anchorOriginTopLeftCircle'
  | 'anchorOriginTopLeftRectangle'
  | 'anchorOriginTopRightCircle'
  | 'anchorOriginTopRightRectangle'
  | 'badge'
  | 'colorError'
  | 'colorInfo'
  | 'colorPrimary'
  | 'colorSecondary'
  | 'colorSuccess'
  | 'colorWarning'
  | 'dot';

export function BadgeStyles(theme: Theme): Styles {
  const radiusDot = 4;
  const radiusStandard = 10;

  return applyOverrides(
    {
      root: {
        display: 'inline-flex',
        flexShrink: 0,
        position: 'relative',
        verticalAlign: 'middle'
      },
      anchorOriginBottomLeftCircle: {
        bottom: '14%',
        left: '14%',
        transform: 'scale(1) translate(-50%, 50%)',
        transformOrigin: '0% 100%'
      },
      anchorOriginBottomLeftRectangle: {
        bottom: 0,
        left: 0,
        transform: 'scale(1) translate(-50%, 50%)',
        transformOrigin: '0% 100%'
      },
      anchorOriginBottomRightCircle: {
        bottom: '14%',
        right: '14%',
        transform: 'scale(1) translate(50%, 50%)',
        transformOrigin: '100% 100%'
      },
      anchorOriginBottomRightRectangle: {
        bottom: 0,
        right: 0,
        transform: 'scale(1) translate(50%, 50%)',
        transformOrigin: '100% 100%'
      },
      anchorOriginTopLeftCircle: {
        top: '14%',
        left: '14%',
        transform: 'scale(1) translate(-50%, -50%)',
        transformOrigin: '0% 0%'
      },
      anchorOriginTopLeftRectangle: {
        top: 0,
        left: 0,
        transform: 'scale(1) translate(-50%, -50%)',
        transformOrigin: '0% 0%'
      },
      anchorOriginTopRightCircle: {
        top: '14%',
        right: '14%',
        transform: 'scale(1) translate(50%, -50%)',
        transformOrigin: '100% 0%'
      },
      anchorOriginTopRightRectangle: {
        top: 0,
        right: 0,
        transform: 'scale(1) translate(50%, -50%)',
        transformOrigin: '100% 0%'
      },
      badge: {
        alignContent: 'center',
        alignItems: 'center',
        borderRadius: radiusStandard,
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        fontFamily: theme.typography.fontFamily,
        fontWeight: theme.typography.fontWeightMedium,
        fontSize: pxToRem(12),
        height: radiusStandard * 2,
        justifyContent: 'center',
        lineHeight: 1,
        minWidth: radiusStandard * 2,
        padding: '0 6px',
        position: 'absolute',
        transition: transitions.create('transform', {
          easing: theme.transitions.easing.easeInOut,
          duration: theme.transitions.duration.enteringScreen
        }),
        zIndex: 1
      },
      colorError: {
        backgroundColor: theme.palette.error.main,
        color: theme.palette.error.contrastText
      },
      colorInfo: {
        backgroundColor: theme.palette.info.main,
        color: theme.palette.info.contrastText
      },
      colorPrimary: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText
      },
      colorSecondary: {
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.secondary.contrastText
      },
      colorSuccess: {
        backgroundColor: theme.palette.success.main,
        color: theme.palette.success.contrastText
      },
      colorWarning: {
        backgroundColor: theme.palette.warning.main,
        color: theme.palette.warning.contrastText
      },
      dot: {
        borderRadius: radiusDot,
        height: radiusDot * 2,
        minWidth: radiusDot * 2,
        padding: 0
      }
    },
    'Badge'
  );
}

const options: StyleSheetFactoryOptions = {
  index: 2,
  meta: BadgeClassKey
};

@Component({
  selector: BadgeClassKey,
  encapsulation: ViewEncapsulation.None,
  template: `
    <span [class]="composedClasses">
      <ng-content></ng-content>
      <span *ngIf="shouldDisplay" [class]="composedBadgeClasses">
        <ng-container *ngIf="variant === 'standard'">
          {{ composedLabel }}
        </ng-container>
      </span>
    </span>
  `
})
export class Badge extends Ground implements OnChanges, OnInit {
  @Input() anchorOrigin: AnchorOriginProp = 'topRight';
  @Input() color: ColorProp = 'primary';
  @Input() label: LabelProp = 0;
  @Input() max: MaxProp = 99;
  @Input() overlap: OverlapProp = 'rectangle';
  @Input() showZero: ShowZeroProp = false;
  @Input() variant: VariantProp = 'standard';

  public composedBadgeClasses = '';
  public composedLabel = '0';
  public shouldDisplay = false;

  constructor() {
    super();
    this.classes = provideClasses(BadgeStyles, options);
  }

  ngOnInit(): void {
    this.prepareComponent();
  }

  ngOnChanges(): void {
    this.prepareComponent();
  }

  prepareComponent(): void {
    this.composeClasses();
    this.composeBadgeClasses();
    this.composeLabel();
    this.prepareDisplay();
  }

  composeClasses(): void {
    this.composedClasses = `${this.classes.root} ${this.className}`.trim();
  }

  composeBadgeClasses(): void {
    this.composedBadgeClasses = '';
    const placementClass = this.classes[`anchorOrigin${capitalize(this.anchorOrigin)}${capitalize(this.overlap)}`];
    const colorClass = this.classes[`color${capitalize(this.color)}`];
    const variantClass = this.variant === 'dot' ? this.classes.dot : '';
    const composedBadgeClasses = `${this.classes.badge} ${placementClass} ${colorClass} ${variantClass}`.trim();
    this.composedBadgeClasses = replaceMultipleSpaces(composedBadgeClasses);
  }

  composeLabel(): void {
    const checkedLabel = isNaN(+this.label) ? 0 : +this.label;
    const checkedMax = isNaN(+this.max) ? 0 : +this.max;
    this.composedLabel = checkedLabel > checkedMax ? `${checkedMax}+` : `${checkedLabel}`;
  }

  prepareDisplay(): void {
    this.shouldDisplay = this.composedLabel !== '0' ? true : false;
    this.shouldDisplay = !this.shouldDisplay && this.showZero && this.showZero !== 'false' ? true : this.shouldDisplay;
  }
}

const theme = useTheme();
const BadgeStyle = BadgeStyles(theme);

export default BadgeStyle;
