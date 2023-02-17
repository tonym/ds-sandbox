import createTypography from './createTypography';
import composedTypography from './composedTypography';
import defaultTheme from '../defaultTheme/index';

const deepmerge = require('deepmerge');

const { typography } = defaultTheme;
const expectedTypography = deepmerge(typography, composedTypography);

describe('createTypography', () => {
  it('should return the default typography if no options are given', () => {
    const created = createTypography();
    expect(created).toEqual(expectedTypography);
  });
});
