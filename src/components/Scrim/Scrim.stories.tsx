import { moduleMetadata } from '@storybook/angular';
import { Story } from '@storybook/angular/types-6-0';
import { Scrim as ScrimComponent } from './Scrim';
import content from './readme.md';

const title = 'Components/Scrim';

export default {
  argTypes: {
    open: {
      control: {
        type: 'boolean'
      }
    },
    position: {
      control: {
        type: 'inline-radio'
      },
      options: ['absolute', 'fixed']
    }
  },
  component: ScrimComponent,
  decorators: [
    moduleMetadata({
      declarations: [ScrimComponent]
    })
  ],
  parameters: {
    docs: {
      page: content
    }
  },
  title: title
};

const Template: Story<ScrimComponent> = (args: ScrimComponent) => ({
  props: args,
  template: `<og-scrim [open]="open" [position]="position"></og-scrim>`
});

export const Scrim = Template.bind({});
