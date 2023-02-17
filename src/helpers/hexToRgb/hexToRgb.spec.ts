import hexToRgb from './hexToRgb';

describe('hexToRgb', () => {
  it('should convert a hex color to an RGB color', () => {
    const rgbColor = hexToRgb('#ffffff');
    expect(rgbColor).toBe('rgb(255, 255, 255)');
  });

  it('should convert a short hex color to an RGB color', () => {
    const rgbColor = hexToRgb('#fff');
    expect(rgbColor).toBe('rgb(255, 255, 255)');
  });

  it('should return an empty string if given gibberish', () => {
    const rgbColor = hexToRgb('#zzz');
    expect(rgbColor).toBe('');
  });

  it('should return an empty string if given nothing', () => {
    const rgbColor = hexToRgb('# ');
    expect(rgbColor).toBe('');
  });
});
