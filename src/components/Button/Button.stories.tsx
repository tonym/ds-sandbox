import { moduleMetadata } from '@storybook/angular';
import { HttpClientModule } from '@angular/common/http';
import { Story } from '@storybook/angular/types-6-0';
import { Button as ButtonComponent } from './Button';
import { ButtonBaseModule } from '../ButtonBase/index';
import { SvgIconModule, SvgIconService } from '../SvgIcon/index';
import content from './readme.md';

const title = 'Components/Button';

export default {
  args: {
    ngContent: 'Get started'
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
        type: 'inline-radio'
      },
      options: ['default', 'error', 'info', 'inherit', 'primary', 'secondary', 'success', 'warning']
    },
    disabled: {
      control: {
        type: 'boolean'
      }
    },
    disableFocusRipple: {
      control: {
        type: 'boolean'
      }
    },
    disableRipple: {
      control: {
        type: 'boolean'
      }
    },
    elevated: {
      control: {
        type: 'boolean'
      }
    },
    endIcon: {
      control: {
        type: 'text'
      }
    },
    fullWidth: {
      control: {
        type: 'boolean'
      }
    },
    hasParent: {
      control: {
        type: 'boolean'
      }
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
    ngContent: {
      control: {
        type: 'text'
      }
    },
    size: {
      control: {
        type: 'inline-radio'
      },
      options: ['lg', 'md', 'sm']
    },
    startIcon: {
      control: {
        type: 'text'
      }
    },
    title: {
      control: {
        type: 'text'
      }
    },
    variant: {
      control: {
        type: 'inline-radio'
      },
      options: ['contained', 'outlined', 'passive', 'text']
    }
  },
  component: ButtonComponent,
  decorators: [
    moduleMetadata({
      declarations: [ButtonComponent],
      imports: [ButtonBaseModule, HttpClientModule, SvgIconModule],
      providers: [SvgIconService]
    })
  ],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/gS8qng4JID7dcHO3xq65ln/%5BGemini%5D-opensesame?node-id=35%3A5154'
    },
    docs: {
      page: content
    }
  },
  title: title
};

interface Args extends ButtonComponent {
  ngContent: string;
}

const Template: Story<Args> = (args: Args) => ({
  props: args,
  template: `
    <og-button
      [buttonType]="buttonType"
      [color]="color"
      [disabled]="disabled"
      [disableFocusRipple]="disableFocusRipple"
      [disableRipple]="disableRipple"
      [elevated]="elevated"
      [endIcon]="endIcon"
      [fullWidth]="fullWidth"
      [hasParent]="hasParent"
      [link]="link"
      [newTab]="newTab"
      [size]="size"
      [startIcon]="startIcon"
      [title]="title"
      [variant]="variant"
    >
      {{ ngContent }}
    </og-button>
  `
});

export const Button = Template.bind({});
