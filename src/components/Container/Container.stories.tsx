import { moduleMetadata } from '@storybook/angular';
import { Story } from '@storybook/angular/types-6-0';
import { Container as ContainerComponent } from './Container';
import content from './readme.md';

const title = 'Components/Container';

export default {
  argTypes: {
    fixed: {
      control: {
        type: 'boolean'
      }
    },
    maxWidth: {
      control: {
        type: 'select'
      },
      options: ['xs', 'sm', 'md', 'lg', 'xl']
    }
  },
  component: ContainerComponent,
  decorators: [
    moduleMetadata({
      declarations: [ContainerComponent]
    })
  ],
  parameters: {
    docs: {
      page: content
    }
  },
  title: title
};

const Template: Story<ContainerComponent> = (args: ContainerComponent) => ({
  props: args,
  template: `
    <og-container [fixed]="fixed" [maxWidth]="maxWidth">
      The container is a content wrapper that implements breakpoints
    </og-container>
  `
});

export const Container = Template.bind({});
