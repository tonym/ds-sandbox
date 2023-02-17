import { moduleMetadata } from '@storybook/angular';
import { Story } from '@storybook/angular/types-6-0';
import { Table as TableComponent } from './Table';
import { TableBodyModule } from '../TableBody/index';
import { TableCellModule } from '../TableCell/index';
import { TableHeadModule } from '../TableHead/index';
import { TableRowModule } from '../TableRow/index';
import content from './readme.md';

const title = 'Components/Table';

export default {
  argTypes: {
    padding: {
      control: {
        type: 'inline-radio'
      },
      options: ['checkbox', 'default', 'none']
    },
    size: {
      control: {
        type: 'inline-radio'
      },
      options: ['md', 'sm']
    }
  },
  component: TableComponent,
  decorators: [
    moduleMetadata({
      declarations: [TableComponent],
      imports: [TableBodyModule, TableCellModule, TableHeadModule, TableRowModule]
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

const Template: Story<TableComponent> = (args: TableComponent) => ({
  props: args,
  template: `
    <og-table
      [padding]="padding"
      [size]="size"
    >
      <og-table-head>
        <og-table-row>
          <og-table-cell element="th">Column 1</og-table-cell>
          <og-table-cell element="th">Column 2</og-table-cell>
          <og-table-cell element="th">Column 3</og-table-cell>
        </og-table-row>
      </og-table-head>
      <og-table-body>
        <og-table-row>
          <og-table-cell>Table cell</og-table-cell>
          <og-table-cell>Table cell</og-table-cell>
          <og-table-cell>Table cell</og-table-cell>
        </og-table-row>
        <og-table-row>
          <og-table-cell>Table cell</og-table-cell>
          <og-table-cell>Table cell</og-table-cell>
          <og-table-cell>Table cell</og-table-cell>
        </og-table-row>
        <og-table-row>
          <og-table-cell>Table cell</og-table-cell>
          <og-table-cell>Table cell</og-table-cell>
          <og-table-cell>Table cell</og-table-cell>
        </og-table-row>
      </og-table-body>
    </og-table>`
});

export const Table = Template.bind({});
