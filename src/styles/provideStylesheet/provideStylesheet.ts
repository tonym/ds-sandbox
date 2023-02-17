import { Styles, StyleSheet, StyleSheetFactoryOptions } from 'jss';
import createStylesheet from '../createStylesheet/index';
import { addSheet, store } from '../../store/index';
import fromCamelToDash from '../../helpers/fromCamelToDash/index';

const styleSheetFactoryOptions: StyleSheetFactoryOptions = {
  index: 5,
  meta: 'OG Styles'
};

export default function provideStylesheet(styles: Styles, options: StyleSheetFactoryOptions = {}): StyleSheet {
  options.generateId = options.meta ? (rule, sheet) => `${options.meta}-${fromCamelToDash(rule.key)}` : undefined;
  options = { ...styleSheetFactoryOptions, ...options };
  const key = options.meta === styleSheetFactoryOptions.meta ? JSON.stringify(styles) : options.meta;
  const sheet = key ? store.getState().sheets[key] : key;
  const stylesheet: StyleSheet = sheet ? sheet : createStylesheet(styles, options).attach();
  if (key) {
    store.dispatch(addSheet({ [key]: stylesheet }));
  }
  return stylesheet;
}
