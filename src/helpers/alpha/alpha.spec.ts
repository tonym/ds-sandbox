import alpha from './alpha';

describe('Alpha', () => {
  it('should convert an rgb color to an rgba color.', () => {
    const alphaColor = alpha('rgb(1, 2, 3)', 0.4);
    const expectedColor = 'rgba(1, 2, 3, 0.4)';
    expect(alphaColor).toBe(expectedColor);
  });

  it('should update an rgba color', () => {
    const alphaColor = alpha('rgba(255, 0, 0, 0.2)', 0.5);
    const expectedColor = 'rgba(255, 0, 0, 0.5)';
    expect(alphaColor).toBe(expectedColor);
  });

  it('should convert an hsl color to an hsla color', () => {
    const alphaColor = alpha('hsl(0, 100%, 50%)', 0.1);
    const expectedColor = 'hsla(0, 100%, 50%, 0.1)';
    expect(alphaColor).toBe(expectedColor);
  });

  it('should update an hsla color', () => {
    const alphaColor = alpha('hsla(0, 100%, 50%, 0.2)', 0.5);
    const expectedColor = 'hsla(0, 100%, 50%, 0.5)';
    expect(alphaColor).toBe(expectedColor);
  });

  it('should convert a hex color to rgba', () => {
    const alphaColor = alpha('#3f3f3f', 0.5);
    const expectedColor = 'rgba(63, 63, 63, 0.5)';
    expect(alphaColor).toBe(expectedColor);
  });
});
