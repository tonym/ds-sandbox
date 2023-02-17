import { moduleMetadata } from '@storybook/angular';
import { Story } from '@storybook/angular/types-6-0';
import { Card as CardComponent } from './Card';
import { PaperModule } from '../Paper/index';
import createStyles from '../../styles/createStyles/index';
import provideClasses from '../../styles/provideClasses/index';
import { Classes, Styles } from '../../types';
import content from './readme.md';

const title = 'Components/Card';

export default {
  args: {
    ngContent: '',
    raised: false
  },
  argTypes: {
    elevation: {
      control: {
        type: 'number'
      }
    },
    ngContent: {
      control: {
        type: 'text'
      }
    },
    radius: {
      control: {
        type: 'inline-radio'
      },
      options: ['xs', 'sm', 'md', 'lg', 'xl']
    },
    raised: {
      control: {
        type: 'boolean'
      }
    },
    square: {
      control: {
        type: 'boolean'
      }
    },
    variant: {
      control: {
        type: 'inline-radio'
      },
      options: ['elevated', 'outlined']
    }
  },
  component: CardComponent,
  decorators: [
    moduleMetadata({
      declarations: [CardComponent],
      imports: [PaperModule]
    })
  ],
  parameters: {
    docs: {
      page: content
    }
  },
  title: title
};

interface Args extends CardComponent {
  ngContent: string;
}

const Template: Story<Args> = (args: Args) => {
  const styles: Styles = createStyles({
    card: {
      height: 240,
      padding: 16,
      width: 200
    }
  });

  const classes: Classes = provideClasses(styles);

  return {
    props: { ...args, classes },
    template: `
      <og-card
        [className]="classes.card"
        [elevation]="elevation"
        [radius]="radius"
        [raised]="raised"
        [square]="square"
        [variant]="variant"
      >{{ngContent}}</og-card>
    `
  };
};

export const Card = Template.bind({});
