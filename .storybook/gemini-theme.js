import { create } from '@storybook/theming';
import { version } from '../package.json';

export default create({
  base: 'light',
  colorSecondary: 'rgba(0, 125, 255, 0.85)',
  brandTitle: `
  <div style="white-space: nowrap;">
    <img src="images/gemini.png"
      style="width: 28px; vertical-align: bottom;" alt="gemini zodiac sign"
    />
    <span style="font-weight: 700; font-size: 20px; color: #005E9E;">Gemini</span>
    <a href="/versions/" style="color: rgba(0, 0, 0, 0.665); font-size: 11px; text-decoration: none;">${version}</a>
  </div>`,
  fontBase: '"Nunito Sans", sans-serif'
});
