import { moduleMetadata } from '@storybook/angular';
import { Story } from '@storybook/angular/types-6-0';
import { FlexModule } from '../Flex/index';
import { TypographyModule } from '../Typography/index';
import provideClasses from '../../styles/provideClasses/index';
import { Classes, Styles } from '../../types/index';
import { FlexChild as FlexChildComponent } from './FlexChild';
import content from './readme.md';

const title = 'Components/Flex Child';

export default {
  argTypes: {
    flexChildOne_alignSelf: {
      control: {
        type: 'select'
      },
      options: ['auto', 'baseline', 'center', 'flexEnd', 'flexStart', 'stretch']
    },
    flexChildOne_flex: {
      control: {
        type: 'text'
      }
    },
    flexChildOne_flexBasis: {
      control: {
        type: 'text'
      }
    },
    flexChildOne_flexGrow: {
      control: {
        type: 'text'
      }
    },
    flexChildOne_flexShrink: {
      control: {
        type: 'text'
      }
    },
    flexChildOne_order: {
      control: {
        type: 'text'
      }
    },
    flexChildTwo_alignSelf: {
      control: {
        type: 'select'
      },
      options: ['auto', 'baseline', 'center', 'flexEnd', 'flexStart', 'stretch']
    },
    flexChildTwo_flex: {
      control: {
        type: 'text'
      }
    },
    flexChildTwo_flexBasis: {
      control: {
        type: 'text'
      }
    },
    flexChildTwo_flexGrow: {
      control: {
        type: 'text'
      }
    },
    flexChildTwo_flexShrink: {
      control: {
        type: 'text'
      }
    },
    flexChildTwo_order: {
      control: {
        type: 'text'
      }
    },
    alignSelf: {
      table: {
        disable: true
      }
    },
    flex: {
      table: {
        disable: true
      }
    },
    flexBasis: {
      table: {
        disable: true
      }
    },
    flexGrow: {
      table: {
        disable: true
      }
    },
    flexShrink: {
      table: {
        disable: true
      }
    },
    order: {
      table: {
        disable: true
      }
    }
  },
  component: FlexChildComponent,
  decorators: [
    moduleMetadata({
      declarations: [FlexChildComponent],
      imports: [FlexModule, TypographyModule]
    })
  ],
  parameters: {
    docs: {
      page: content
    }
  },
  title: title
};

const Template: Story<FlexChildComponent> = (args: FlexChildComponent) => {
  const styles: Styles = {
    flexChildOne: {
      backgroundColor: '#FEEBEE'
    },
    flexChildTwo: {
      backgroundColor: '#E1F5FE'
    },
    typography: {
      padding: 24
    }
  };

  const classes: Classes = provideClasses(styles);

  return {
    props: { ...args, classes },
    template: `
      <og-flex>
        <og-flex-child
          [alignSelf]="flexChildOne_alignSelf"
          [className]="classes.flexChildOne"
          [flex]="flexChildOne_flex"
          [flexBasis]="flexChildOne_flexBasis"
          [flexGrow]="flexChildOne_flexGrow"
          [flexShrink]="flexChildOne_flexShrink"
          [order]="flexChildOne_order"
        >
          <og-typography align="center" [className]="classes.typography">flexChildOne</og-typography>
        </og-flex-child>
        <og-flex-child
          [alignSelf]="flexChildTwo_alignSelf"
          [className]="classes.flexChildTwo"
          [flex]="flexChildTwo_flex"
          [flexBasis]="flexChildTwo_flexBasis"
          [flexGrow]="flexChildTwo_flexGrow"
          [flexShrink]="flexChildTwo_flexShrink"
          [order]="flexChildTwo_order"
        >
          <og-typography align="center" [className]="classes.typography">flexChildTwo</og-typography>
        </og-flex-child>
      </og-flex>
    `
  };
};

export const FlexChild = Template.bind({});
