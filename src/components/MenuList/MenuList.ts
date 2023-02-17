import { Component, Input, OnChanges, OnInit, ViewEncapsulation } from '@angular/core';
import { Styles, StyleSheetFactoryOptions, Theme } from '../../types/index';
import { applyOverrides, fade, getClassKey, replaceMultipleSpaces } from '../../helpers/index';
import provideClasses from '../../styles/provideClasses/index';
import useTheme from '../../styles/useTheme/index';
import { Ground, GroundProps } from '../Ground/index';

type ElevationProp = number | string;
type FullWidthProp = boolean | string;
type OutlinedProp = boolean | string;
type SquareProp = boolean | string;
type VariantProp = 'dark' | 'light';

export interface MenuListProps extends GroundProps {
  elevation: ElevationProp;
  fullWidth: FullWidthProp;
  outlined: OutlinedProp;
  square: SquareProp;
  variant: VariantProp;
}

export const MenuListClassKey = getClassKey('menu-list');

export type MenuListClasses = 'root' | 'dark' | 'fullWidth' | 'light' | 'paperRoot';

export function MenuListStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      root: {
        display: 'inline-block',
        paddingTop: 12
      },
      dark: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
        '& .hover:hover': {
          backgroundColor: `${fade(theme.palette.grey[800], 0.75)} !important`
        },
        '& .selected': {
          backgroundColor: theme.palette.grey[900]
        }
      },
      fullWidth: {
        display: 'block',
        width: '100%'
      },
      light: {
        backgroundColor: 'transparent',
        color: theme.palette.text.primary
      },
      paperRoot: {}
    },
    'Menu'
  );
}

const options: StyleSheetFactoryOptions = {
  index: 2,
  meta: MenuListClassKey
};

@Component({
  selector: MenuListClassKey,
  encapsulation: ViewEncapsulation.None,
  template: `
    <og-paper
      [className]="composedClasses"
      [classes]="{ root: classes.paperRoot }"
      [elevation]="elevation"
      [outlined]="outlined"
      [square]="square"
    >
      <ng-content></ng-content>
    </og-paper>
  `
})
export class MenuList extends Ground implements OnChanges, OnInit {
  @Input() elevation: ElevationProp = 0;
  @Input() fullWidth: FullWidthProp = true;
  @Input() outlined: OutlinedProp = false;
  @Input() square: SquareProp = true;
  @Input() variant: VariantProp = 'light';

  constructor() {
    super();
    this.classes = provideClasses(MenuListStyles, options);
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
    const fullWidthClass = this.fullWidth && this.fullWidth !== 'false' ? this.classes.fullWidth : '';
    const variantClass = this.classes[this.variant];
    const composedClasses = `${this.classes.root} ${fullWidthClass} ${variantClass} ${this.className}`.trim();
    this.composedClasses = replaceMultipleSpaces(composedClasses);
  }
}

const theme = useTheme();
const MenuListStyle = MenuListStyles(theme);

export default MenuListStyle;
