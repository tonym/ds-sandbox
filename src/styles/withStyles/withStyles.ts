import { Styles, StyleSheetFactoryOptions } from 'jss';
import provideStylesheet from '../provideStylesheet/index';
import provideTheme from '../provideTheme/index';
import useTheme from '../useTheme/index';

export default function WithStyles(stylesOrCreator: any, options: StyleSheetFactoryOptions = {}): any {
  return (target: any) => {
    const theme = useTheme();
    if (theme.initial) {
      provideTheme();
    }
    return class extends target {
      private theme = useTheme();
      private styles: Styles = typeof stylesOrCreator === 'function' ? stylesOrCreator(this.theme) : stylesOrCreator;
      private sheet = provideStylesheet(this.styles, options);
      classes = { ...this.sheet.classes };
    };
  };
}
