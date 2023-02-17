import { moduleMetadata } from '@storybook/angular';
import { Story } from '@storybook/angular/types-6-0';
import { Ripple as RippleComponent } from './Ripple';
import content from './readme.md';

const title = 'Components/Ripple';

export default {
  argTypes: {},
  component: RippleComponent,
  decorators: [
    moduleMetadata({
      declarations: [RippleComponent]
    })
  ],
  parameters: {
    docs: {
      page: content
    }
  },
  title: title
};

const Template: Story<RippleComponent> = (args: RippleComponent) => ({
  props: args,
  template: `<og-ripple>Ripple component</og-ripple>`
});

export const Ripple = Template.bind({});
