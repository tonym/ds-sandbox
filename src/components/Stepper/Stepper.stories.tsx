import { moduleMetadata } from '@storybook/angular';
import { Story } from '@storybook/angular/types-6-0';
import { Step } from '../Step/index';
import { Stepper as StepperComponent } from './Stepper';
import { PaperModule } from '../Paper/index';
import content from './readme.md';

const title = 'Components/Stepper';

export default {
  args: {
    selectedStep: 0
  },
  argTypes: {
    alternativeLabel: {
      control: {
        type: 'boolean'
      }
    },
    nonLinear: {
      control: {
        type: 'boolean'
      }
    },
    orientation: {
      control: {
        type: 'inline-radio'
      },
      options: ['horizontal', 'vertical']
    }
  },
  selectedStep: {
    control: {
      min: 0,
      type: 'number'
    }
  },
  component: StepperComponent,
  decorators: [
    moduleMetadata({
      declarations: [StepperComponent, Step],
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

const Template: Story<StepperComponent> = (args: StepperComponent) => ({
  props: args,
  template: `
    <og-stepper
      [alternativeLabel]="alternativeLabel"
      [nonLinear]="nonLinear"
      [orientation]="orientation"
      [selectedStep]="selectedStep"
    >
      <og-step>Step one</og-step>
      <og-step>Step two</og-step>
      <og-step>Step three</og-step>
    </og-stepper>
  `
});

export const Stepper = Template.bind({});
