import capitalize from './capitalize';

describe('capitalize', () => {
  it('should capitalize a string', () => {
    const initialString = 'call me Ishmael';
    const expectedString = 'Call me Ishmael';
    const returnedString = capitalize(initialString);
    expect(returnedString).toBe(expectedString);
  });

  it('should return an empty string when value is undefined', () => {
    const returnedString = capitalize(undefined);
    expect(returnedString).toBe('');
  });
});
