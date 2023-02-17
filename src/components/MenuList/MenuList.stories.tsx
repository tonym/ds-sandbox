import { moduleMetadata } from '@storybook/angular';
import { HttpClientModule } from '@angular/common/http';
import { Story } from '@storybook/angular/types-6-0';
import { PaperModule } from '../Paper/index';
import { MenuListItemModule } from '../MenuListItem/index';
import { MenuList as MenuListComponent } from './MenuList';
import content from './readme.md';

const title = 'Components/Menu List';

export default {
  argTypes: {
    elevation: {
      control: {
        max: 24,
        min: 0,
        type: 'number'
      }
    },
    fullWidth: {
      control: {
        type: 'boolean'
      }
    },
    outlined: {
      control: {
        type: 'boolean'
      }
    },
    square: {
      control: {
        type: 'boolean'
      }
    },
    variant: {
      control: {
        type: 'inline-radio'
      },
      options: ['dark', 'light']
    }
  },
  component: MenuListComponent,
  decorators: [
    moduleMetadata({
      declarations: [MenuListComponent],
      imports: [HttpClientModule, MenuListItemModule, PaperModule]
    })
  ],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/gS8qng4JID7dcHO3xq65ln/%5BGemini%5D-opensesame?node-id=705%3A25823'
    },
    docs: {
      page: content
    }
  },
  title: title
};

const Template: Story<MenuListComponent> = (args: MenuListComponent) => ({
  props: args,
  template: `
    <og-menu-list
      [elevation]="elevation"
      [fullWidth]="fullWidth"
      [outlined]="outlined"
      [square]="square"
      [variant]="variant"
    >
      <og-menu-list-item selected="true" subtitle="(1)" title="Menu Item One"></og-menu-list-item>
      <og-menu-list-item icon="info" subtitle="(2)" title="Menu Item Two"></og-menu-list-item>
      <og-menu-list-item icon="info" subtitle="(3)" title="Menu Item Three"></og-menu-list-item>
    </og-menu-list>`
});

export const MenuList = Template.bind({});
