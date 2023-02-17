import createBreakpoints from './createBreakpoints';
import defaultTheme from '../defaultTheme/index';

const breakpoints = createBreakpoints();

describe('createBreakpoints', () => {
  it('should return', () => {
    expect(breakpoints).toBeTruthy();
  });

  it('should have the default breakpoint keys', () => {
    const { keys } = defaultTheme.breakpoints;
    expect(breakpoints.keys).toMatchObject(keys);
  });

  it('should have the default breakpoint values', () => {
    const { values } = defaultTheme.breakpoints;
    expect(breakpoints.values).toMatchObject(values);
  });

  it('should have one custom breakpoint', () => {
    const userBreakpoints = { values: { sm: 650 } };
    const customBreakpoints = createBreakpoints(userBreakpoints);
    expect(customBreakpoints.values.sm).toBe(650);
  });

  it('should have all custom breakpoints', () => {
    const userBreakpoints = {
      values: {
        xs: 10,
        sm: 20,
        md: 30,
        lg: 40,
        xl: 50
      }
    };
    const customBreakpoints = createBreakpoints(userBreakpoints);
    expect(customBreakpoints.values).toEqual(userBreakpoints.values);
  });
});
