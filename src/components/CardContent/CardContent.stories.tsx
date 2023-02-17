import { moduleMetadata } from '@storybook/angular';
import { Story } from '@storybook/angular/types-6-0';
import { CardContent as CardContentComponent } from './CardContent';
import { CardModule } from '../Card/index';
import createStyles from '../../styles/createStyles/index';
import provideClasses from '../../styles/provideClasses/index';
import { Classes, Styles } from '../../types/index';
import content from './readme.md';

const title = 'Components/Card Content';

export default {
  args: {
    ngContent: 'Card content area'
  },
  component: CardContentComponent,
  decorators: [
    moduleMetadata({
      declarations: [CardContentComponent],
      imports: [CardModule]
    })
  ],
  parameters: {
    docs: {
      page: content
    }
  },
  title: title
};

interface Args extends CardContentComponent {
  ngContent: string;
}

const Template: Story<Args> = (args: Args) => {
  const styles: Styles = createStyles({
    card: {
      padding: 16,
      width: 400
    }
  });

  const classes: Classes = provideClasses(styles);

  return {
    component: CardContentComponent,
    props: { ...args, classes },
    template: `
      <og-card [className]="classes.card">
        <og-card-content>{{ ngContent }}</og-card-content>
      </og-card>
    `
  };
};

export const CardContent = Template.bind({});
