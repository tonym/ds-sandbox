import { moduleMetadata } from '@storybook/angular';
import { Story } from '@storybook/angular/types-6-0';
import { TableFoot as TableFootComponent } from './TableFoot';
import content from './readme.md';

const title = 'Components/Table Foot';

export default {
  argTypes: {},
  component: TableFootComponent,
  decorators: [
    moduleMetadata({
      declarations: [TableFootComponent]
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

const Template: Story<TableFootComponent> = (args: TableFootComponent) => ({
  props: args,
  template: `<og-table-foot>TableFoot component</og-table-foot>`
});

export const TableFoot = Template.bind({});
