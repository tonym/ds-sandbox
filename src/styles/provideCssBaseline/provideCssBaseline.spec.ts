import provideCssBaseline from './provideCssBaseline';
import useTheme from '../useTheme/index';

const useThemeModule = { useTheme };

describe('provideCssBaseline', () => {
  it('should create a new theme if a theme is not in the store and return a string', () => {
    const theme = useThemeModule.useTheme();
    theme.initial = true;
    const spy = jest.spyOn(useThemeModule, 'useTheme');
    spy.mockReturnValue(theme);
    const css = provideCssBaseline();
    expect(css).toBeTruthy();
  });

  it('should use a theme from the store and return a string', () => {
    const theme = useThemeModule.useTheme();
    theme.initial = false;
    const spy = jest.spyOn(useThemeModule, 'useTheme');
    spy.mockReturnValue(theme);
    const css = provideCssBaseline();
    expect(css).toBeTruthy();
  });
});
