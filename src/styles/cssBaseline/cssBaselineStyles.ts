import { Styles } from 'jss';
import useTheme from '../useTheme/index';

const theme = useTheme();

export const cssBaselineStyles: Styles = {
  '@global': {
    html: {
      boxSizing: 'border-box',
      height: '100%',
      MozOsxFontSmoothing: 'grayscale',
      WebkitFontSmoothing: 'antialiased',
      WebkitTextSizeAdjust: '100%'
    },
    '*, *::before, *::after': {
      boxSizing: 'inherit'
    },
    'strong, b': {
      fontWeight: theme.typography.fontWeightBold
    },
    body: {
      ...theme.typography.variants.body1,
      backgroundColor: theme.palette.background.default,
      color: theme.palette.text.primary,
      fontFamily: theme.typography.fontFamily,
      height: '100%',
      scrollBehavior: 'smooth',
      textRendering: 'optimizeSpeed',
      '@media print': {
        backgroundColor: theme.palette.common.white
      },
      '&::backdrop': {
        backgroundColor: theme.palette.background.default
      }
    },
    'input, button, textarea, select': {
      font: 'inherit'
    }
  }
};

export default cssBaselineStyles;
