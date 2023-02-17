import getClassKey from './getClassKey';
import { globalConstants } from '../../constants';

describe('getClassKey', () => {
  it('should create a class key using global constants', () => {
    const { delimiter, prefix } = globalConstants;
    const initialString = 'my-component';
    const expectedString = `${prefix}${delimiter}${initialString}`;
    const returnedString = getClassKey(initialString);
    expect(returnedString).toBe(expectedString);
  });
});
