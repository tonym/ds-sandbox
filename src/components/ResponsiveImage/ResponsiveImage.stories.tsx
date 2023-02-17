import { moduleMetadata } from '@storybook/angular';
import { Story } from '@storybook/angular/types-6-0';
import { ImageModule } from '../Image/index';
import { ResponsiveImage as ResponsiveImageComponent } from './ResponsiveImage';
import content from './readme.md';

const title = 'Components/Responsive Image';

export default {
  args: {
    src: 'https://media.opensesame.com/images/test_pattern.jpg'
  },
  argTypes: {
    src: {
      control: {
        type: 'text'
      }
    },
    alt: {
      control: {
        type: 'text'
      }
    },
    bgColor: {
      control: {
        type: 'text'
      }
    },
    blur: {
      control: {
        type: 'text'
      }
    },
    brightness: {
      control: {
        max: 100,
        min: -100,
        type: 'number'
      }
    },
    canvas: {
      control: {
        type: 'text'
      }
    },
    contrast: {
      control: {
        max: 100,
        min: -100,
        type: 'number'
      }
    },
    crop: {
      control: {
        type: 'text'
      }
    },
    disable: {
      control: {
        options: ['upscale'],
        type: 'check'
      }
    },
    dpr: {
      control: {
        max: 10,
        min: 0,
        type: 'number'
      }
    },
    element: {
      control: {
        type: 'inline-radio'
      },
      options: ['img', 'picture']
    },
    enable: {
      control: {
        type: 'check'
      },
      options: ['upscale']
    },
    fit: {
      control: {
        type: 'inline-radio'
      },
      options: ['bounds', 'cover', 'crop']
    },
    format: {
      control: {
        type: 'select'
      },
      options: ['bjpg', 'gif', 'jpg', 'pjpg', 'png', 'png8', 'png24', 'png32', 'webp', 'webpll', 'webply']
    },
    height: {
      control: {
        type: 'text'
      }
    },
    intrinsicValues: {
      control: {
        type: 'boolean'
      }
    },
    optimize: {
      control: {
        type: 'inline-radio'
      },
      options: ['low', 'medium', 'high']
    },
    orient: {
      control: {
        type: 'text'
      }
    },
    pad: {
      control: {
        type: 'text'
      }
    },
    quality: {
      control: {
        type: 'text'
      }
    },
    resizeFilter: {
      control: {
        type: 'select'
      },
      options: ['bilinear', 'bicubic', 'cubic', 'lanczos', 'lanczos2', 'lanczos3', 'linear', 'nearest']
    },
    saturation: {
      control: {
        max: 100,
        min: -100,
        type: 'number'
      }
    },
    sharpen: {
      control: {
        type: 'text'
      }
    },
    sources: {
      control: {
        type: 'object'
      }
    },
    trim: {
      control: {
        type: 'text'
      }
    },
    variant: {
      control: {
        type: 'inline-radio'
      },
      options: ['icon', 'sm', 'md', 'lg', 'xl']
    },
    width: {
      control: {
        type: 'text'
      }
    }
  },
  component: ResponsiveImageComponent,
  decorators: [
    moduleMetadata({
      declarations: [ResponsiveImageComponent],
      imports: [ImageModule]
    })
  ],
  parameters: {
    docs: {
      page: content
    }
  },
  title: title
};

const Template: Story<ResponsiveImageComponent> = (args: ResponsiveImageComponent) => ({
  props: args,
  template: `
    <og-responsive-image
      [alt]="alt"
      [bgColor]="bgColor"
      [blur]="blur"
      [brightness]="brightness"
      [canvas]="canvas"
      [contrast]="contrast"
      [crop]="crop"
      [disable]="disable"
      [dpr]="dpr"
      [element]="element"
      [enable]="enable"
      [fit]="fit"
      [format]="format"
      [height]="height"
      [intrinsicValues]="intrinsicValues"
      [optimize]="optimize"
      [orient]="orient"
      [pad]="pad"
      [quality]="quality"
      [resizeFilter]="resizeFilter"
      [saturation]="saturation"
      [sharpen]="sharpen"
      [sizes]="sizes"
      [sources]="sources"
      [src]="src"
      [srcset]="srcset"
      [trim]="trim"
      [variant]="variant"
      [width]="width"
    ></og-responsive-image>
    <p>source image for testing: https://media.opensesame.com/images/test_pattern.jpg</p>
  `
});

export const ResponsiveImage = Template.bind({});
