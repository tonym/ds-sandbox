import defaultTheme from './defaultTheme';
import { initialState } from '../../store/index';
import createTheme from '../createTheme/index';

describe('defaultTheme', () => {
  it('should equal initialState theme', () => {
    expect(defaultTheme).toEqual(initialState.theme);
  });

  it('should create', () => {
    const expectedTheme = createTheme();
    expect(expectedTheme).toBeTruthy();
  });
});
