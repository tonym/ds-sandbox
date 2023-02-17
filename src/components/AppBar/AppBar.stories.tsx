import { moduleMetadata } from '@storybook/angular';
import { Story } from '@storybook/angular/types-6-0';
import { AppBar as AppBarComponent } from './AppBar';
import createStyles from '../../styles/createStyles/index';
import provideClasses from '../../styles/provideClasses/index';
import { Classes, Styles } from '../../types';
import content from './readme.md';

const title = 'Components/App Bar';

export default {
  args: {
    ngContent: 'Gemini'
  },
  argTypes: {
    backgroundColor: {
      control: {
        type: 'select'
      },
      options: ['default', 'error', 'info', 'inherit', 'primary', 'secondary', 'success', 'transparent', 'warning']
    },
    elevated: {
      control: {
        type: 'boolean'
      }
    },
    ngContent: {
      control: {
        type: 'text'
      }
    },
    placement: {
      control: {
        type: 'inline-radio'
      },
      options: ['bottom', 'top']
    },
    position: {
      control: {
        type: 'inline-radio'
      },
      options: ['absolute', 'fixed', 'relative', 'static']
    }
  },
  component: AppBarComponent,
  decorators: [
    moduleMetadata({
      declarations: [AppBarComponent]
    })
  ],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/ZBqwi9XAuFRBVvTaRAfBaX/Gemini-UI-kit?node-id=3633%3A0'
    },
    docs: {
      page: content
    }
  },
  title: title
};

interface Args extends AppBarComponent {
  ngContent: string;
}

const Template: Story<Args> = (args: Args) => {
  const styles: Styles = createStyles({
    appBar: {
      padding: 16
    }
  });

  const classes: Classes = provideClasses(styles);

  return {
    component: AppBarComponent,
    props: { ...args, classes },
    template: `
      <og-app-bar
        [backgroundColor]="backgroundColor"
        [className]="classes.appBar"
        [elevated]="elevated"
        [placement]="placement"
        [position]="position"
      >
        {{ngContent}}
      </og-app-bar>
    `
  };
};

export const AppBar = Template.bind({});
