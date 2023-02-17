import { moduleMetadata } from '@storybook/angular';
import { HttpClientModule } from '@angular/common/http';
import { Story } from '@storybook/angular/types-6-0';
import { ButtonModule } from '../Button/index';
import { PaperModule } from '../Paper/index';
import { MenuItemModule } from '../MenuItem/index';
import { Menu as MenuComponent } from './Menu';
import content from './readme.md';

const title = 'Components/Menu';

export default {
  argTypes: {
    elevation: {
      control: {
        max: 24,
        min: 0,
        type: 'number'
      }
    },
    open: {
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
  component: MenuComponent,
  decorators: [
    moduleMetadata({
      declarations: [MenuComponent],
      imports: [ButtonModule, HttpClientModule, MenuItemModule, PaperModule]
    })
  ],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/gS8qng4JID7dcHO3xq65ln/%5BGemini%5D-opensesame?node-id=104%3A10998'
    },
    docs: {
      page: content
    }
  },
  title: title
};

const Template: Story<MenuComponent> = (args: MenuComponent) => ({
  props: args,
  template: `
    <og-menu
      [elevation]="elevation"
      [open]="open"
      [variant]="variant"
    >
      <og-menu-item selected="true" title="Menu Item One"></og-menu-item>
      <og-menu-item title="Menu Item Two"></og-menu-item>
      <og-menu-item title="Menu Item Three"></og-menu-item>
    </og-menu>`
});

export const Menu = Template.bind({});
