import { moduleMetadata } from '@storybook/angular';
import { Story } from '@storybook/angular/types-6-0';
import { TableRow as TableRowComponent } from './TableRow';
import content from './readme.md';

const title = 'Components/Table Row';

export default {
  argTypes: {
    hover: {
      control: {
        type: 'boolean'
      }
    },
    selected: {
      control: {
        type: 'boolean'
      }
    }
  },
  component: TableRowComponent,
  decorators: [
    moduleMetadata({
      declarations: [TableRowComponent]
    })
  ],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/ZBqwi9XAuFRBVvTaRAfBaX/Gemini-Core?node-id=3680%3A1688'
    },
    docs: {
      page: content
    }
  },
  title: title
};

const Template: Story<TableRowComponent> = (args: TableRowComponent) => ({
  props: args,
  template: `
    <og-table-row
      [hover]="hover"
      [selected]="selected"
    >TableRow component</og-table-row>`
});

export const TableRow = Template.bind({});
