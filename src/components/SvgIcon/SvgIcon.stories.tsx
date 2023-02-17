import { moduleMetadata } from '@storybook/angular';
import { HttpClientModule } from '@angular/common/http';
import { Story } from '@storybook/angular/types-6-0';
import { SvgIcon as SvgIconComponent } from './SvgIcon';
import { SvgIconService } from './SvgIcon.service';
import content from './readme.md';

const title = 'Components/Svg Icon';

export default {
  args: {
    icon: 'info'
  },
  argTypes: {
    color: {
      control: {
        type: 'select'
      },
      options: ['error', 'info', 'inherit', 'primary', 'secondary', 'success', 'warning']
    },
    fontSize: {
      control: {
        type: 'inline-radio'
      },
      options: ['inherit', 'lg', 'md', 'sm']
    },
    icon: {
      control: {
        type: 'text'
      }
    },
    iconStyle: {
      control: {
        type: 'inline-radio'
      },
      options: ['filled', 'outlined', 'rounded', 'sharp', 'twotone']
    },
    shapeRendering: {
      control: {
        type: 'select'
      },
      options: ['auto', 'optimizeSpeed', 'crispEdges', 'geometricPrecision']
    },
    svgTitle: {
      control: {
        type: 'text'
      }
    },
    viewBox: {
      control: {
        type: 'text'
      }
    }
  },
  component: SvgIconComponent,
  decorators: [
    moduleMetadata({
      declarations: [SvgIconComponent],
      imports: [HttpClientModule],
      providers: [
        {
          provide: SvgIconService
        }
      ]
    })
  ],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/ZBqwi9XAuFRBVvTaRAfBaX/Gemini-UI-kit?node-id=4260%3A23477'
    },
    docs: {
      page: content
    }
  },
  title: title
};

const Template: Story<SvgIconComponent> = (args: SvgIconComponent) => ({
  props: args,
  template: `
    <og-svg-icon
      [color]="color"
      [fontSize]="fontSize"
      [icon]="icon"
      [iconStyle]="iconStyle"
      [shapeRendering]="shapeRendering"
      [svgTitle]="svgTitle"
      [viewBox]="viewBox"
    ></og-svg-icon>
  `
});

export const SvgIcon = Template.bind({});
