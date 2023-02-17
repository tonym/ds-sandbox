import { moduleMetadata } from '@storybook/angular';
import { Story } from '@storybook/angular/types-6-0';
import { ButtonGroup as ButtonGroupComponent } from './ButtonGroup';
import { ButtonModule } from '../Button/index';
import content from './readme.md';

const title = 'Components/Button Group';

export default {
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
      options: ['default', 'inherit', 'primary', 'secondary']
    },
    disabled: {
      control: {
        type: 'boolean'
      }
    },
    elevated: {
      control: {
        type: 'boolean'
      }
    },
    fullWidth: {
      control: {
        type: 'boolean'
      }
    },
    size: {
      control: {
        type: 'inline-radio'
      },
      options: ['lg', 'md', 'sm']
    },
    variant: {
      control: {
        type: 'inline-radio'
      },
      options: ['contained', 'outlined', 'text']
    }
  },
  component: ButtonGroupComponent,
  decorators: [
    moduleMetadata({
      declarations: [ButtonGroupComponent],
      imports: [ButtonModule]
    })
  ],
  parameters: {
    docs: {
      page: content
    }
  },
  title: title
};

const Template: Story<ButtonGroupComponent> = (args: ButtonGroupComponent) => ({
  props: args,
  template: `<og-button-group
      [buttonType]="buttonType"
      [color]="color"
      [disabled]="disabled"
      [elevated]="elevated"
      [fullWidth]="fullWidth"
      [size]="size"
      [variant]="variant"
    >
      <og-button [className]="['first-button', 'e2e-first-button']">Button one</og-button>
      <og-button className="second-button">Button two</og-button>
      <a href="#">
        <og-button className="third-button" hasParent="true">Button three</og-button>
      </a>
    </og-button-group>
  `
});

export const ButtonGroup = Template.bind({});
