import { moduleMetadata } from '@storybook/angular';
import { Story } from '@storybook/angular/types-6-0';
import { CardActionArea as CardActionAreaComponent } from './CardActionArea';
import { ButtonBaseModule } from '../ButtonBase/index';
import { CardModule } from '../Card/index';
import createStyles from '../../styles/createStyles/index';
import provideClasses from '../../styles/provideClasses/index';
import { Classes, Styles } from '../../types';
import content from './readme.md';

const title = 'Components/Card Action Area';

export default {
  args: {
    ngContent: 'Card action area makes the card clickable'
  },
  argTypes: {
    link: {
      control: {
        type: 'text'
      }
    },
    newTab: {
      control: {
        type: 'boolean'
      }
    },
    ngContent: {
      control: {
        type: 'text'
      }
    }
  },
  component: CardActionAreaComponent,
  decorators: [
    moduleMetadata({
      declarations: [CardActionAreaComponent],
      imports: [ButtonBaseModule, CardModule]
    })
  ],
  parameters: {
    docs: {
      page: content
    }
  },
  title: title
};

interface Args extends CardActionAreaComponent {
  ngContent: string;
}

const Template: Story<Args> = (args: Args) => {
  const styles: Styles = createStyles({
    card: {
      width: 240
    },
    cardActionArea: {
      padding: 16
    }
  });

  const classes: Classes = provideClasses(styles);

  return {
    props: { ...args, classes },
    template: `
      <og-card [className]="classes.card">
        <og-card-action-area
          [className]="classes.cardActionArea"
          [link]="link"
          [newTab]="newTab"
        >
          {{ngContent}}
        </og-card-action-area>
      </og-card>
    `
  };
};

export const CardActionArea = Template.bind({});
