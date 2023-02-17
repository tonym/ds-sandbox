import { Component } from '@angular/core';
import { Classes, Styles, Theme } from '../../types/index';
import { pxToRem } from '../../helpers/index';
import { createStyles, provideClasses } from '../../styles/index';

export function AppStyles(theme: Theme): Styles {
  return createStyles({
    appBar: {
      lineHeight: 0,
      padding: `0 ${theme.spacing.unit * 4}px`
    },
    drawerHeader: {
      height: 51,
      lineHeight: '51px',
      paddingLeft: theme.spacing.unit * 3
    },
    drawerMenu: {
      height: `calc(100% - 51px)`,
      paddingLeft: theme.spacing.unit
    },
    drawerMenuTitle: {
      paddingLeft: theme.spacing.unit * 2,
      paddingTop: theme.spacing.unit * 2
    },
    faded: {
      opacity: 0.5
    },
    flex: {
      gap: theme.spacing.unit * 4
    },
    input: {
      border: 'none',
      borderRadius: theme.spacing.unit * 3,
      boxShadow: '0px 0px 2.5px rgba(136, 135, 153, 0.45)',
      fontSize: pxToRem(14),
      margin: `${theme.spacing.unit}px 0`,
      padding: theme.spacing.unit,
      paddingLeft: theme.spacing.unit * 5,
      width: '100%'
    },
    inputContainer: {
      display: 'flex',
      position: 'relative'
    },
    inputIcon: {
      left: theme.spacing.unit,
      opacity: 0.25,
      position: 'absolute',
      top: theme.spacing.unit * 2
    },
    menu: {
      marginLeft: theme.spacing.unit * -5
    },
    scrim: {
      zIndex: '100 ! important'
    },
    tabs: {
      marginBottom: -1
    }
  });
}

@Component({
  selector: 'og-app',
  templateUrl: './app.component.html'
})
export class AppComponent {
  drawerOpen = false;
  menuOpen = false;
  shouldHandle = false;

  classes: Classes;

  constructor() {
    this.classes = provideClasses(AppStyles);
  }

  toggleDrawer(): void {
    this.drawerOpen = !this.drawerOpen;
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  transitionEnd(): void {
    this.shouldHandle = !this.shouldHandle;
  }
}
