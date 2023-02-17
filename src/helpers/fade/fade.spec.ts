import fade from './fade';

describe('fade', () => {
  it('should fade HSL color', () => {
    const fadedColor = fade('hsl(0, 0%, 0%)', 0.08);
    expect(fadedColor).toBe('hsla(0, 0%, 0%, 0.08)');
  });

  it('should fade RGB color', () => {
    const fadedColor = fade('rgb(0, 0, 0)', 0.08);
    expect(fadedColor).toBe('rgba(0, 0, 0, 0.08)');
  });

  it('should fade RGBA color', () => {
    const fadedColor = fade('rgba(0, 0, 0, 0.09)', 0.08);
    expect(fadedColor).toBe('rgba(0, 0, 0, 0.08)');
  });

  it('should fade a hex color', () => {
    const fadedColor = fade('#000000', 0.08);
    expect(fadedColor).toBe('rgba(0, 0, 0, 0.08)');
  });

  it('should fade a short hex color', () => {
    const fadedColor = fade('#000', 0.08);
    expect(fadedColor).toBe('rgba(0, 0, 0, 0.08)');
  });
});
