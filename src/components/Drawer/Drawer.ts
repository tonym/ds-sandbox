import { Component, Input, OnChanges, OnInit, ViewEncapsulation } from '@angular/core';
import { Styles, StyleSheetFactoryOptions, Theme } from '../../types/index';
import { applyOverrides, capitalize, getClassKey } from '../../helpers/index';
import provideClasses from '../../styles/provideClasses/index';
import useTheme from '../../styles/useTheme/index';
import { Ground, GroundProps } from '../Ground/index';

type AnchorProp = 'bottom' | 'left' | 'right' | 'top';
type ElevationProp = number | string;
type OpenProp = boolean | string;
type VariantProp = 'permanent' | 'persistent' | 'temporary';

export interface DrawerProps extends GroundProps {
  anchor: AnchorProp;
  elevation: ElevationProp;
  open: OpenProp;
  variant: VariantProp;
}

export const DrawerClassKey = getClassKey('drawer');

export type DrawerClasses =
  | 'root'
  | 'permanent'
  | 'permanentBottom'
  | 'permanentLeft'
  | 'permanentRight'
  | 'permanentTop'
  | 'persistent'
  | 'persistentBottom'
  | 'persistentLeft'
  | 'persistentRight'
  | 'persistentTop'
  | 'temporary'
  | 'temporaryBottom'
  | 'temporaryLeft'
  | 'temporaryRight'
  | 'temporaryTop';

export function DrawerStyles(theme: Theme): Styles {
  const drawerSize = 268;

  return applyOverrides(
    {
      root: {
        overflowY: 'auto',
        WebkitOverflowScrolling: 'touch'
      },
      permanent: {
        height: drawerSize,
        position: 'fixed',
        width: drawerSize
      },
      permanentBottom: {
        borderTop: `1px solid ${theme.palette.divider}`,
        bottom: 0,
        left: 0,
        width: '100%'
      },
      permanentLeft: {
        borderRight: `1px solid ${theme.palette.divider}`,
        height: '100%',
        left: 0,
        top: 0
      },
      permanentRight: {
        borderLeft: `1px solid ${theme.palette.divider}`,
        height: '100%',
        right: 0,
        top: 0
      },
      permanentTop: {
        borderBottom: `1px solid ${theme.palette.divider}`,
        left: 0,
        top: 0,
        width: '100%'
      },
      persistent: {
        height: drawerSize,
        position: 'fixed',
        transition: 'transform ease-out 0.3s',
        width: drawerSize
      },
      persistentBottom: {
        borderTop: `1px solid ${theme.palette.divider}`,
        left: 0,
        bottom: -(drawerSize + 20),
        width: '100%',
        '&.open': {
          transform: `translate3d(0, -${drawerSize + 20}px, 0)`
        }
      },
      persistentLeft: {
        borderRight: `1px solid ${theme.palette.divider}`,
        height: '100%',
        left: -(drawerSize + 20),
        top: 0,
        '&.open': {
          transform: `translate3d(${drawerSize + 20}px, 0, 0)`
        }
      },
      persistentRight: {
        borderLeft: `1px solid ${theme.palette.divider}`,
        height: '100%',
        right: -(drawerSize + 20),
        top: 0,
        '&.open': {
          transform: `translate3d(-${drawerSize + 20}px, 0, 0)`
        }
      },
      persistentTop: {
        borderBottom: `1px solid ${theme.palette.divider}`,
        left: 0,
        top: -(drawerSize + 20),
        width: '100%',
        '&.open': {
          transform: `translate3d(0, ${drawerSize + 20}px, 0)`
        }
      },
      temporary: {
        height: drawerSize,
        position: 'fixed',
        transition: 'transform ease-out 0.3s',
        width: drawerSize,
        zIndex: theme.zIndex.drawer
      },
      temporaryBottom: {
        left: 0,
        bottom: -(drawerSize + 20),
        width: '100%',
        '&.open': {
          transform: `translate3d(0, -${drawerSize + 20}px, 0)`
        }
      },
      temporaryLeft: {
        height: '100%',
        left: -(drawerSize + 20),
        top: 0,
        '&.open': {
          transform: `translate3d(${drawerSize + 20}px, 0, 0)`
        }
      },
      temporaryRight: {
        height: '100%',
        right: -(drawerSize + 20),
        top: 0,
        '&.open': {
          transform: `translate3d(-${drawerSize + 20}px, 0, 0)`
        }
      },
      temporaryTop: {
        left: 0,
        top: -(drawerSize + 20),
        width: '100%',
        '&.open': {
          transform: `translate3d(0, ${drawerSize + 20}px, 0)`
        }
      }
    },
    'Drawer'
  );
}

const options: StyleSheetFactoryOptions = {
  index: 2,
  meta: DrawerClassKey
};

@Component({
  selector: DrawerClassKey,
  encapsulation: ViewEncapsulation.None,
  template: `
    <og-paper [className]="composedClasses" [elevation]="variant === 'temporary' ? elevation : 0" [square]="true">
      <ng-content></ng-content>
    </og-paper>
  `
})
export class Drawer extends Ground implements OnChanges, OnInit {
  @Input() anchor: AnchorProp = 'left';
  @Input() elevation: ElevationProp = 16;
  @Input() open: OpenProp = false;
  @Input() variant: VariantProp = 'temporary';

  constructor() {
    super();
    this.classes = provideClasses(DrawerStyles, options);
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
    const anchorClass = this.classes[`${this.variant}${capitalize(this.anchor)}`];
    const openClass = this.open && this.open !== 'false' ? 'open' : '';
    const variantClass = this.classes[this.variant];
    this.composedClasses = `${this.classes.root} ${anchorClass} ${openClass} ${variantClass} ${this.className}`.trim();
  }
}

const theme = useTheme();
const DrawerStyle = DrawerStyles(theme);

export default DrawerStyle;
