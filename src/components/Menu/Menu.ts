import { Component, ElementRef, Input, OnChanges, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Styles, StyleSheetFactoryOptions, Theme } from '../../types/index';
import { applyOverrides, getClassKey, replaceMultipleSpaces } from '../../helpers/index';
import provideClasses from '../../styles/provideClasses/index';
import useTheme from '../../styles/useTheme/index';
import { Ground, GroundProps } from '../Ground/index';

type ElevationProp = number | string;
type OpenProp = boolean | string;
type VariantProp = 'dark' | 'light';

export interface MenuProps extends GroundProps {
  elevation?: ElevationProp;
  open?: OpenProp;
  variant?: VariantProp;
}

export const MenuClassKey = getClassKey('menu');

export type MenuClasses = 'root' | 'dark' | 'light' | 'open' | 'paperRoot';

export function MenuStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      root: {
        opacity: 0,
        paddingTop: 12,
        position: 'absolute',
        transform: 'scale(0.75, 0.5625)',
        transformOrigin: '0px 26px',
        transition:
          'opacity 251ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, transform 167ms cubic-bezier(0.4, 0, 0.2, 1) 84ms, visibility 251ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        visibility: 'hidden',
        zIndex: -1000
      },
      dark: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white
      },
      light: {
        backgroundColor: 'transparent',
        color: theme.palette.text.primary
      },
      open: {
        opacity: 1,
        transform: 'none',
        visibility: 'visible',
        zIndex: theme.zIndex.modal
      },
      paperRoot: {}
    },
    'Menu'
  );
}

const options: StyleSheetFactoryOptions = {
  index: 2,
  meta: MenuClassKey
};

@Component({
  selector: MenuClassKey,
  encapsulation: ViewEncapsulation.None,
  template: `
    <div [class]="composedClasses" #content>
      <og-paper [className]="variantClass" [classes]="{ root: classes.paperRoot }" [elevation]="elevation">
        <ng-content></ng-content>
      </og-paper>
    </div>
  `
})
export class Menu extends Ground implements OnChanges, OnInit {
  @Input() elevation: ElevationProp = 1;
  @Input() open: OpenProp = false;
  @Input() variant: VariantProp = 'light';

  @ViewChild('content', { static: false }) public content: ElementRef;

  menuBottom: number | undefined;
  offset: number | undefined;
  styleBottom: string | undefined;
  variantClass = '';

  constructor() {
    super();
    this.classes = provideClasses(MenuStyles, options);
  }

  ngOnInit(): void {
    this.prepareComponent();
  }

  ngOnChanges(): void {
    this.prepareComponent();
  }

  prepareComponent(): void {
    this.composeClasses();
    this.composeVariantClass();
    this.openMenu();
  }

  composeClasses(): void {
    const openClass = this.open && this.open !== 'false' ? this.classes.open : '';
    const composedClasses = `${this.classes.root} ${openClass} ${this.className}`.trim();
    this.composedClasses = replaceMultipleSpaces(composedClasses);
  }

  composeVariantClass(): void {
    this.variantClass = this.classes[this.variant];
  }

  openMenu(): void {
    if (this.open) {
      this.menuBottom = this.content ? this.content.nativeElement.getBoundingClientRect().bottom : undefined;
      this.setOffset();
      this.setStyleBottom();
    }
  }

  setOffset(): void {
    const clientHeight = window.innerHeight;
    this.offset = clientHeight && (this.menuBottom || this.menuBottom === 0) ? clientHeight - this.menuBottom : undefined;
  }

  setStyleBottom(): void {
    this.styleBottom = undefined;
    if (this.content) {
      this.styleBottom = (this.offset || this.offset === 0) && this.offset < 16 ? '16px' : 'auto';
      this.content.nativeElement.style.bottom = this.styleBottom;
    }
  }
}

const theme = useTheme();
const MenuStyle = MenuStyles(theme);

export default MenuStyle;
