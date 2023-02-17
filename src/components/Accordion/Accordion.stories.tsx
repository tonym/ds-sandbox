import { moduleMetadata } from '@storybook/angular';
import { Story } from '@storybook/angular/types-6-0';
import { HttpClientModule } from '@angular/common/http';
import { Accordion as AccordionComponent } from './Accordion';
import { DividerModule } from '../Divider/index';
import { FlexModule } from '../Flex/index';
import { FlexChildModule } from '../FlexChild/index';
import { SvgIconModule } from '../SvgIcon/index';
import { TypographyModule } from '../Typography/index';
import content from './readme.md';

const title = 'Components/Accordion';

const typographyVariants: string[] = [
  'body1',
  'body2',
  'button',
  'caption',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'inherit',
  'overline',
  'srOnly',
  'subtitle1',
  'subtitle2'
];

const fontWeights: string[] = ['bold', 'inherit', 'light', 'medium', 'regular'];

export default {
  args: {
    title: 'I am an accordion'
  },
  argTypes: {
    accordionClick: {
      action: 'accordionClick'
    },
    defaultExpanded: {
      control: {
        type: 'boolean'
      }
    },
    showControl: {
      control: {
        type: 'boolean'
      }
    },
    summary: {
      control: {
        type: 'text'
      }
    },
    summaryEndIcon: {
      control: {
        type: 'text'
      }
    },
    summaryStartIcon: {
      control: {
        type: 'text'
      }
    },
    summaryTypographyFontWeight: {
      control: {
        type: 'select'
      },
      options: fontWeights
    },
    summaryTypographyVariant: {
      control: {
        type: 'select'
      },
      options: typographyVariants
    },
    title: {
      control: {
        type: 'text'
      }
    },
    titleEndIcon: {
      control: {
        type: 'text'
      }
    },
    titleStartIcon: {
      control: {
        type: 'text'
      }
    },
    titleTypographyFontWeight: {
      control: {
        type: 'select'
      },
      options: fontWeights
    },
    titleTypographyVariant: {
      control: {
        type: 'select'
      },
      options: typographyVariants
    }
  },
  component: AccordionComponent,
  decorators: [
    moduleMetadata({
      declarations: [AccordionComponent],
      imports: [DividerModule, FlexModule, FlexChildModule, HttpClientModule, SvgIconModule, TypographyModule]
    })
  ],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/ZBqwi9XAuFRBVvTaRAfBaX/Gemini-UI-kit?node-id=3129%3A0'
    },
    docs: {
      page: content
    }
  },
  title: title
};

const Template: Story<AccordionComponent> = (args: AccordionComponent) => ({
  props: args,
  template: `
    <og-accordion
      (accordionClick)="accordionClick($event)"
      [defaultExpanded]="defaultExpanded"
      [showControl]="showControl"
      [summary]="summary"
      [summaryEndIcon]="summaryEndIcon"
      [summaryStartIcon]="summaryStartIcon"
      [summaryTypographyFontWeight]="summaryTypographyFontWeight"
      [summaryTypographyVariant]="summaryTypographyVariant"
      [title]="title"
      [titleEndIcon]="titleEndIcon"
      [titleStartIcon]="titleStartIcon"
      [titleTypographyFontWeight]="titleTypographyFontWeight"
      [titleTypographyVariant]="titleTypographyVariant"
    >
      <og-typography [paragraph]="true" variant="body2">
        These are scientific commentaries; but the commentaries of the whalemen themselves sometimes consist in hard words and harder knocks—the Coke-upon-Littleton of the fist.
        True, among the more upright and honorable whalemen allowances are always made for peculiar cases, where it would be an outrageous moral injustice for one party to claim possession of a whale previously chased or killed by another party.
        But others are by no means so scrupulous.
      </og-typography>
    </og-accordion>
  `
});

export const Accordion = Template.bind({});
