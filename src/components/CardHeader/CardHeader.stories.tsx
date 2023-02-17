import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { Story } from '@storybook/angular/types-6-0';
import { CardHeader as CardHeaderComponent } from './CardHeader';
import { CardModule } from '../Card/index';
import { TypographyModule } from '../Typography/index';
import createStyles from '../../styles/createStyles/index';
import provideClasses from '../../styles/provideClasses/index';
import { Classes, Styles } from '../../types';
import content from './readme.md';

const title = 'Components/Card Header';

export default {
  args: {
    subheading: 'card subheading',
    title: 'Card title'
  },
  argTypes: {
    disableTypography: {
      control: {
        type: 'boolean'
      }
    },
    subheading: {
      control: {
        type: 'text'
      }
    },
    subheadingTypographyProps: {
      control: {
        type: 'text'
      }
    },
    title: {
      control: {
        type: 'text'
      }
    },
    titleTypographyProps: {
      control: {
        type: 'text'
      }
    }
  },
  component: CardHeaderComponent,
  decorators: [
    moduleMetadata({
      declarations: [CardHeaderComponent],
      imports: [CardModule, CommonModule, TypographyModule]
    })
  ],
  parameters: {
    docs: {
      page: content
    }
  },
  title: title
};

const Template: Story<CardHeaderComponent> = (args: CardHeaderComponent) => {
  const styles: Styles = createStyles({
    card: {
      width: 400
    }
  });

  const classes: Classes = provideClasses(styles);

  return {
    component: CardHeaderComponent,
    props: { ...args, classes },
    template: `
      <og-card [className]="classes.card">
        <og-card-header
          [disableTypography]="disableTypography"
          [subheading]="subheading"
          [subheadingTypographyProps]="subheadingTypographyProps"
          [title]="title"
          [titleTypographyProps]="titleTypographyProps"
        ></og-card-header>
      </og-card>
    `
  };
};

export const CardHeader = Template.bind({});
