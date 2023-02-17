import useInt from './useInt';

describe('useInt', () => {
  it('should return a number if given a number', () => {
    const value = useInt(12);
    expect(value).toBe(12);
  });

  it('should return a number if given a string', () => {
    const value = useInt('12');
    expect(value).toBe(12);
  });
});
