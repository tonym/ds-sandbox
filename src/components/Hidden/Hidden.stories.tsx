import { moduleMetadata } from '@storybook/angular';
import { Story } from '@storybook/angular/types-6-0';
import { CardModule } from '../Card/index';
import { TypographyModule } from '../Typography/index';
import provideClasses from '../../styles/provideClasses/index';
import { Classes, Styles } from '../../types/index';
import { Hidden as HiddenComponent } from './Hidden';
import content from './readme.md';

const title = 'Components/Hidden';

export default {
  argTypes: {
    down: {
      control: {
        type: 'inline-radio'
      },
      options: ['xs', 'sm', 'md', 'lg', 'xl']
    },
    only: {
      control: {
        type: 'inline-radio'
      },
      options: ['xs', 'sm', 'md', 'lg', 'xl']
    },
    up: {
      control: {
        type: 'inline-radio'
      },
      options: ['xs', 'sm', 'md', 'lg', 'xl']
    },
    variant: {
      control: {
        type: 'inline-radio'
      },
      options: ['css', 'js']
    }
  },
  component: HiddenComponent,
  decorators: [
    moduleMetadata({
      declarations: [HiddenComponent],
      imports: [CardModule, TypographyModule]
    })
  ],
  parameters: {
    docs: {
      page: content
    }
  },
  title: title
};

const Template: Story<HiddenComponent> = (args: HiddenComponent) => {
  const styles: Styles = {
    card: {
      backgroundColor: '#feebee',
      margin: 'auto',
      padding: 24,
      width: 100
    },
    hidden: {
      width: '100%'
    }
  };

  const classes: Classes = provideClasses(styles);

  return {
    props: { ...args, classes },
    template: `
      <og-hidden
        [className]="classes.hidden"
        [down]="down"
        [only]="only"
        [up]="up"
        [variant]="variant"
      >
        <og-card [className]="classes.card">
          <og-typography align="center">
            hi!
          </og-typography>
        </og-card>
      </og-hidden>
    `
  };
};

export const Hidden = Template.bind({});
