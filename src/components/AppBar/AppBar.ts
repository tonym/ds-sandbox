import { Component, Input, OnChanges, OnInit, ViewEncapsulation } from '@angular/core';
import { Styles, StyleSheetFactoryOptions, Theme } from '../../types/index';
import { applyOverrides, capitalize, getClassKey, replaceMultipleSpaces } from '../../helpers/index';
import provideClasses from '../../styles/provideClasses/index';
import useTheme from '../../styles/useTheme/index';
import { Ground, GroundProps } from '../Ground/index';

type BackgroundColorProp = 'default' | 'error' | 'info' | 'inherit' | 'primary' | 'secondary' | 'success' | 'transparent' | 'warning';
type ElevatedProp = boolean | string;
type PositionProp = 'absolute' | 'fixed' | 'relative' | 'static';
type PlacementProp = 'top' | 'bottom';

export interface AppBarProps extends GroundProps {
  backgroundColor?: BackgroundColorProp;
  elevated?: ElevatedProp;
  placement?: PlacementProp;
  position?: PositionProp;
}

export const AppBarClassKey = getClassKey('app-bar');

export type AppBarClasses =
  | 'root'
  | 'backgroundColorDefault'
  | 'backgroundColorError'
  | 'backgroundColorInfo'
  | 'backgroundColorInherit'
  | 'backgroundColorPrimary'
  | 'backgroundColorSecondary'
  | 'backgroundColorSuccess'
  | 'backgroundColorTransparent'
  | 'backgroundColorWarning'
  | 'elevatedBottom'
  | 'elevatedTop'
  | 'placementBottom'
  | 'placementTop'
  | 'positionFixed'
  | 'positionAbsolute'
  | 'positionStatic'
  | 'positionRelative';

export function AppBarStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      root: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        boxSizing: 'border-box',
        zIndex: theme.zIndex.appBar,
        flexShrink: 0
      },
      backgroundColorDefault: {
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary
      },
      backgroundColorError: {
        backgroundColor: theme.palette.error.main,
        color: theme.palette.error.contrastText
      },
      backgroundColorInfo: {
        backgroundColor: theme.palette.info.main,
        color: theme.palette.info.contrastText
      },
      backgroundColorPrimary: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText
      },
      backgroundColorSecondary: {
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.secondary.contrastText
      },
      backgroundColorSuccess: {
        backgroundColor: theme.palette.success.main,
        color: theme.palette.success.contrastText
      },
      backgroundColorInherit: {
        color: 'inherit'
      },
      backgroundColorTransparent: {
        backgroundColor: 'transparent',
        color: 'inherit'
      },
      backgroundColorWarning: {
        backgroundColor: theme.palette.warning.main,
        color: theme.palette.warning.contrastText
      },
      elevatedBottom: {
        boxShadow: theme.shadows[4]
      },
      elevatedTop: {
        boxShadow: theme.shadows[4]
      },
      placementBottom: {
        bottom: 0,
        left: 'auto',
        right: 0
      },
      placementTop: {
        left: 'auto',
        right: 0,
        top: 0
      },
      positionFixed: {
        position: 'fixed',
        '@media print': {
          position: 'absolute'
        }
      },
      positionAbsolute: {
        position: 'absolute'
      },
      positionStatic: {
        position: 'static',
        transform: 'translateZ(0)'
      },
      positionRelative: {
        position: 'relative'
      }
    },
    'AppBar'
  );
}

const options: StyleSheetFactoryOptions = {
  index: 2,
  meta: AppBarClassKey
};

@Component({
  selector: AppBarClassKey,
  encapsulation: ViewEncapsulation.None,
  template: `
    <div [className]="composedClasses">
      <ng-content></ng-content>
    </div>
  `
})
export class AppBar extends Ground implements OnChanges, OnInit {
  @Input() backgroundColor: BackgroundColorProp = 'primary';
  @Input() elevated: ElevatedProp = true;
  @Input() placement: PlacementProp = 'top';
  @Input() position: PositionProp = 'fixed';

  constructor() {
    super();
    this.classes = provideClasses(AppBarStyles, options);
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
    const backgroundColorClass = this.classes[`backgroundColor${capitalize(this.backgroundColor)}`];
    const elevatedClass = this.elevated && this.elevated !== 'false' ? this.classes[`elevated${capitalize(this.placement)}`] : '';
    const placementClass =
      this.position === 'absolute' || this.position === 'fixed' ? this.classes[`placement${capitalize(this.placement)}`] : '';
    const positionClass = this.classes[`position${capitalize(this.position)}`];
    const composedClasses =
      `${this.classes.root} ${backgroundColorClass} ${elevatedClass} ${placementClass} ${positionClass} ${this.className}`.trim();
    this.composedClasses = replaceMultipleSpaces(composedClasses);
  }
}

const theme = useTheme();
const AppBarStyle = AppBarStyles(theme);

export default AppBarStyle;
