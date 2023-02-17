import { moduleMetadata } from '@storybook/angular';
import { Story } from '@storybook/angular/types-6-0';
import { LinearProgress as LinearProgressComponent } from './LinearProgress';
import content from './readme.md';

const title = 'Components/Linear Progress';

export default {
  argTypes: {
    color: {
      control: {
        type: 'select'
      },
      options: ['error', 'info', 'primary', 'secondary', 'success', 'warning']
    },
    height: {
      control: {
        type: 'inline-radio'
      },
      options: ['full', 'lg', 'md', 'sm']
    },
    value: {
      control: {
        type: 'text'
      }
    },
    valueBuffer: {
      control: {
        type: 'text'
      }
    },
    variant: {
      control: {
        type: 'inline-radio'
      },
      options: ['buffer', 'determinate', 'indeterminate']
    }
  },
  component: LinearProgressComponent,
  decorators: [
    moduleMetadata({
      declarations: [LinearProgressComponent]
    })
  ],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/ZBqwi9XAuFRBVvTaRAfBaX/Gemini-UI-kit?node-id=348%3A948'
    },
    docs: {
      page: content
    }
  },
  title: title
};

const Template: Story<LinearProgressComponent> = (args: LinearProgressComponent) => ({
  props: args,
  template: `
    <og-linear-progress
      [color]="color"
      [height]="height"
      [value]="value"
      [valueBuffer]="valueBuffer"
      [variant]="variant"
    ></og-linear-progress>
  `
});

export const LinearProgress = Template.bind({});
