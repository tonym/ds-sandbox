import defaultTheme from '../defaultTheme/index';
import useTokens from '../useTokens/index';
import { Palette, PaletteOptions } from '../../types/index';

export default function createPalette(userPalette: PaletteOptions = {}): Palette {
  const ogDefault = useTokens();

  const defaultPalette: PaletteOptions = {
    background: {
      default: ogDefault.Background50 || defaultTheme.palette.background.default,
      paper: ogDefault.BackgroundWhite || defaultTheme.palette.background.paper
    },
    divider: ogDefault.Grey800 || defaultTheme.palette.divider,
    error: {
      dark: ogDefault.ErrorDark || defaultTheme.palette.error.dark,
      light: ogDefault.ErrorLight || defaultTheme.palette.error.light,
      main: ogDefault.ErrorDefault || defaultTheme.palette.error.main
    },
    gradients: {
      primary0: ogDefault.GradientsPrimary0 || defaultTheme.palette.gradients.primary0,
      primary45: ogDefault.GradientsPrimary45 || defaultTheme.palette.gradients.primary45
    },
    grey: {
      '50': ogDefault.Grey50 || defaultTheme.palette.grey['50'],
      '100': ogDefault.Grey100 || defaultTheme.palette.grey['100'],
      '200': ogDefault.Grey200 || defaultTheme.palette.grey['200'],
      '300': ogDefault.Grey300 || defaultTheme.palette.grey['300'],
      '400': ogDefault.Grey400 || defaultTheme.palette.grey['400'],
      '500': ogDefault.Grey500 || defaultTheme.palette.grey['500'],
      '600': ogDefault.Grey600 || defaultTheme.palette.grey['600'],
      '700': ogDefault.Grey700 || defaultTheme.palette.grey['700'],
      '800': ogDefault.Grey800 || defaultTheme.palette.grey['800'],
      '900': ogDefault.Grey900 || defaultTheme.palette.grey['900']
    },
    info: {
      dark: ogDefault.InfoDark || defaultTheme.palette.info.dark,
      light: ogDefault.InfoLight || defaultTheme.palette.info.light,
      main: ogDefault.InfoDefault || defaultTheme.palette.info.main
    },
    primary: {
      dark: ogDefault.PrimaryDark || defaultTheme.palette.primary.dark,
      light: ogDefault.PrimaryLight || defaultTheme.palette.primary.light,
      main: ogDefault.PrimaryDefault || defaultTheme.palette.primary.main
    },
    secondary: {
      dark: ogDefault.SecondaryDark || defaultTheme.palette.secondary.dark,
      light: ogDefault.SecondaryLight || defaultTheme.palette.secondary.light,
      main: ogDefault.SecondaryDefault || defaultTheme.palette.secondary.main
    },
    success: {
      dark: ogDefault.SuccessDark || defaultTheme.palette.success.dark,
      light: ogDefault.SuccessLight || defaultTheme.palette.success.light,
      main: ogDefault.SuccessDefault || defaultTheme.palette.success.main
    },
    text: {
      disabled: ogDefault.TextDisabled || defaultTheme.palette.text.disabled,
      primary: ogDefault.TextPrimary || defaultTheme.palette.text.primary,
      secondary: ogDefault.TextSecondary || defaultTheme.palette.text.secondary
    },
    warning: {
      dark: ogDefault.WarningDark || defaultTheme.palette.warning.dark,
      light: ogDefault.WarningLight || defaultTheme.palette.warning.light,
      main: ogDefault.WarningDefault || defaultTheme.palette.warning.main
    }
  };

  const { palette } = defaultTheme;

  const defaultPaletteOptions: PaletteOptions = {
    action: {},
    background: {},
    common: {},
    error: {},
    gradients: {},
    grey: {},
    info: {},
    primary: {},
    secondary: {},
    success: {},
    text: {},
    warning: {}
  };

  const paletteOptions = { ...defaultPaletteOptions, ...userPalette };
  const mode = paletteOptions.mode || palette.mode;

  palette.action = { ...palette.action, ...paletteOptions.action };
  palette.background = { ...palette.background, ...defaultPalette.background, ...paletteOptions.background };
  palette.common = { ...palette.common, ...paletteOptions.common };
  palette.contrastThreshold = paletteOptions.contrastThreshold || palette.contrastThreshold;
  palette.divider = paletteOptions.divider || defaultPalette.divider || defaultTheme.palette.divider;
  palette.error = { ...palette.error, ...defaultPalette.error, ...paletteOptions.error };
  palette.gradients = { ...palette.gradients, ...defaultPalette.gradients, ...paletteOptions.gradients };
  palette.grey = { ...palette.grey, ...defaultPalette.grey, ...paletteOptions.grey };
  palette.info = { ...palette.info, ...defaultPalette.info, ...paletteOptions.info };
  palette.mode = mode;
  palette.primary = { ...palette.primary, ...defaultPalette.primary, ...paletteOptions.primary };
  palette.secondary = { ...palette.secondary, ...defaultPalette.secondary, ...paletteOptions.secondary };
  palette.success = { ...palette.success, ...defaultPalette.success, ...paletteOptions.success };
  palette.text = { ...palette.text, ...defaultPalette.text, ...paletteOptions.text };
  palette.tonalOffset = paletteOptions.tonalOffset || palette.tonalOffset;
  palette.warning = { ...palette.warning, ...defaultPalette.warning, ...paletteOptions.warning };

  return palette;
}
