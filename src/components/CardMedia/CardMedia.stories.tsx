import { moduleMetadata } from '@storybook/angular';
import { Story } from '@storybook/angular/types-6-0';
import { CardMedia as CardMediaComponent } from './CardMedia';
import { CardModule } from '../Card/index';
import { CardContentModule } from '../CardContent';
import createStyles from '../../styles/createStyles/index';
import provideClasses from '../../styles/provideClasses/index';
import { Classes, Styles } from '../../types';
import content from './readme.md';

const title = 'Components/Card Media';

export default {
  args: {
    src: 'https://picsum.photos/800/300'
  },
  argTypes: {
    alt: {
      control: {
        type: 'text'
      }
    },
    element: {
      control: {
        type: 'radio'
      },
      options: ['audio', 'div', 'img', 'picture', 'video']
    },
    media: {
      control: {
        type: 'text'
      }
    },
    poster: {
      control: {
        type: 'text'
      }
    },
    src: {
      control: {
        type: 'text'
      }
    },
    type: {
      control: {
        type: 'text'
      }
    }
  },
  component: CardMediaComponent,
  decorators: [
    moduleMetadata({
      declarations: [CardMediaComponent],
      imports: [CardModule, CardContentModule]
    })
  ],
  parameters: {
    docs: {
      page: content
    }
  },
  title: title
};

const Template: Story<CardMediaComponent> = (args: CardMediaComponent) => {
  const styles: Styles = createStyles({
    card: {
      width: 300
    },
    cardMedia: {
      height: 140
    }
  });

  const classes: Classes = provideClasses(styles);

  return {
    props: { ...args, classes },
    template: `
      <og-card [className]="classes.card">
        <og-card-media
          [className]="classes.cardMedia"
          [alt]="alt"
          [element]="element"
          [media]="media"
          [poster]="poster"
          [src]="src"
          [type]="type"
        ></og-card-media>
        <og-card-content>What a nice picture!</og-card-content>
      </og-card>
    `
  };
};

export const CardMedia = Template.bind({});
