import { moduleMetadata } from '@storybook/angular';
import { Story } from '@storybook/angular/types-6-0';
import { CardActions as CardActionsComponent } from './CardActions';
import { CardModule } from '../Card/index';
import { ButtonModule } from '../Button/index';
import createStyles from '../../styles/createStyles/index';
import provideClasses from '../../styles/provideClasses/index';
import { Classes, Styles } from '../../types';
import content from './readme.md';

const title = 'Components/Card Actions';

export default {
  argTypes: {
    backgroundColor: {
      control: {
        type: 'text'
      }
    },
    disableSpacing: {
      control: {
        type: 'boolean'
      }
    }
  },
  component: CardActionsComponent,
  decorators: [
    moduleMetadata({
      declarations: [CardActionsComponent],
      imports: [CardModule, ButtonModule]
    })
  ],
  parameters: {
    docs: {
      page: content
    }
  },
  title: title
};

const Template: Story<CardActionsComponent> = (args: CardActionsComponent) => {
  const styles: Styles = createStyles({
    card: {
      width: 340
    }
  });

  const classes: Classes = provideClasses(styles);

  return {
    props: { ...args, classes },
    template: `
      <og-card [className]="classes.card">
        <og-card-actions
          [backgroundColor]="backgroundColor"
          [disableSpacing]="disableSpacing"
        >
          <og-button color="primary" size="small" variant="text">Details</og-button>
          <og-button color="primary" size="small" variant="text">Add to List</og-button>
        </og-card-actions>
      </og-card>
    `
  };
};

export const CardActions = Template.bind({});
