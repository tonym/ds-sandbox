import breakpoints from './breakpoints';
import useTheme from '../../styles/useTheme/index';

const theme = useTheme();

describe('Breakpoints', () => {
  it('should return a valid media query up', () => {
    const expectedMediaQuery = '@media (min-width: 600px)';
    const mediaQuery = breakpoints.up('sm');
    expect(mediaQuery).toBe(expectedMediaQuery);
  });

  it('should return a valid media query up without at-rule if withAtRule is false', () => {
    const expectedMediaQuery = '(min-width: 600px)';
    const mediaQuery = breakpoints.up('sm', false);
    expect(mediaQuery).toBe(expectedMediaQuery);
  });

  it('should return a valid media query down', () => {
    const expectedMediaQuery = '@media (max-width: 840px)';
    const mediaQuery = breakpoints.down('sm');
    expect(mediaQuery).toBe(expectedMediaQuery);
  });

  it('should return a valid media query down without at-rule if withAtRule is false', () => {
    const expectedMediaQuery = '(max-width: 840px)';
    const mediaQuery = breakpoints.down('sm', false);
    expect(mediaQuery).toBe(expectedMediaQuery);
  });

  it('should return an xs up media query if xl down is requested', () => {
    const expectedMediaQuery = '@media (min-width: 0px)';
    const mediaQuery = breakpoints.down('xl');
    expect(mediaQuery).toBe(expectedMediaQuery);
  });

  it('should return a valid media query between', () => {
    const expectedMediaQuery = '@media (min-width: 600px) and (max-width: 1441px)';
    const mediaQuery = breakpoints.between('sm', 'lg');
    expect(mediaQuery).toBe(expectedMediaQuery);
  });

  it('should return a valid media query between without at-rule if withAtRule is false', () => {
    const expectedMediaQuery = '(min-width: 600px) and (max-width: 1441px)';
    const mediaQuery = breakpoints.between('sm', 'lg', false);
    expect(mediaQuery).toBe(expectedMediaQuery);
  });

  it('should return a valid media query only', () => {
    const expectedMediaQuery = '@media (min-width: 600px) and (max-width: 840px)';
    const mediaQuery = breakpoints.only('sm');
    expect(mediaQuery).toBe(expectedMediaQuery);
  });

  it('should return a valid media query only without at-rule if withAtRule is false', () => {
    const expectedMediaQuery = '(min-width: 600px) and (max-width: 840px)';
    const mediaQuery = breakpoints.only('sm', false);
    expect(mediaQuery).toBe(expectedMediaQuery);
  });

  it('should return an xl up media query for xl only', () => {
    const expectedMediaQuery = '@media (min-width: 1441px)';
    const mediaQuery = breakpoints.only('xl');
    expect(mediaQuery).toBe(expectedMediaQuery);
  });

  it('should look up a width string, and return the corrosponding number', () => {
    const expectedWidth = theme.breakpoints.values.xs;
    const calculatedWidth = breakpoints.width('xs');
    expect(calculatedWidth).toBeCloseTo(expectedWidth);
  });
});
