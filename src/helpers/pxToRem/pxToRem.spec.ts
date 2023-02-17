import pxToRem from './pxToRem';

describe('PxToRem', () => {
  it.each`
    expectedResult | size
    ${'1.5rem'}    | ${24}
    ${'1.5rem'}    | ${'24'}
  `('should return $expectedResult when size is $size', ({ expectedResult, size }) => {
    const sizeInRem = pxToRem(size);
    expect(sizeInRem).toBe(expectedResult);
  });
});
