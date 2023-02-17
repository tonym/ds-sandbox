import { moduleMetadata } from '@storybook/angular';
import { HttpClientModule } from '@angular/common/http';
import { Story } from '@storybook/angular/types-6-0';
import { IconButton as IconButtonComponent } from './IconButton';
import { ButtonBaseModule } from '../ButtonBase/index';
import { SvgIconModule } from '../SvgIcon/index';
import content from './readme.md';

const title = 'Components/Icon Button';

export default {
  args: {
    icon: 'info'
  },
  argTypes: {
    buttonType: {
      control: {
        type: 'inline-radio'
      },
      options: ['button', 'reset', 'submit']
    },
    color: {
      control: {
        type: 'select'
      },
      options: ['error', 'info', 'inherit', 'primary', 'secondary', 'success', 'warning']
    },
    disabled: {
      control: {
        type: 'boolean'
      }
    },
    edge: {
      control: {
        type: 'inline-radio'
      },
      options: ['start', 'end', undefined]
    },
    hasParent: {
      control: {
        type: 'boolean'
      }
    },
    hover: {
      control: {
        type: 'inline-radio'
      },
      options: ['background', 'foreground', 'icon']
    },
    icon: {
      control: {
        type: 'text'
      }
    },
    iconStyle: {
      control: {
        type: 'select'
      },
      options: ['filled', 'outlined', 'rounded', 'sharp', 'twotone']
    },
    link: {
      control: {
        type: 'text'
      }
    },
    newTab: {
      control: {
        type: 'boolean'
      }
    },
    size: {
      control: {
        type: 'inline-radio'
      },
      options: ['md', 'sm']
    },
    title: {
      control: {
        type: 'text'
      }
    }
  },
  component: IconButtonComponent,
  decorators: [
    moduleMetadata({
      declarations: [IconButtonComponent],
      imports: [ButtonBaseModule, HttpClientModule, SvgIconModule]
    })
  ],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/gS8qng4JID7dcHO3xq65ln/%5BGemini%5D-opensesame?node-id=1329%3A31007'
    },
    docs: {
      page: content
    }
  },
  title: title
};

const Template: Story<IconButtonComponent> = (args: IconButtonComponent) => ({
  props: args,
  template: `<og-icon-button
    [buttonType]="buttonType"
    [color]="color"
    [disabled]="disabled"
    [edge]="edge"
    [hasParent]="hasParent"
    [hover]="hover"
    [icon]="icon"
    [iconStyle]="iconStyle"
    [link]="link"
    [newTab]="newTab"
    [shapeRendering]="shapeRendering"
    [size]="size"
    [svgTitle]="svgTitle"
    [title]="title"></og-icon-button>`
});

export const IconButton = Template.bind({});
