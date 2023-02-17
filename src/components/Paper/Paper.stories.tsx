import { moduleMetadata } from '@storybook/angular';
import { Story } from '@storybook/angular/types-6-0';
import { Paper as PaperComponent } from './Paper';
import content from './readme.md';

const title = 'Components/Paper';

export default {
  argTypes: {
    elevation: {
      control: {
        max: 24,
        min: 0,
        type: 'number'
      }
    },
    outlined: {
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
    }
  },
  component: PaperComponent,
  decorators: [
    moduleMetadata({
      declarations: [PaperComponent]
    })
  ],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/ZBqwi9XAuFRBVvTaRAfBaX/Gemini-UI-kit?node-id=3586%3A46'
    },
    docs: {
      page: content
    }
  },
  title: title
};

const Template: Story<PaperComponent> = (args: PaperComponent) => ({
  props: args,
  template: `<og-paper
    [elevation]="elevation"
    [outlined]="outlined"
    [radius]="radius"
    [square]="square"
  >I am a sheet of paper</og-paper>`
});

export const Paper = Template.bind({});
