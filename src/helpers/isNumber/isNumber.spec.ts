import isNumber from './isNumber';

describe('isNumber', () => {
  it('should be true if given a number', () => {
    expect(isNumber(5)).toBeTruthy();
  });

  it('should be true if given a string that can be a number', () => {
    expect(isNumber('5')).toBeTruthy();
  });

  it('should be false if given a string that cannot be a number', () => {
    expect(isNumber('five')).toBeFalsy();
  });

  it('should be false if given nothing', () => {
    expect(isNumber(undefined)).toBeFalsy();
  });
});
