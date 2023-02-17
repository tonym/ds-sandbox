import { moduleMetadata } from '@storybook/angular';
import { Story } from '@storybook/angular/types-6-0';
import { Divider as DividerComponent } from './Divider';
import content from './readme.md';

const title = 'Components/Divider';

export default {
  argTypes: {
    absolute: {
      control: {
        type: 'boolean'
      }
    },
    light: {
      control: {
        type: 'boolean'
      }
    },
    orientation: {
      control: {
        type: 'inline-radio'
      },
      options: ['horizontal', 'vertical']
    },
    variant: {
      control: {
        type: 'inline-radio'
      },
      options: ['fullWidth', 'inset', 'middle']
    }
  },
  component: DividerComponent,
  decorators: [
    moduleMetadata({
      declarations: [DividerComponent]
    })
  ],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/gS8qng4JID7dcHO3xq65ln/%5BGemini%5D-opensesame?node-id=1396%3A34200'
    },
    docs: {
      page: content
    }
  },
  title: title
};

const Template: Story<DividerComponent> = (args: DividerComponent) => ({
  props: args,
  template: `
    <div style="width: 100%; height: 200px;">
      <og-divider
        [absolute]="absolute"
        [light]="light"
        [orientation]="orientation"
        [variant]="variant"
      ></og-divider>
    </div>
  `
});

export const Divider = Template.bind({});
