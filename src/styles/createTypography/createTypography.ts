import composedTypography from './composedTypography';
import defaultTheme from '../defaultTheme/index';
import { Typography, TypographyOptions } from '../../types/index';

const deepmerge = require('deepmerge');

export default function createTypography(userTypographyOptions: TypographyOptions = { variants: {} }): Typography {
  const { typography } = defaultTheme;
  const mergedOptions = deepmerge(composedTypography, userTypographyOptions);
  return deepmerge(typography, mergedOptions);
}
