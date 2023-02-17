import defaultTheme from '../defaultTheme/index';
import { Breakpoints, BreakpointsOptions } from '../../types/index';

const defaultBreakpointsOptions: BreakpointsOptions = {};

export default function createBreakpoints(userBreakpoints: BreakpointsOptions = {}): Breakpoints {
  const { breakpoints } = defaultTheme;
  const breakpointsOptions = { ...defaultBreakpointsOptions, ...userBreakpoints };

  breakpoints.values = { ...breakpoints.values, ...breakpointsOptions.values };

  return breakpoints;
}
