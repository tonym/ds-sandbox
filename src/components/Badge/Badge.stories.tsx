import { moduleMetadata } from '@storybook/angular';
import { HttpClientModule } from '@angular/common/http';
import { Story } from '@storybook/angular/types-6-0';
import { Badge as BadgeComponent } from './Badge';
import { SvgIconModule } from '../SvgIcon/index';
import content from './readme.md';

const title = 'Components/Badge';

export default {
  args: {
    label: 3
  },
  argTypes: {
    anchorOrigin: {
      control: {
        type: 'select'
      },
      options: ['bottomLeft', 'bottomRight', 'topLeft', 'topRight']
    },
    color: {
      control: {
        type: 'select'
      },
      options: ['error', 'info', 'primary', 'secondary', 'success', 'warning']
    },
    label: {
      control: {
        min: 0,
        type: 'number'
      }
    },
    max: {
      control: {
        min: 0,
        type: 'number'
      }
    },
    overlap: {
      control: {
        type: 'inline-radio'
      },
      options: ['circle', 'rectangle']
    },
    showZero: {
      control: {
        type: 'boolean'
      }
    },
    variant: {
      control: {
        type: 'inline-radio'
      },
      options: ['dot', 'standard']
    }
  },
  component: BadgeComponent,
  decorators: [
    moduleMetadata({
      declarations: [BadgeComponent],
      imports: [HttpClientModule, SvgIconModule]
    })
  ],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/ZBqwi9XAuFRBVvTaRAfBaX/Gemini-UI-kit?node-id=170%3A17874'
    },
    docs: {
      page: content
    }
  },
  title: title
};

const Template: Story<BadgeComponent> = (args: BadgeComponent) => ({
  props: args,
  template: `
    <og-badge
      [anchorOrigin]="anchorOrigin"
      [color]="color"
      [label]="label"
      [max]="max"
      [overlap]="overlap"
      [showZero]="showZero"
      [variant]="variant"
    >
      <og-svg-icon color="inherit" icon="email"></og-svg-icon>
    </og-badge>
  `
});

export const Badge = Template.bind({});
