import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Styles, StyleSheetFactoryOptions, Theme } from '../../types/index';
import { applyOverrides, getClassKey } from '../../helpers/index';
import WithStyles from '../../styles/withStyles/index';
import useTheme from '../../styles/useTheme/index';
import { Ground, GroundProps } from '../Ground/index';

type idProp = string;

export interface TabPanelProps extends GroundProps {
  id: idProp;
}

export const TabPanelClassKey = getClassKey('tab-panel');

export type TabPanelClasses = 'root';

export function TabPanelStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      root: {
        padding: 8
      }
    },
    'TabPanel'
  );
}

const options: StyleSheetFactoryOptions = {
  index: 2,
  meta: TabPanelClassKey
};

@Component({
  selector: TabPanelClassKey,
  encapsulation: ViewEncapsulation.None,
  template: `
    <div [class]="composedClasses" [id]="id">
      <ng-content></ng-content>
    </div>
  `
})
@WithStyles(TabPanelStyles, options)
export class TabPanel extends Ground implements OnInit {
  @Input() id: idProp = this.getUniqueId();

  ngOnInit(): void {
    this.composeClasses();
  }

  getUniqueId(): string {
    return `${TabPanelClassKey}-${Math.round(Math.random() * 1e5)}`;
  }

  composeClasses(): void {
    this.composedClasses = `${this.classes.root} ${this.className}`.trim();
  }
}

const theme = useTheme();
const TabPanelStyle = TabPanelStyles(theme);

export default TabPanelStyle;
