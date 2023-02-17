import lighten from './lighten';

describe('lighten', () => {
  it('should lighten HSL color', () => {
    const lightenedColor = lighten('hsl(0, 0%, 0%)', 0.2);
    expect(lightenedColor).toBe('hsl(0, 0%, 20%)');
  });

  it('should lighten RGB color', () => {
    const lightenedColor = lighten('rgb(0, 0, 0)', 0.2);
    expect(lightenedColor).toBe('rgb(51, 51, 51)');
  });

  it('should lighten RGBA color', () => {
    const lightenedColor = lighten('rgba(0, 0, 0, 0.8)', 0.2);
    expect(lightenedColor).toBe('rgba(51, 51, 51, 0.8)');
  });

  it('should lighten a hex color', () => {
    const lightenedColor = lighten('#000000', 0.2);
    expect(lightenedColor).toBe('rgb(51, 51, 51)');
  });

  it('should lighten a short hex color', () => {
    const lightenedColor = lighten('#000', 0.2);
    expect(lightenedColor).toBe('rgb(51, 51, 51)');
  });

  it('should lighten a color using default coefficient', () => {
    const lightenedColor = lighten('#000');
    expect(lightenedColor).toBe('rgb(255, 255, 255)');
  });
});
