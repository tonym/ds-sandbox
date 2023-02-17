import { moduleMetadata } from '@storybook/angular';
import { HttpClientModule } from '@angular/common/http';
import { Story } from '@storybook/angular/types-6-0';
import { MenuListItem as MenuListItemComponent } from './MenuListItem';
import { FlexChildModule } from '../FlexChild/index';
import { FlexModule } from '../Flex/index';
import { SvgIconModule } from '../SvgIcon/index';
import { TypographyModule } from '../Typography/index';
import createStyles from '../../styles/createStyles/index';
import provideClasses from '../../styles/provideClasses/index';
import { Classes, Styles } from '../../types';
import content from './readme.md';

const title = 'Components/Menu List Item';

export default {
  args: {
    icon: 'info',
    subtitle: 'subtitle',
    title: 'MenuListItem component'
  },
  argTypes: {
    hover: {
      control: {
        type: 'boolean'
      }
    },
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
    subtitle: {
      control: {
        type: 'text'
      }
    },
    title: {
      control: {
        type: 'text'
      }
    }
  },
  component: MenuListItemComponent,
  decorators: [
    moduleMetadata({
      declarations: [MenuListItemComponent],
      imports: [FlexChildModule, FlexModule, HttpClientModule, SvgIconModule, TypographyModule]
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

const Template: Story<MenuListItemComponent> = (args: MenuListItemComponent) => {
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
      <og-menu-list-item
        [hover]="hover"
        [icon]="icon"
        [iconStyle]="iconStyle"
        [selected]="selected"
        [subtitle]="subtitle"
        [title]="title"
      ></og-menu-list-item>
    `
  };
};

export const MenuListItem = Template.bind({});
