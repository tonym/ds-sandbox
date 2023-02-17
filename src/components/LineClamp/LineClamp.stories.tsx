import { moduleMetadata } from '@storybook/angular';
import { Story } from '@storybook/angular/types-6-0';
import { ButtonModule } from '../Button/index';
import { LinkModule } from '../Link/index';
import { TypographyModule } from '../Typography/index';
import { LineClamp as LineClampComponent } from './LineClamp';
import content from './readme.md';

const title = 'Components/Line Clamp';

const lipsumContent = `<p>
    Go and gaze upon the iron emblematical harpoons round yonder lofty mansion, and your question will be answered. Yes; all these brave houses and flowery gardens came from the Atlantic, Pacific, and Indian oceans. One and all, they were harpooned and dragged up hither from the bottom of the sea. Can Herr Alexander perform a feat like that?
  </p>
  <p>
    Wooden whales, or whales cut in profile out of the small dark slabs of the noble South Sea war-wood, are frequently met with in the forecastles of American whalers. Some of them are done with much accuracy.
  </p>
  <p>
    “Aye, aye, I thought as much,” soliloquized Stubb, when the boats diverged, “as soon as I clapt eye on ’em, I thought so. Aye, and that’s what he went into the after hold for, so often, as Dough-Boy long suspected. They were hidden down there. The White Whale’s at the bottom of it. Well, well, so be it! Can’t be helped! All right! Give way, men! It ain’t the White Whale to-day! Give way!”
  </p>
`;

export default {
  args: {
    content: lipsumContent
  },
  argTypes: {
    content: {
      control: {
        type: 'text'
      }
    },
    contentTypographyVariant: {
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
    },
    controlButtonProps: {
      control: {
        type: 'object'
      }
    },
    controlLabelLess: {
      control: {
        type: 'text'
      }
    },
    controlLabelMore: {
      control: {
        type: 'text'
      }
    },
    controlType: {
      control: {
        type: 'inline-radio'
      },
      options: ['button', 'typography']
    },
    controlTypographyProps: {
      control: {
        type: 'object'
      }
    },
    forceClamp: {
      control: {
        type: 'boolean'
      }
    },
    height: {
      control: {
        type: 'number'
      }
    },
    lineClampClick: {
      action: 'lineClampClick'
    },
    ngContent: {
      control: {
        type: 'text'
      }
    },
    overlay: {
      control: {
        type: 'boolean'
      }
    },
    whiteSpace: {
      control: {
        type: 'select'
      },
      options: ['breakSpaces', 'normal', 'nowrap', 'pre', 'preLine', 'preWrap']
    }
  },
  component: LineClampComponent,
  decorators: [
    moduleMetadata({
      declarations: [LineClampComponent],
      imports: [ButtonModule, LinkModule, TypographyModule]
    })
  ],
  parameters: {
    docs: {
      page: content
    }
  },
  title: title
};

interface Args extends LineClampComponent {
  ngContent: string;
}

const Template: Story<Args> = (args: Args) => ({
  props: args,
  template: `
    <og-line-clamp
      [content]="content"
      [contentTypographyVariant]="contentTypographyVariant"
      [controlButtonProps]="controlButtonProps"
      [controlLabelLess]="controlLabelLess"
      [controlLabelMore]="controlLabelMore"
      [controlType]="controlType"
      [controlTypographyProps]="controlTypographyProps"
      [forceClamp]="forceClamp"
      [height]="height"
      (lineClampClick)="lineClampClick($event)"
      [overlay]="overlay"
      [whiteSpace]="whiteSpace"
    >
      {{ngContent}}
    </og-line-clamp>
  `
});

export const LineClamp = Template.bind({});
