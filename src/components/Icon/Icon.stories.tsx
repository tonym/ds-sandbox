import { moduleMetadata } from '@storybook/angular';
import { Story } from '@storybook/angular/types-6-0';
import { Icon as IconComponent } from './Icon';
import content from './readme.md';

const title = 'Components/Icon';

export default {
  args: {
    material_icon_name: 'info'
  },
  argTypes: {
    color: {
      control: {
        type: 'select'
      },
      options: ['error', 'info', 'inherit', 'primary', 'secondary', 'success', 'warning']
    },
    fontSize: {
      control: {
        type: 'inline-radio'
      },
      options: ['inherit', 'lg', 'md', 'sm']
    },
    material_icon_name: {
      control: {
        type: 'text'
      }
    }
  },
  component: IconComponent,
  decorators: [
    moduleMetadata({
      declarations: [IconComponent]
    })
  ],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/ZBqwi9XAuFRBVvTaRAfBaX/Gemini-UI-kit?node-id=4260%3A23477'
    },
    docs: {
      page: content
    }
  },
  title: title
};

interface Args extends IconComponent {
  material_icon_name: string;
}

const Template: Story<Args> = (args: Args) => ({
  props: { ...args },
  template: `
    <og-icon
      [color]="color"
      [fontSize]="fontSize"
    >
      {{material_icon_name}}
    </og-icon>
  `
});

export const Icon = Template.bind({});
