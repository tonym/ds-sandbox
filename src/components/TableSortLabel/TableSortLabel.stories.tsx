import { moduleMetadata } from '@storybook/angular';
import { Story } from '@storybook/angular/types-6-0';
import { HttpClientModule } from '@angular/common/http';
import { SvgIconModule } from '../SvgIcon/index';
import { TableSortLabel as TableSortLabelComponent } from './TableSortLabel';
import content from './readme.md';

const title = 'Components/Table Sort Label';

export default {
  argTypes: {
    active: {
      control: {
        type: 'boolean'
      }
    },
    direction: {
      control: {
        type: 'inline-radio'
      },
      options: ['asc', 'desc']
    },
    hideSortIcon: {
      control: {
        type: 'boolean'
      }
    },
    sortIcon: {
      control: {
        type: 'text'
      }
    },
    sortIconPosition: {
      control: {
        type: 'inline-radio'
      },
      options: ['left', 'right']
    },
    sortIconStyle: {
      control: {
        type: 'radio'
      },
      options: ['filled', 'outlined', 'rounded', 'sharp', 'twotone']
    }
  },
  component: TableSortLabelComponent,
  decorators: [
    moduleMetadata({
      declarations: [TableSortLabelComponent],
      imports: [HttpClientModule, SvgIconModule]
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

const Template: Story<TableSortLabelComponent> = (args: TableSortLabelComponent) => ({
  props: args,
  template: `
    <og-table-sort-label
      [active]="active"
      [direction]="direction"
      [hideSortIcon]="hideSortIcon"
      [sortIcon]="sortIcon"
      [sortIconPosition]="sortIconPosition"
      [sortIconStyle]="sortIconStyle"
    >Table Sort Label</og-table-sort-label>
  `
});

export const TableSortLabel = Template.bind({});
