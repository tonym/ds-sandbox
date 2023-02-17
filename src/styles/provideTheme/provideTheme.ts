import createTheme from '../createTheme/index';
import { Theme, ThemeOptions } from '../../types/index';
import { store, setTheme } from '../../store/index';

const deepmerge = require('deepmerge');

export default function provideTheme(themeOptions: ThemeOptions | ThemeOptions[] = {}) {
  const composedThemeOptions: ThemeOptions = Array.isArray(themeOptions) ? deepmerge.all(themeOptions) : themeOptions;
  const theme: Theme = createTheme(composedThemeOptions);
  store.dispatch(setTheme(theme));
}
