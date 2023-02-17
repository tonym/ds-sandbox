import cssBaseline from '../src/styles/cssBaseline/index';
import { setCompodocJson } from '@storybook/addon-docs/angular';
import docJson from '../documentation.json';

setCompodocJson(docJson);

cssBaseline();

export const parameters = {
  angularLegacyRendering: true,
  html: {
    highlighter: {
      showLineNumbers: true,
      wrapLines: true
    },
    removeEmptyComments: true
  },
  previewTabs: {
    'storybook/docs/panel': { index: -1 }
  },
  options: {
    storySort: {
      order: [
        'Home',
        'Installation',
        'React',
        'Angular',
        'Other Platforms',
        'Develop with Gemini',
        ['System Overview', 'Styles', 'Themes', 'Tokens', 'Color', 'Images'],
        'Components',
        ['Overview'],
        'Composites',
        ['Overview'],
        'Helpers',
        ['Overview'],
        'Theming Engine',
        ['Overview', 'Creators', 'Providers', 'Utilities', 'Theme functions', 'Color helpers', 'String helpers', 'Theme helpers'],
        'GeminiCSS',
        'Contributing',
        ['Getting Started', 'Workflow', 'Components', 'Theming Engine'],
        'Release Notes'
      ]
    }
  },
  viewMode: 'docs'
};
