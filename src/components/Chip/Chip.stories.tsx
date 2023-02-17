import { moduleMetadata } from '@storybook/angular';
import { HttpClientModule } from '@angular/common/http';
import { Story } from '@storybook/angular/types-6-0';
import { Chip as ChipComponent } from './Chip';
import { SvgIconModule, SvgIconService } from '../SvgIcon/index';
import content from './readme.md';

const title = 'Components/Chip';

export default {
  argTypes: {
    clickable: {
      control: {
        type: 'boolean'
      }
    },
    color: {
      control: {
        type: 'select'
      },
      options: ['dark', 'error', 'info', 'light', 'primary', 'secondary', 'success', 'warning']
    },
    deletable: {
      control: {
        type: 'boolean'
      }
    },
    deleteClick: {
      action: 'deleteClick'
    },
    disabled: {
      control: {
        type: 'boolean'
      }
    },
    icon: {
      control: {
        type: 'text'
      }
    },
    outlined: {
      control: {
        type: 'boolean'
      }
    },
    size: {
      control: {
        type: 'inline-radio'
      },
      options: ['md', 'sm']
    },
    square: {
      control: {
        type: 'boolean'
      }
    },
    uppercase: {
      control: {
        type: 'boolean'
      }
    }
  },
  component: ChipComponent,
  decorators: [
    moduleMetadata({
      declarations: [ChipComponent],
      imports: [HttpClientModule, SvgIconModule],
      providers: [SvgIconService]
    })
  ],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/gS8qng4JID7dcHO3xq65ln/%5BGemini%5D-opensesame?node-id=308%3A23696'
    },
    docs: {
      page: content
    }
  },
  title: title
};

const Template: Story<ChipComponent> = (args: ChipComponent) => ({
  props: args,
  template: `
  <og-chip
    [clickable]="clickable"
    [color]="color"
    [deletable]="deletable"
    (deleteClick)="deleteClick($event)"
    [disabled]="disabled"
    [icon]="icon"
    [outlined]="outlined"
    [size]="size"
    [square]="square"
    [uppercase]="uppercase"
  >Gemini</og-chip>`
});

export const Chip = Template.bind({});
