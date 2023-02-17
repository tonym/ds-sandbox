import { Styles, StyleSheet, StyleSheetFactoryOptions } from 'jss';
import cssBaselineStyles from './cssBaselineStyles';
import provideStylesheet from '../provideStylesheet/index';

const deepmerge = require('deepmerge');

const styleSheetFactoryOptions: StyleSheetFactoryOptions = {
  index: 1,
  meta: 'CSS baseline'
};

export default function cssBaseline(userStyles: Styles = {}, userStyleSheetFactoryOptions: StyleSheetFactoryOptions = {}): StyleSheet {
  const styles = deepmerge(cssBaselineStyles, userStyles);
  const options = deepmerge(styleSheetFactoryOptions, userStyleSheetFactoryOptions);
  return provideStylesheet(styles, options);
}
