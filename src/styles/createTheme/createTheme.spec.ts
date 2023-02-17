import createTheme from './createTheme';
import { ThemeOptions } from '../../types/index';
import { Blue } from '../../colors/index';

describe('createTheme', () => {
  it('should return the default theme if no options provided', () => {
    const theme = createTheme();
    const expectedTheme = createTheme({});
    expect(theme).toEqual(expectedTheme);
  });

  it('should return a theme with updated direction', () => {
    const themeOptions: ThemeOptions = {
      direction: 'rtl'
    };
    const theme = createTheme(themeOptions);
    const localTheme = createTheme();
    const expectedTheme = { ...localTheme, direction: themeOptions.direction };
    expect(theme).toEqual(expectedTheme);
  });

  it('should return a theme with updated overrides', () => {
    const themeOptions: ThemeOptions = {
      overrides: {
        Paper: {
          root: {
            fontFamily: '"Comic Sans", sans-serif'
          }
        }
      }
    };
    const theme = createTheme(themeOptions);
    const results = theme.overrides.Paper && theme.overrides.Paper.root ? theme.overrides.Paper.root.fontFamily : undefined;
    expect(results).toBe('"Comic Sans", sans-serif');
  });

  it('should return a theme with updated palette', () => {
    const themeOptions: ThemeOptions = {
      palette: {
        primary: {
          main: Blue[500]
        }
      }
    };
    const theme = createTheme(themeOptions);
    const localTheme = createTheme();
    localTheme.palette.primary.main = Blue[500];
    expect(theme).toEqual(localTheme);
  });

  it('should return a theme with updated shadows', () => {
    const themeOptions: ThemeOptions = {
      shadows: [
        '0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)',
        '0px 3px 1px - 2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)'
      ]
    };
    const theme = createTheme(themeOptions);
    const localTheme = createTheme();
    const expectedTheme = { ...localTheme, shadows: themeOptions.shadows };
    expect(theme).toEqual(expectedTheme);
  });

  it('should return a theme with an updated shape', () => {
    const themeOptions: ThemeOptions = {
      shape: {
        borderRadius: 6
      }
    };
    const theme = createTheme(themeOptions);
    expect(theme.shape).toEqual(themeOptions.shape);
  });

  it('should return a theme with updated spacing', () => {
    const themeOptions: ThemeOptions = {
      spacing: {
        unit: 6
      }
    };
    const theme = createTheme(themeOptions);
    expect(theme.spacing.unit).toBe(6);
  });

  it('should return a theme with updated typography', () => {
    const themeOptions: ThemeOptions = {
      typography: {
        variants: {
          h1: {
            fontFamily: '"Comic Sans", sans-serif'
          }
        }
      }
    };
    const theme = createTheme(themeOptions);
    const results = theme.typography.variants.h1 ? theme.typography.variants.h1.fontFamily : undefined;
    expect(results).toBe('"Comic Sans", sans-serif');
  });
});
