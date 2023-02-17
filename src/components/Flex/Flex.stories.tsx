import { moduleMetadata } from '@storybook/angular';
import { Story } from '@storybook/angular/types-6-0';
import { CardModule } from '../Card/index';
import { FlexChildModule } from '../FlexChild/index';
import { TypographyModule } from '../Typography/index';
import { Classes, Styles } from '../../types/index';
import provideClasses from '../../styles/provideClasses/index';
import { Flex as FlexComponent } from './Flex';
import content from './readme.md';

const title = 'Components/Flex';

export default {
  args: {
    gap: '0'
  },
  argTypes: {
    alignContent: {
      control: {
        type: 'select'
      },
      options: ['center', 'flexEnd', 'flexStart', 'spaceAround', 'spaceBetween', 'stretch']
    },
    alignItems: {
      control: {
        type: 'select'
      },
      options: ['baseline', 'center', 'flexEnd', 'flexStart', 'stretch']
    },
    flexDirection: {
      control: {
        type: 'select'
      },
      options: ['column', 'columnReverse', 'row', 'rowReverse']
    },
    flexWrap: {
      control: {
        type: 'select'
      },
      options: ['nowrap', 'wrap', 'wrapReverse']
    },
    gap: {
      control: {
        type: 'text'
      }
    },
    justifyContent: {
      control: {
        type: 'select'
      },
      options: ['center', 'flexEnd', 'flexStart', 'spaceAround', 'spaceBetween', 'spaceEvenly']
    }
  },
  component: FlexComponent,
  decorators: [
    moduleMetadata({
      declarations: [FlexComponent],
      imports: [CardModule, FlexChildModule, TypographyModule]
    })
  ],
  parameters: {
    docs: {
      page: content
    }
  },
  title: title
};

const Template: Story<FlexComponent> = (args: FlexComponent) => {
  const styles: Styles = {
    child1: {
      backgroundColor: '#FEEBEE',
      minWidth: 100,
      padding: 16
    },
    child2: {
      backgroundColor: '#E1F5FE',
      minWidth: 50,
      padding: 16
    }
  };

  const classes: Classes = provideClasses(styles);

  return {
    props: { ...args, classes },
    template: `
      <og-flex
        [alignContent]="alignContent"
        [alignItems]="alignItems"
        [flexDirection]="flexDirection"
        [flexWrap]="flexWrap"
        [gap]="gap"
        [justifyContent]="justifyContent"
      >
        <og-flex-child [className]="classes.child1">
          <og-typography align="center">flex child one</og-typography>
        </og-flex-child>
        <og-flex-child [className]="classes.child2">
          <og-typography align="center">flex child two</og-typography>
          <og-typography align="center" variant="body2">with some extra content</og-typography>
          <og-typography align="center" variant="caption">and a caption</og-typography>
        </og-flex-child>
      </og-flex>
    `
  };
};

export const Flex = Template.bind({});
