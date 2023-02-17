import clamp from './clamp';

describe('clamp', () => {
  it('should return value if value is between min and max', () => {
    const clampedValue = clamp(3, 0, 6);
    expect(clampedValue).toBe(3);
  });

  it('should return min if value is less than min', () => {
    const clampedValue = clamp(3, 4, 6);
    expect(clampedValue).toBe(4);
  });

  it('should return max if value is greater than max', () => {
    const clampedValue = clamp(7, 4, 6);
    expect(clampedValue).toBe(6);
  });
});
