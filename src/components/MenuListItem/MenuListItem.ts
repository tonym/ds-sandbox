import { Component, Input, OnChanges, OnInit, ViewEncapsulation } from '@angular/core';
import { Styles, StyleSheetFactoryOptions, Theme } from '../../types/index';
import { applyOverrides, fade, getClassKey, replaceMultipleSpaces, transitions } from '../../helpers/index';
import provideClasses from '../../styles/provideClasses/index';
import useTheme from '../../styles/useTheme/index';
import { Ground, GroundProps } from '../Ground/index';

type HoverProp = boolean | string;
type IconProp = string;
type IconStyleProp = 'filled' | 'outlined' | 'rounded' | 'sharp' | 'twotone';
type SelectedProp = boolean | string;
type SubtitleProp = string;
type TitleProp = string;

export interface MenuListItemProps extends GroundProps {
  hover: HoverProp;
  icon: IconProp;
  iconStyle: IconStyleProp;
  selected: SelectedProp;
  subtitle: SubtitleProp;
  title: TitleProp;
}

export const MenuListItemClassKey = getClassKey('menu-list-item');

export type MenuListItemClasses = 'root' | 'selected' | 'selectedBackground' | 'subtitle';

export function MenuListItemStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      root: {
        cursor: 'pointer',
        overflow: 'hidden',
        padding: `${theme.spacing.unit * 1.5}px ${theme.spacing.unit * 2}px`,
        transition: transitions.create(['background-color'], {
          duration: theme.transitions.duration.short
        }),
        '&.hover:hover': {
          backgroundColor: fade(theme.palette.grey[500], 0.75),
          '& .icon-hover': {
            transform: 'translate3d(38px, 0, 0)',
            '& .title-icon': {
              paddingRight: 0
            }
          }
        },
        '& .icon-hover': {
          left: -38,
          position: 'relative',
          transition: transitions.create(['transform'], {
            duration: theme.transitions.duration.short
          }),
          '& .title-icon': {
            marginRight: theme.spacing.unit,
            paddingRight: theme.spacing.unit - 2,
            transition: transitions.create(['padding-right'], {
              duration: theme.transitions.duration.short
            })
          }
        },
        '& .title-icon': {
          lineHeight: 0.5,
          '&.icon-no-hover': {
            marginRight: theme.spacing.unit
          }
        }
      },
      selected: {
        '& .title-icon': {
          paddingRight: theme.spacing.unit,
          '&.icon-no-hover': {
            marginRight: 0
          }
        }
      },
      selectedBackground: {
        backgroundColor: theme.palette.grey[100]
      },
      subtitle: {
        opacity: 0.665,
        paddingLeft: theme.spacing.unit * 3
      }
    },
    'MenuListItem'
  );
}

const options: StyleSheetFactoryOptions = {
  index: 2,
  meta: MenuListItemClassKey
};

@Component({
  selector: MenuListItemClassKey,
  encapsulation: ViewEncapsulation.None,
  template: `
    <og-flex [className]="composedClasses" alignItems="center">
      <og-flex-child flex="1">
        <og-flex [className]="iconClass">
          <div [class]="titleIconClass">
            <og-svg-icon *ngIf="icon" [color]="iconColor" [icon]="icon" [iconStyle]="iconStyle"></og-svg-icon>
            <og-svg-icon *ngIf="!icon && selected" color="primary" icon="check" [iconStyle]="iconStyle"></og-svg-icon>
          </div>
          <og-flex-child alignSelf="center" flex="1">
            <og-typography color="inherit" [fontWeight]="titleFontWeight" variant="h5">
              {{ title }}
            </og-typography>
          </og-flex-child>
        </og-flex>
      </og-flex-child>
      <og-flex-child>
        <og-typography [className]="classes.subtitle" color="inherit" fontWeight="regular" variant="h5">
          {{ subtitle }}
        </og-typography>
      </og-flex-child>
    </og-flex>
  `
})
export class MenuListItem extends Ground implements OnChanges, OnInit {
  @Input() hover: HoverProp = true;
  @Input() icon: IconProp = '';
  @Input() iconStyle: IconStyleProp = 'filled';
  @Input() selected: SelectedProp = false;
  @Input() subtitle: SubtitleProp = '';
  @Input() title: TitleProp = '';

  iconClass = '';
  iconColor = 'inherit';
  titleIconClass = 'title-icon';
  titleFontWeight = 'regular';

  constructor() {
    super();
    this.classes = provideClasses(MenuListItemStyles, options);
  }

  ngOnInit(): void {
    this.prepareComponent();
  }

  ngOnChanges(): void {
    this.prepareComponent();
  }

  prepareComponent(): void {
    this.composeClasses();
    this.composeIconClass();
    this.selectIconColor();
    this.selectTitleIconClass();
    this.selectTitleFontWeight();
  }

  composeClasses(): void {
    const hoverClass = this.hover && this.hover !== 'false' ? 'hover' : '';
    const selectedClass = this.selected && this.selected !== 'false' ? `${this.classes.selected} selected` : '';
    const selectedBackgroundClass = this.selected && this.selected !== 'false' ? this.classes.selectedBackground : '';
    const composedClasses = `${this.classes.root} ${hoverClass} ${selectedClass} ${selectedBackgroundClass} ${this.className} item`.trim();
    this.composedClasses = replaceMultipleSpaces(composedClasses);
  }

  composeIconClass(): void {
    if (this.selected && this.selected !== 'false') {
      this.iconClass = '';
    } else {
      this.iconClass = this.hover && this.hover !== 'false' && this.icon ? 'icon-hover' : '';
    }
  }

  selectIconColor(): void {
    this.iconColor = this.selected && this.selected !== 'false' ? 'primary' : 'inherit';
  }

  selectTitleIconClass(): void {
    this.titleIconClass = 'title-icon';
    if (this.icon) {
      this.titleIconClass = this.hover && this.hover !== 'false' ? 'title-icon' : 'title-icon icon-no-hover';
    }
  }

  selectTitleFontWeight(): void {
    this.titleFontWeight = this.selected && this.selected !== 'false' ? 'semiBold' : 'regular';
  }
}

const theme = useTheme();
const MenuListItemStyle = MenuListItemStyles(theme);

export default MenuListItemStyle;
