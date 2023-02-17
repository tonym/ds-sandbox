import { Styles, StyleSheet } from 'jss';
import { Components, ComponentNames } from '../../types/index';
import { arrayify, isNumber } from '../../helpers/index';
import provideStylesheet from '../provideStylesheet/index';
import provideTheme from '../provideTheme/index';
import { Theme } from '../../types/index';
import useTheme from '../useTheme/index';
import * as ComponentImports from '../../components/index';
import { store, updateCss } from '../../store/index';

const coreComponents: ComponentNames[] = Object.keys(Components).filter(key => !isNumber(key)) as ComponentNames[];

export default function provideCss(userComponents: ComponentNames | ComponentNames[] = coreComponents): string {
  let theme: Theme = useTheme();

  if (theme.initial) {
    provideTheme();
    theme = useTheme();
  }

  const components = arrayify(userComponents).filter(component => coreComponents.includes(component));
  const stylesheets: string[] = [];
  const keys = components.join('');
  const key: string = components.length > 6 ? keys.match(/[A-Z]/g)?.join('') || '' : keys;
  const stateCss = store.getState().css[key] || '';
  let css: string;

  if (stateCss) {
    css = stateCss;
  } else {
    components.forEach(component => {
      const classKey = ComponentImports[`${component}ClassKey`];
      const stylesOrCreator = ComponentImports[`${component}Styles`];
      const styles: Styles = stylesOrCreator(theme);
      const sheet: StyleSheet = provideStylesheet(styles, { meta: classKey });
      const css = sheet.toString({ allowEmpty: true });
      stylesheets.push(`\n\n/* --- ${component} --- */\n${css}`);
    });
    css = stylesheets.join('');
  }

  store.dispatch(updateCss({ [key]: css }));

  return css;
}
