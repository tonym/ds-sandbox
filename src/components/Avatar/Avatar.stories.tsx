import { moduleMetadata } from '@storybook/angular';
import { Story } from '@storybook/angular/types-6-0';
import { Avatar as AvatarComponent } from './Avatar';
import { ImageModule } from '../Image/index';
import content from './readme.md';

const title = 'Components/Avatar';

export default {
  args: {
    ngContent: '',
    src: 'https://secure.gravatar.com/avatar/efc34c62535d6046e76e09e312ecd2b4?s=96&d=mm&r=g'
  },
  argTypes: {
    ngContent: {
      control: {
        type: 'text'
      }
    },
    src: {
      control: {
        type: 'text'
      }
    }
  },
  component: AvatarComponent,
  decorators: [
    moduleMetadata({
      declarations: [AvatarComponent],
      imports: [ImageModule]
    })
  ],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/gS8qng4JID7dcHO3xq65ln/%5BGemini%5D-opensesame?node-id=77%3A10568'
    },
    docs: {
      page: content
    }
  },
  title: title
};

interface Args extends AvatarComponent {
  ngContent: string;
}

const Template: Story<Args> = (args: Args) => ({
  props: args,
  template: `<og-avatar
    [src]="src"
  >
    {{ngContent}}
  </og-avatar>`
});

export const Avatar = Template.bind({});
