import { moduleMetadata } from '@storybook/angular';
import { Story } from '@storybook/angular/types-6-0';
import { Drawer as DrawerComponent } from './Drawer';
import { AppBarModule } from '../AppBar/index';
import { DividerModule } from '../Divider';
import { PaperModule } from '../Paper/index';
import createStyles from '../../styles/createStyles/index';
import provideClasses from '../../styles/provideClasses/index';
import { Classes, Styles } from '../../types';
import content from './readme.md';

const title = 'Components/Drawer';

export default {
  argTypes: {
    anchor: {
      control: {
        type: 'inline-radio'
      },
      options: ['bottom', 'left', 'right', 'top']
    },
    elevation: {
      control: {
        control: 'number'
      }
    },
    open: {
      control: {
        type: 'boolean'
      }
    },
    variant: {
      control: {
        type: 'inline-radio'
      },
      options: ['permanent', 'persistent', 'temporary']
    }
  },
  component: DrawerComponent,
  decorators: [
    moduleMetadata({
      declarations: [DrawerComponent],
      imports: [AppBarModule, DividerModule, PaperModule]
    })
  ],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/gS8qng4JID7dcHO3xq65ln/%5BGemini%5D-opensesame?node-id=163%3A50948'
    },
    docs: {
      page: content
    }
  },
  title: title
};

const Template: Story<DrawerComponent> = (args: DrawerComponent) => {
  const styles: Styles = createStyles({
    '@global': {
      body: {
        height: '100%',
        margin: '0 !important',
        padding: '0 !important',
        width: '100%'
      },
      '#root': {
        height: '100vh'
      }
    },
    appBar: {
      padding: 16
    },
    wrapper: {
      height: '100%',
      width: '100%'
    }
  });

  const classes: Classes = provideClasses(styles);

  return {
    props: { ...args, classes },
    template: `
      <div [class]="classes.wrapper">
        <og-app-bar [className]="classes.appBar">Gemini</og-app-bar>
        <og-drawer [anchor]="anchor" [elevation]="elevation" [open]="open" [variant]="variant">
          <og-app-bar backgroundColor="default" [className]="classes.appBar" elevated="false" position="static">Drawer</og-app-bar>
          <og-divider></og-divider>
        </og-drawer>
      </div>
    `
  };
};

export const Drawer = Template.bind({});
