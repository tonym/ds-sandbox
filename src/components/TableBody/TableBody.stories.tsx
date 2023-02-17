import { moduleMetadata } from '@storybook/angular';
import { Story } from '@storybook/angular/types-6-0';
import { TableBody as TableBodyComponent } from './TableBody';
import content from './readme.md';

const title = 'Components/Table Body';

export default {
  argTypes: {},
  component: TableBodyComponent,
  decorators: [
    moduleMetadata({
      declarations: [TableBodyComponent]
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

const Template: Story<TableBodyComponent> = (args: TableBodyComponent) => ({
  props: args,
  template: `<og-table-body>TableBody component</og-table-body>`
});

export const TableBody = Template.bind({});
