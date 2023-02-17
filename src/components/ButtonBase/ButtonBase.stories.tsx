import { moduleMetadata } from '@storybook/angular';
import { Story } from '@storybook/angular/types-6-0';
import { ButtonBase as ButtonBaseComponent } from './ButtonBase';
import content from './readme.md';

const title = 'Components/Button Base';

export default {
  args: {
    ngContent: 'Subscribe'
  },
  argTypes: {
    buttonType: {
      control: {
        type: 'inline-radio'
      },
      options: ['button', 'reset', 'submit']
    },
    disabled: {
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
    title: {
      control: {
        type: 'text'
      }
    }
  },
  component: ButtonBaseComponent,
  decorators: [
    moduleMetadata({
      declarations: [ButtonBaseComponent]
    })
  ],
  parameters: {
    docs: {
      page: content
    }
  },
  title: title
};

interface Args extends ButtonBaseComponent {
  ngContent: string;
}

const Template: Story<Args> = (args: Args) => ({
  props: args,
  template: `
    <og-button-base
      [buttonType]="buttonType"
      [disabled]="disabled"
      [hasParent]="hasParent"
      [link]="link"
      [newTab]="newTab"
      [title]="title"
    >
      {{ngContent}}
    </og-button-base>
  `
});

export const ButtonBase = Template.bind({});
