import hslToRgb from './hslToRgb';

describe('hslToRgb', () => {
  it('should convert HSL to RGB', () => {
    const rgbColor = hslToRgb('hsl(0, 0%, 100%)');
    expect(rgbColor).toBe('rgb(255, 255, 255)');
  });

  it('should convert HSLA to RGBA', () => {
    const rgbColor = hslToRgb('hsla(0, 0% ,100%, 80%)');
    expect(rgbColor).toBe('rgba(255, 255, 255, 0.8)');
  });
});
