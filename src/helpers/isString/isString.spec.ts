import isString from './isString';

describe('isString', () => {
  it('should be true if given a string', () => {
    expect(isString('string')).toBeTruthy();
  });

  it('should be false if not given a string', () => {
    expect(isString(true)).toBeFalsy();
    expect(isString(5)).toBeFalsy();
    expect(isString([])).toBeFalsy();
    expect(isString({ string: 'string ' })).toBeFalsy();
    expect(isString(undefined)).toBeFalsy();
  });
});
