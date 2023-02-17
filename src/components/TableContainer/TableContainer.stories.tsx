import { moduleMetadata } from '@storybook/angular';
import { Story } from '@storybook/angular/types-6-0';
import { PaperModule } from '../Paper/index';
import { TableContainer as TableContainerComponent } from './TableContainer';
import content from './readme.md';

const title = 'Components/Table Container';

export default {
  argTypes: {
    elevation: {
      control: {
        max: 24,
        min: 0,
        type: 'number'
      }
    }
  },
  component: TableContainerComponent,
  decorators: [
    moduleMetadata({
      declarations: [TableContainerComponent],
      imports: [PaperModule]
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

const Template: Story<TableContainerComponent> = (args: TableContainerComponent) => ({
  props: args,
  template: `
    <og-table-container [elevation]="elevation">TableContainer component</og-table-container>`
});

export const TableContainer = Template.bind({});
