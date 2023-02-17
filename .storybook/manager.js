import { addons } from '@storybook/addons';
import GeminiTheme from './gemini-theme';

addons.setConfig({
  sidebar: {
    showRoots: false
  },
  theme: GeminiTheme
});
