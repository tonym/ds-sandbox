import { moduleMetadata } from '@storybook/angular';
import { Story } from '@storybook/angular/types-6-0';
import { TypographyModule } from '../Typography/index';
import { Sash as SashComponent } from './Sash';
import content from './readme.md';

const title = 'Components/Sash';

export default {
  args: {
    label: 'plus'
  },
  argTypes: {
    label: {
      control: {
        type: 'text'
      }
    }
  },
  component: SashComponent,
  decorators: [
    moduleMetadata({
      declarations: [SashComponent],
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

const Template: Story<SashComponent> = (args: SashComponent) => ({
  props: args,
  template: `<og-sash [label]="label"></og-sash>`
});

export const Sash = Template.bind({});
