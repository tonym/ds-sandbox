import { moduleMetadata } from '@storybook/angular';
import { Story } from '@storybook/angular/types-6-0';
import { TableCell as TableCellComponent } from './TableCell';
import { TableModule, TableService } from '../Table/index';
import { TableHeadModule } from '../TableHead/index';
import { TableRowModule } from '../TableRow/index';
import content from './readme.md';

const title = 'Components/Table Cell';

export default {
  argTypes: {
    align: {
      control: {
        type: 'select'
      },
      options: ['center', 'inherit', 'justify', 'left', 'right']
    },
    element: {
      control: {
        type: 'inline-radio'
      },
      options: ['td', 'th']
    },
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
  component: TableCellComponent,
  decorators: [
    moduleMetadata({
      declarations: [TableCellComponent],
      imports: [TableModule, TableHeadModule, TableRowModule],
      providers: [TableService]
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

const Template: Story<TableCellComponent> = (args: TableCellComponent) => ({
  props: args,
  template: `
    <og-table>
      <og-table-head>
        <og-table-row>
          <og-table-cell
            [align]="align"
            [element]="element"
            [padding]="padding"
            [size]="size">
            TableCell component
          </og-table-cell>
        </og-table-row>
      </og-table-head>
    </og-table>
  `
});

export const TableCell = Template.bind({});
