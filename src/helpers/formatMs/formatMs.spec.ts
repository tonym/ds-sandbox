import formatMs from './formatMs';

describe('formatMs', () => {
  it('should take a whole number and return a formatted string', () => {
    const initialValue = 5;
    const expectedString = '5ms';
    const returnedString = formatMs(initialValue);
    expect(returnedString).toBe(expectedString);
  });

  it('should take a decimal number, round it, and return a formatted string', () => {
    const initialValue = 5.8;
    const expectedString = '6ms';
    const returnedString = formatMs(initialValue);
    expect(returnedString).toBe(expectedString);
  });
});
