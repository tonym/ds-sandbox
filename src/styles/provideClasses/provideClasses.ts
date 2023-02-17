import { Styles, StyleSheet, StyleSheetFactoryOptions } from 'jss';
import useTheme from '../useTheme/index';
import provideStylesheet from '../provideStylesheet/index';
import provideTheme from '../provideTheme/index';
import { Classes } from '../../types/index';

export default function provideClasses(stylesOrCreator: any, options: StyleSheetFactoryOptions = {}): Classes {
  let theme = useTheme();
  if (theme.initial) {
    provideTheme();
    theme = useTheme();
  }
  const styles: Styles = typeof stylesOrCreator === 'function' ? stylesOrCreator(theme) : stylesOrCreator;
  const sheet: StyleSheet = provideStylesheet(styles, options);
  return { ...sheet.classes };
}
