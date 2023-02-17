import replaceMultipleSpaces from './replaceMultipleSpaces';

describe('replaceMultiSpaces', () => {
  it('should replace multiple spaces with a single space', () => {
    const initialString = 'Call me   Ishmael';
    const expectedString = 'Call me Ishmael';
    const returnedString = replaceMultipleSpaces(initialString);
    expect(returnedString).toBe(expectedString);
  });

  it('should preserve leading and trailing spaces', () => {
    const initialString = ' Call me   Ishmael ';
    const expectedString = ' Call me Ishmael ';
    const returnedString = replaceMultipleSpaces(initialString);
    expect(returnedString).toBe(expectedString);
  });

  it('should preserve leading and trailing spaces as single space', () => {
    const initialString = '   Call me   Ishmael ';
    const expectedString = ' Call me Ishmael ';
    const returnedString = replaceMultipleSpaces(initialString);
    expect(returnedString).toBe(expectedString);
  });
});
