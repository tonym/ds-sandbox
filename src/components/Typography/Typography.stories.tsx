import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { Story } from '@storybook/angular/types-6-0';
import { TypographyComponent, TypographyElementMap } from './Typography';
import content from './readme.md';

const title = 'Components/Typography';

export default {
  args: {
    ngContent:
      '"In heaven\'s name, man," cried Stubb, "are you ramming home a cartridge there?—Avast! How will that help him; jamming that iron-bound bucket on top of his head? Avast, will ye!"',
    elementMap: TypographyElementMap
  },
  argTypes: {
    align: {
      control: {
        type: 'select'
      },
      options: ['inherit', 'left', 'center', 'right', 'justify']
    },
    color: {
      control: {
        type: 'select'
      },
      options: ['error', 'inherit', 'info', 'primary', 'secondary', 'success', 'textPrimary', 'textSecondary', 'warning']
    },
    display: {
      control: {
        type: 'select'
      },
      options: ['block', 'inherit', 'initial', 'inline', 'inlineBlock']
    },
    element: {
      control: {
        type: 'select'
      },
      options: ['', 'div', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span']
    },
    elementMap: {
      control: {
        type: 'object'
      }
    },
    fontWeight: {
      control: {
        type: 'select'
      },
      options: ['', 'black', 'bold', 'extraBold', 'extraLight', 'inherit', 'light', 'medium', 'regular', 'semiBold', 'thin']
    },
    gutterBottom: {
      control: {
        type: 'boolean'
      }
    },
    ngContent: {
      control: {
        type: 'text'
      }
    },
    noWrap: {
      control: {
        type: 'boolean'
      }
    },
    paragraph: {
      control: {
        type: 'boolean'
      }
    },
    variant: {
      control: {
        type: 'select'
      },
      options: [
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
      ]
    }
  },
  component: TypographyComponent,
  decorators: [
    moduleMetadata({
      declarations: [TypographyComponent],
      imports: [CommonModule]
    })
  ],
  parameters: {
    docs: {
      page: content
    }
  },
  title: title
};

interface Args extends TypographyComponent {
  ngContent: string;
}

const Template: Story<Args> = (args: Args) => ({
  props: args,
  template: `
    <og-typography
      [align]="align"
      [color]="color"
      [display]="display"
      [element]="element"
      [elementMap]="elementMap"
      [fontWeight]="fontWeight"
      [gutterBottom]="gutterBottom"
      [noWrap]="noWrap"
      [paragraph]="paragraph"
      [variant]="variant"
    >{{ ngContent }}</og-typography>
  `
});

export const Typography = Template.bind({});
