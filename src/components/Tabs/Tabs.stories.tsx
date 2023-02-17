import { moduleMetadata } from '@storybook/angular';
import { Story } from '@storybook/angular/types-6-0';
import { action } from '@storybook/addon-actions';
import { Tabs as TabsComponent } from './Tabs';
import { TabModule } from '../Tab/index';
import content from './readme.md';

const title = 'Components/Tabs';

export default {
  argTypes: {
    activeTab: {
      control: {
        min: -1,
        type: 'number'
      }
    },
    ariaLabel: {
      control: {
        type: 'text'
      }
    },
    ariaLabelledby: {
      control: {
        type: 'text'
      }
    },
    centered: {
      control: {
        type: 'boolean'
      }
    },
    color: {
      control: {
        type: 'inline-radio'
      },
      options: ['inherit', 'primary', 'secondary']
    },
    selfSelect: {
      control: {
        type: 'boolean'
      }
    },
    tabClick: {
      action: 'tab clicked'
    }
  },
  component: TabsComponent,
  decorators: [
    moduleMetadata({
      declarations: [TabsComponent],
      imports: [TabModule]
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

const Template: Story<TabsComponent> = (args: TabsComponent) => ({
  props: { ...args },
  template: `<og-tabs
    (tabClick)="tabClick($event)"
    [activeTab]="activeTab"
    [ariaLabel]="ariaLabel"
    [ariaLabelledby]="ariaLabelledby"
    [centered]="centered"
    [color]="color"
    [selfSelect]="selfSelect"
  >
    <og-tab>Tab one</og-tab>
    <og-tab>Tab two</og-tab>
    <og-tab>Tab three</og-tab>
  </og-tabs>
  `
});

export const Tabs = Template.bind({});
