import { Breakpoint } from '../../types/index';
import useTheme from '../../styles/useTheme/index';

const between = (begin: Breakpoint, end: Breakpoint, withAtRule = true): string => {
  const theme = useTheme();
  const { keys, values } = theme.breakpoints;
  const endIndex = keys.includes(end) ? keys.indexOf(end) + 1 : undefined;

  if (endIndex === keys.length) {
    return up(begin, withAtRule);
  }

  const beginValue = keys.includes(begin) ? values[begin] : begin;
  const endValue = endIndex ? values[keys[endIndex]] : end;
  const prefix = withAtRule ? '@media ' : '';

  return Number.isNaN(parseInt('' + beginValue, 10)) || Number.isNaN(parseInt('' + endValue, 10))
    ? ''
    : `${prefix}(min-width: ${beginValue}px) and (max-width: ${endValue}px)`;
};

const down = (begin: Breakpoint, withAtRule = true): string => {
  const theme = useTheme();
  const { keys, values } = theme.breakpoints;
  const beginIndex = keys.includes(begin) ? keys.indexOf(begin) + 1 : undefined;

  if (beginIndex === keys.length) {
    return up('xs', withAtRule);
  }

  const value = beginIndex ? values[keys[beginIndex]] : begin;

  const prefix = withAtRule ? '@media ' : '';

  return Number.isNaN(parseInt('' + value, 10)) ? '' : `${prefix}(max-width: ${value}px)`;
};

const only = (begin: Breakpoint, withAtRule = true): string => {
  return between(begin, begin, withAtRule);
};

const up = (begin: Breakpoint, withAtRule = true): string => {
  const theme = useTheme();
  const { keys, values } = theme.breakpoints;
  const value = keys.includes(begin) ? values[begin] : begin;
  const prefix = withAtRule ? '@media ' : '';

  return Number.isNaN(parseInt('' + value, 10)) ? '' : `${prefix}(min-width: ${value}px)`;
};

const width = (key: string): number => {
  const theme = useTheme();
  const { values } = theme.breakpoints;

  return values[key];
};

const breakpoints = { between, down, only, up, width };

export default breakpoints;
