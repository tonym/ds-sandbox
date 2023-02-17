import isString from '../isString/index';
import isUrl from './isUrl';

describe('isUrl', () => {
  it('should be true if given a valid URL', () => {
    const url = 'https://www.opensesame.com';
    expect(isUrl(url)).toBeTruthy();
  });

  it('should be true for localhost URL', () => {
    const url = 'http://localhost:4200';
    expect(isUrl(url)).toBeTruthy();
  });

  it('should be true for a URL without absolute protocol', () => {
    const url = '//media.opensesame.com';
    expect(isUrl(url)).toBeTruthy();
  });

  it('should be false if string is not a URL', () => {
    const url = 'close';
    expect(isUrl(url)).toBe(false);
  });

  it('should be false if URL is not a string', () => {
    const url = 3;
    expect(isUrl(url)).toBe(false);
  });
});
