import { MuiShadows, MuiThemeOptions } from '../../types/index';
import provideTheme from '../provideTheme/index';
import useTheme from '../useTheme/index';
import useStyleOverrides from '../useStyleOverrides/index';

export default function useMuiTheme(): MuiThemeOptions {
  provideTheme();

  const ogTheme = useTheme();
  const styleOverrides = useStyleOverrides();
  const muiStyleOverrides = {};

  const keys = Object.keys(styleOverrides);
  keys.forEach(key => (muiStyleOverrides[`Mui${key}`] = styleOverrides[key]));

  const muiTheme: MuiThemeOptions = {
    breakpoints: {
      values: ogTheme.breakpoints?.values
    },
    components: muiStyleOverrides,
    direction: ogTheme.direction,
    palette: ogTheme.palette,
    shadows: ogTheme.shadows as MuiShadows,
    shape: ogTheme.shape,
    spacing: ogTheme.spacing?.unit,
    transitions: {
      duration: ogTheme.transitions?.duration,
      easing: ogTheme.transitions?.easing
    },
    typography: {
      ...ogTheme.typography?.variants,
      htmlFontSize: ogTheme.typography?.htmlFontSize,
      fontFamily: ogTheme.typography?.fontFamily,
      fontSize: ogTheme.typography?.fontSize
    }
  };

  return muiTheme;
}
