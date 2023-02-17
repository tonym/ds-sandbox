import { moduleMetadata } from '@storybook/angular';
import { HttpClientModule } from '@angular/common/http';
import { Story } from '@storybook/angular/types-6-0';
import { MenuItem as MenuItemComponent } from './MenuItem';
import { FlexChildModule } from '../FlexChild/index';
import { FlexModule } from '../Flex/index';
import { SvgIconModule } from '../SvgIcon/index';
import { TypographyModule } from '../Typography/index';
import createStyles from '../../styles/createStyles/index';
import provideClasses from '../../styles/provideClasses/index';
import { Classes, Styles } from '../../types';
import content from './readme.md';

const title = 'Components/Menu Item';

export default {
  args: {
    title: 'MenuItem component'
  },
  argTypes: {
    icon: {
      control: {
        type: 'text'
      }
    },
    iconStyle: {
      control: {
        type: 'inline-radio'
      },
      options: ['filled', 'outlined', 'rounded', 'sharp', 'twotone']
    },
    selected: {
      control: {
        type: 'boolean'
      }
    },
    selectedIcon: {
      control: {
        type: 'text'
      }
    },
    selectedIconStyle: {
      control: {
        type: 'inline-radio'
      },
      options: ['filled', 'outlined', 'rounded', 'sharp', 'twotone']
    },
    title: {
      control: {
        type: 'text'
      }
    }
  },
  component: MenuItemComponent,
  decorators: [
    moduleMetadata({
      declarations: [MenuItemComponent],
      imports: [FlexChildModule, FlexModule, HttpClientModule, SvgIconModule, TypographyModule]
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

const Template: Story<MenuItemComponent> = (args: MenuItemComponent) => {
  const styles: Styles = createStyles({
    '@global': {
      body: {
        height: '100%',
        margin: '0 !important',
        padding: '0 !important',
        width: '100%'
      }
    }
  });

  const classes: Classes = provideClasses(styles);
  return {
    props: args,
    template: `
      <og-menu-item
        [icon]="icon"
        [iconStyle]="iconStyle"
        [selectedIcon]="selectedIcon"
        [selectedIconStyle]="selectedIconStyle"
        [selected]="selected"
        [title]="title"
      ></og-menu-item>
    `
  };
};

export const MenuItem = Template.bind({});
