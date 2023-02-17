import { moduleMetadata } from '@storybook/angular';
import { Story } from '@storybook/angular/types-6-0';
import { Tab as TabComponent } from './Tab';
import content from './readme.md';

const title = 'Components/Tab';

export default {
  argTypes: {
    bottomPadding: {
      control: {
        type: 'inline-radio'
      },
      options: ['md', 'sm']
    },
    color: {
      control: {
        type: 'inline-radio'
      },
      options: ['inherit', 'primary', 'secondary']
    },
    disabled: {
      control: {
        type: 'boolean'
      }
    },
    selected: {
      control: {
        type: 'boolean'
      }
    },
    sidePadding: {
      control: {
        type: 'inline-radio'
      },
      options: ['lg', 'md', 'sm']
    },
    size: {
      control: {
        type: 'inline-radio'
      },
      options: ['md', 'sm']
    },
    wrapped: {
      control: {
        type: 'boolean'
      }
    }
  },
  component: TabComponent,
  decorators: [
    moduleMetadata({
      declarations: [TabComponent]
    })
  ],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/gS8qng4JID7dcHO3xq65ln/%5BGemini%5D-opensesame?node-id=87%3A12326'
    },
    docs: {
      page: content
    }
  },
  title: title
};

const Template: Story<TabComponent> = (args: TabComponent) => ({
  props: args,
  template: `
    <og-tab
      [bottomPadding]="bottomPadding"
      [color]="color"
      [disabled]="disabled"
      [selected]="selected"
      [sidePadding]="sidePadding"
      [size]="size"
      [wrapped]="wrapped"
    >Sugar free Tab</og-tab>
  `
});

export const Tab = Template.bind({});
