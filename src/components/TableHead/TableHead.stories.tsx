import { moduleMetadata } from '@storybook/angular';
import { Story } from '@storybook/angular/types-6-0';
import { TableHead as TableHeadComponent } from './TableHead';
import content from './readme.md';

const title = 'Components/Table Head';

export default {
  argTypes: {},
  component: TableHeadComponent,
  decorators: [
    moduleMetadata({
      declarations: [TableHeadComponent]
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

const Template: Story<TableHeadComponent> = (args: TableHeadComponent) => ({
  props: args,
  template: `<og-table-head>TableHead component</og-table-head>`
});

export const TableHead = Template.bind({});
