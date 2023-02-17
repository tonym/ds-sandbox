import { moduleMetadata } from '@storybook/angular';
import { Story } from '@storybook/angular/types-6-0';
import provideClasses from '../../styles/provideClasses/index';
import { CardModule } from '../Card/index';
import { FlexModule } from '../Flex/index';
import { TypographyModule } from '../Typography/index';
import { Classes, Styles } from '../../types/index';
import { ClickAwayListener as ClickAwayListenerComponent } from './ClickAwayListener';
import content from './readme.md';

const title = 'Components/Click Away Listener';

export default {
  argTypes: {
    shouldHandle: {
      control: {
        type: 'boolean'
      }
    },
    clickAwayListenerClick: {
      action: 'clickAwayListenerClick'
    }
  },
  component: ClickAwayListenerComponent,
  decorators: [
    moduleMetadata({
      declarations: [ClickAwayListenerComponent],
      imports: [CardModule, FlexModule, TypographyModule]
    })
  ],
  parameters: {
    docs: {
      page: content
    }
  },
  title: title
};

const Template: Story<ClickAwayListenerComponent> = (args: ClickAwayListenerComponent) => {
  const styles: Styles = {
    card: {
      backgroundColor: '#feebee',
      padding: 24
    }
  };

  const classes: Classes = provideClasses(styles);

  return {
    props: { ...args, classes },
    template: `
      <og-flex justifyContent="center">
        <og-click-away-listener (clickAwayListenerClick)="clickAwayListenerClick($event)" [shouldHandle]="shouldHandle">
          <og-card [className]="classes.card">
            <og-typography align="center">Click anywhere but here</og-typography>
          </og-card>
        </og-click-away-listener>
      </og-flex>
    `
  };
};

export const ClickAwayListener = Template.bind({});
