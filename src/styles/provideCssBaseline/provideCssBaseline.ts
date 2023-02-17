import { StyleSheet } from 'jss';
import cssBaselineStyles from '../cssBaseline/cssBaselineStyles';
import provideStylesheet from '../provideStylesheet/index';
import provideTheme from '../provideTheme/index';
import { Theme } from '../../types/index';
import useTheme from '../useTheme/index';
import { store, updateCss } from '../../store/index';

export default function provideCssBaseline(): string {
  let theme: Theme = useTheme();

  if (theme.initial) {
    provideTheme();
    theme = useTheme();
  }

  const key = 'baseline';
  const stateCss = store.getState().css[key] || '';
  let css: string;

  if (stateCss) {
    css = stateCss;
  } else {
    const sheet: StyleSheet = provideStylesheet(cssBaselineStyles, { meta: key });
    css = sheet.toString({ allowEmpty: true });
  }

  store.dispatch(updateCss({ [key]: css }));

  return css;
}
