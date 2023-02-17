import { moduleMetadata } from '@storybook/angular';
import { Story } from '@storybook/angular/types-6-0';
import { Dialog as DialogComponent } from './Dialog';
import { Paper } from '../Paper/index';
import { Scrim } from '../Scrim/index';
import content from './readme.md';

const title = 'Components/Dialog';

export default {
  args: {
    ngContent: 'hi!'
  },
  argTypes: {
    centered: {
      control: {
        type: 'boolean'
      }
    },
    disableEscapeKey: {
      control: {
        type: 'boolean'
      }
    },
    disableScrimClick: {
      control: {
        type: 'boolean'
      }
    },
    elevation: {
      control: {
        max: 24,
        min: 0,
        type: 'number'
      }
    },
    ngContent: {
      control: {
        type: 'text'
      }
    },
    open: {
      control: {
        type: 'boolean'
      }
    },
    radius: {
      control: {
        type: 'inline-radio'
      },
      options: ['xs', 'sm', 'md', 'lg', 'xl']
    },
    square: {
      control: {
        type: 'boolean'
      }
    },
    withScrim: {
      control: {
        type: 'boolean'
      }
    },
    dialogEscapeKeyDown: {
      action: 'escape key down'
    },
    dialogScrimClick: {
      action: 'scrim clicked'
    }
  },
  component: DialogComponent,
  decorators: [
    moduleMetadata({
      declarations: [DialogComponent, Paper, Scrim]
    })
  ],
  parameters: {
    docs: {
      page: content
    }
  },
  title: title
};

interface Args extends DialogComponent {
  ngContent: string;
}

const Template: Story<Args> = (args: Args) => ({
  props: { ...args },
  template: `
    <og-dialog
      (dialogEscapeKeyDown)="dialogEscapeKeyDown($event)"
      (dialogScrimClick)="dialogScrimClick($event)"
      [centered]="centered"
      [disableEscapeKey]="disableEscapeKey"
      [disableScrimClick]="disableScrimClick"
      [elevation]="elevation"
      [open]="open"
      [radius]="radius"
      [square]="square"
      [withScrim]="withScrim"
    >{{ ngContent }}</og-dialog>`
});

export const Dialog = Template.bind({});
