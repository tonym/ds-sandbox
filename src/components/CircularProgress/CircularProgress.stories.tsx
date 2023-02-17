import { moduleMetadata } from '@storybook/angular';
import { Story } from '@storybook/angular/types-6-0';
import { CircularProgress as CircularProgressComponent } from './CircularProgress';
import content from './readme.md';

const title = 'Components/Circular Progress';

export default {
  args: {
    value: 60
  },
  argTypes: {
    color: {
      control: {
        type: 'inline-radio'
      },
      options: ['inherit', 'primary', 'secondary']
    },
    disableShrink: {
      control: {
        type: 'boolean'
      }
    },
    size: {
      control: {
        min: 1,
        type: 'number'
      }
    },
    thickness: {
      control: {
        min: 1,
        type: 'number'
      }
    },
    value: {
      control: {
        min: 1,
        type: 'number'
      }
    },
    variant: {
      control: {
        type: 'inline-radio'
      },
      options: ['determinate', 'indeterminate']
    }
  },
  component: CircularProgressComponent,
  decorators: [
    moduleMetadata({
      declarations: [CircularProgressComponent]
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

const Template: Story<CircularProgressComponent> = (args: CircularProgressComponent) => ({
  props: args,
  template: `
    <og-circular-progress
      [color]="color"
      [disableShrink]="disableShrink"
      [size]="size"
      [thickness]="thickness"
      [value]="value"
      [variant]="variant"
    ></og-circular-progress>
  `
});

export const CircularProgress = Template.bind({});
