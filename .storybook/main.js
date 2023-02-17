
module.exports = {
  stories: [
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-links',
    {
      name: '@storybook/addon-essentials',
    },
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
        transcludeMarkdown: true
      },
    },
    '@storybook/addon-a11y',
    {
      name: 'storybook-addon-designs',
      options: {
        renderTarget: 'tab',
      }
    },
    {
      name: '@storybook/addon-storysource',
      options: {
        loaderOptions: {
          parser: 'typescript'
        }
      }
    },
    '@whitespace/storybook-addon-html'
  ]
}
