import { moduleMetadata } from '@storybook/angular';
import { Story } from '@storybook/angular/types-6-0';
import { Brand as BrandComponent } from './Brand';
import { ImageModule } from '../Image/index';
import content from './readme.md';

const title = 'Components/Brand';

export default {
  args: {
    src: 'images/gemini.png'
  },
  argTypes: {
    alt: {
      control: {
        type: 'text'
      }
    },
    display: {
      control: {
        type: 'inline-radio'
      },
      options: ['block', 'inherit', 'initial', 'inlineBlock']
    },
    fixed: {
      control: {
        type: 'boolean'
      }
    },
    size: {
      control: {
        type: 'inline-radio'
      },
      options: ['lg', 'md', 'sm']
    },
    src: {
      control: {
        type: 'text'
      }
    },
    variant: {
      control: false
    }
  },
  component: BrandComponent,
  decorators: [
    moduleMetadata({
      declarations: [BrandComponent],
      imports: [ImageModule]
    })
  ],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/ZBqwi9XAuFRBVvTaRAfBaX/Gemini-UI-kit?node-id=4323%3A0'
    },
    docs: {
      page: content
    }
  },
  title: title
};

const Template: Story<BrandComponent> = (args: BrandComponent) => ({
  props: args,
  template: `<og-brand
    [alt]="alt"
    [display]="display"
    [fixed]="fixed"
    [size]="size"
    [src]="src"
    [variant]="variant"
  ></og-brand>`
});

export const Brand = Template.bind({});
