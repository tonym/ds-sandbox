import { Component, Input, OnChanges, OnInit, ViewEncapsulation } from '@angular/core';
import { Styles, StyleSheetFactoryOptions, Theme } from '../../types/index';
import { applyOverrides, fade, getClassKey, replaceMultipleSpaces } from '../../helpers/index';
import provideClasses from '../../styles/provideClasses/index';
import useTheme from '../../styles/useTheme/index';
import { Ground, GroundProps } from '../Ground/index';

type IconProp = string;
type IconStyleProp = 'filled' | 'outlined' | 'rounded' | 'sharp' | 'twotone';
type SelectedIconProp = string;
type SelectedIconStyleProp = 'filled' | 'outlined' | 'rounded' | 'sharp' | 'twotone';
type SelectedProp = boolean | string;
type TitleProp = string;

export interface MenuItemProps extends GroundProps {
  icon?: IconProp;
  iconStyle?: IconStyleProp;
  selected?: SelectedProp;
  selectedIcon?: SelectedIconProp;
  selectedIconStyle?: SelectedIconStyleProp;
  title?: TitleProp;
}

export const MenuItemClassKey = getClassKey('menu-item');

export type MenuItemClasses = 'root' | 'selected' | 'titleIcon';

export function MenuItemStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      root: {
        cursor: 'pointer',
        height: theme.spacing.unit * 5,
        overflow: 'hidden',
        padding: `${theme.spacing.unit * 1.5}px ${theme.spacing.unit * 2}px`,
        '&:hover': {
          backgroundColor: theme.palette.action.hover
        }
      },
      selected: {},
      titleIcon: {
        paddingRight: theme.spacing.unit,
        verticalAlign: 'text-top'
      }
    },
    'MenuItem'
  );
}

const options: StyleSheetFactoryOptions = {
  index: 2,
  meta: MenuItemClassKey
};

@Component({
  selector: MenuItemClassKey,
  encapsulation: ViewEncapsulation.None,
  template: `
    <og-flex [className]="composedClasses" alignItems="center">
      <og-svg-icon
        *ngIf="selected"
        [className]="classes.titleIcon"
        color="primary"
        [icon]="selectedIcon"
        [iconStyle]="selectedIconStyle"
      ></og-svg-icon>
      <og-svg-icon
        *ngIf="icon && !selected"
        [className]="classes.titleIcon"
        color="inherit"
        [icon]="icon"
        [iconStyle]="iconStyle"
      ></og-svg-icon>
      <og-flex-child flex="1">
        <og-typography color="inherit" [fontWeight]="titleFontWeight" variant="h5">
          {{ title }}
        </og-typography>
      </og-flex-child>
    </og-flex>
  `
})
export class MenuItem extends Ground implements OnChanges, OnInit {
  @Input() icon: IconProp = '';
  @Input() iconStyle: IconStyleProp = 'filled';
  @Input() selected: SelectedProp = false;
  @Input() selectedIcon: SelectedIconProp = 'check';
  @Input() selectedIconStyle: SelectedIconStyleProp = 'filled';
  @Input() title: TitleProp = '';

  titleFontWeight = 'regular';

  constructor() {
    super();
    this.classes = provideClasses(MenuItemStyles, options);
  }

  ngOnInit(): void {
    this.prepareComponent();
  }

  ngOnChanges(): void {
    this.prepareComponent();
  }

  prepareComponent(): void {
    this.composeClasses();
    this.selectTitleFontWeight();
  }

  composeClasses(): void {
    const selectedClass = this.selected && this.selected !== 'false' ? this.classes.selected : '';
    const composedClasses = `${this.classes.root} ${selectedClass} ${this.className} item`.trim();
    this.composedClasses = replaceMultipleSpaces(composedClasses);
  }

  selectTitleFontWeight(): void {
    this.titleFontWeight = this.selected && this.selected !== 'false' ? 'semiBold' : 'regular';
  }
}

const theme = useTheme();
const MenuItemStyle = MenuItemStyles(theme);

export default MenuItemStyle;
