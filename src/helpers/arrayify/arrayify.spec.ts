import arrayify from './arrayify';

describe('arrayify', () => {
  it('should return the array if an array is provided', () => {
    const initialArray = ['apple', 'orange', 'grape'];
    const returnedArray = arrayify(initialArray);
    expect(returnedArray).toEqual(initialArray);
  });

  it('should return an array with the provided string', () => {
    const initialString = 'apple';
    const expectedArray = ['apple'];
    const returnedArray = arrayify(initialString);
    expect(returnedArray).toEqual(expectedArray);
  });
});
