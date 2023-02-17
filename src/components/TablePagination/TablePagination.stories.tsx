import { moduleMetadata } from '@storybook/angular';
import { HttpClientModule } from '@angular/common/http';
import { Story } from '@storybook/angular/types-6-0';
import { TablePagination as TablePaginationComponent } from './TablePagination';
import { FlexChildModule } from '../FlexChild/index';
import { FlexModule } from '../Flex/index';
import { IconButtonModule } from '../IconButton/index';
import content from './readme.md';

const title = 'Components/Table Pagination';

export default {
  args: {
    page: 1,
    rows: 0,
    rowsPerPage: 10
  },
  argTypes: {
    nextButtonTitle: {
      control: {
        type: 'text'
      }
    },
    onPageChange: {
      action: 'onPageChange'
    },
    page: {
      control: {
        min: 1,
        type: 'number'
      }
    },
    previousButtonTitle: {
      control: {
        type: 'text'
      }
    },
    rows: {
      control: {
        min: 0,
        type: 'number'
      }
    },
    rowsPerPage: {
      control: {
        min: 1,
        type: 'number'
      }
    }
  },
  component: TablePaginationComponent,
  decorators: [
    moduleMetadata({
      declarations: [TablePaginationComponent],
      imports: [FlexChildModule, FlexModule, HttpClientModule, IconButtonModule]
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

const Template: Story<TablePaginationComponent> = (args: TablePaginationComponent) => ({
  props: args,
  template: `<og-table-pagination
      [nextButtonTitle]="nextButtonTitle"
      (onPageChange)="onPageChange($event)"
      [page]="page"
      [previousButtonTitle]="previousButtonTitle"
      [rows]="rows"
      [rowsPerPage]="rowsPerPage"
    ></og-table-pagination>`
});

export const TablePagination = Template.bind({});
