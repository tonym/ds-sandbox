import { moduleMetadata } from '@storybook/angular';
import { HttpClientModule } from '@angular/common/http';
import { Story } from '@storybook/angular/types-6-0';
import { Pagination as PaginationComponent } from './Pagination';
import { ButtonBaseModule } from '../ButtonBase/index';
import { FlexChildModule } from '../FlexChild/index';
import { FlexModule } from '../Flex/index';
import { IconButtonModule } from '../IconButton/index';
import content from './readme.md';

const title = 'Components/Pagination';

export default {
  args: {
    count: 1,
    page: 1
  },
  argTypes: {
    color: {
      control: {
        type: 'inline-radio'
      },
      options: ['default', 'primary', 'secondary']
    },
    count: {
      control: {
        min: 1,
        type: 'number'
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
    pageClamp: {
      control: {
        type: 'boolean'
      }
    },
    showFirstButton: {
      control: {
        type: 'boolean'
      }
    },
    showLastButton: {
      control: {
        type: 'boolean'
      }
    },
    showNextButton: {
      control: {
        type: 'boolean'
      }
    },
    showPreviousButton: {
      control: {
        type: 'boolean'
      }
    },
    size: {
      control: {
        type: 'inline-radio'
      },
      options: ['md', 'sm']
    }
  },
  component: PaginationComponent,
  decorators: [
    moduleMetadata({
      declarations: [PaginationComponent],
      imports: [ButtonBaseModule, FlexChildModule, FlexModule, HttpClientModule, IconButtonModule]
    })
  ],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/vFde1hEh4BqfoctSicn1vx/MUI-for-Figma-v5.0.1-Material-Light?node-id=6745%3A46834'
    },
    docs: {
      page: content
    }
  },
  title: title
};

const Template: Story<PaginationComponent> = (args: PaginationComponent) => ({
  props: args,
  template: `<og-pagination
      [color]="color"
      [count]="count"
      (onPageChange)="onPageChange($event)"
      [page]="page"
      [pageClamp]="pageClamp"
      [showFirstButton]="showFirstButton"
      [showLastButton]="showLastButton"
      [showNextButton]="showNextButton"
      [showPreviousButton]="showPreviousButton"
      [size]="size"
    ></og-pagination>`
});

export const Pagination = Template.bind({});
