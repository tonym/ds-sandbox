import { moduleMetadata } from '@storybook/angular';
import { Story } from '@storybook/angular/types-6-0';
import { TypographyModule } from '../Typography/index';
import { Link as LinkComponent } from './Link';
import content from './readme.md';

const title = 'Components/Link';

export default {
  args: {
    ngContent: 'OpenSesame.com',
    link: 'https://www.opensesame.com'
  },
  argTypes: {
    color: {
      control: {
        type: 'select'
      },
      options: ['error', 'inherit', 'primary', 'secondary', 'textPrimary', 'textSecondary']
    },
    display: {
      control: {
        type: 'inline-radio'
      },
      options: ['block', 'inline', 'inlineBlock']
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
    underline: {
      control: {
        type: 'inline-radio'
      },
      options: ['always', 'hover', 'none']
    },
    variant: {
      control: {
        type: 'select'
      },
      options: [
        'body1',
        'body2',
        'button',
        'caption',
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'inherit',
        'overline',
        'srOnly',
        'subtitle1',
        'subtitle2'
      ]
    }
  },
  component: LinkComponent,
  decorators: [
    moduleMetadata({
      declarations: [LinkComponent],
      imports: [TypographyModule]
    })
  ],
  parameters: {
    docs: {
      page: content
    }
  },
  title: title
};

interface Args extends LinkComponent {
  ngContent: string;
}

const Template: Story<Args> = (args: Args) => ({
  props: args,
  template: `
    <og-link
      [color]="color"
      [display]="display"
      [hasParent]="hasParent"
      [link]="link"
      [newTab]="newTab"
      [underline]="underline"
      [variant]="variant"
    >
      {{ngContent}}
    </og-link>
  `
});

export const Link = Template.bind({});
