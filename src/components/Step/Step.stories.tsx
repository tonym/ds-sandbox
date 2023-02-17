import { moduleMetadata } from '@storybook/angular';
import { Story } from '@storybook/angular/types-6-0';
import { Step as StepComponent } from './Step';
import { PaperModule } from '../Paper/index';
import content from './readme.md';

const title = 'Components/Step';

export default {
  args: {
    ngContent: 'Step'
  },
  argTypes: {
    completed: {
      control: {
        type: 'boolean'
      }
    },
    disabled: {
      control: {
        type: 'boolean'
      }
    },
    expanded: {
      control: {
        type: 'boolean'
      }
    },
    fullWidth: {
      control: {
        type: 'boolean'
      }
    },
    selected: {
      control: {
        type: 'boolean'
      }
    },
    ngContent: {
      control: {
        type: 'text'
      }
    }
  },
  component: StepComponent,
  decorators: [
    moduleMetadata({
      declarations: [StepComponent],
      imports: [PaperModule]
    })
  ],
  parameters: {
    docs: {
      page: content
    }
  },
  title: title
};

interface Args extends StepComponent {
  ngContent: string;
}

const Template: Story<Args> = (args: Args) => ({
  props: args,
  template: `
    <og-step
      [completed]="completed"
      [disabled]="disabled"
      [expanded]="expanded"
      [fullWidth]="fullWidth"
      [selected]="selected"
    >{{ ngContent }}</og-step>`
});

export const Step = Template.bind({});
