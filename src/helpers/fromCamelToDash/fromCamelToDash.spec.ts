import fromCamelToDash from './fromCamelToDash';

describe('fromCamelToDash', () => {
  it('should covert camel case to dash case', () => {
    const initialString = 'callMeIshmael';
    const expectedString = 'call-me-ishmael';
    const returnedString = fromCamelToDash(initialString);
    expect(returnedString).toBe(expectedString);
  });
});
