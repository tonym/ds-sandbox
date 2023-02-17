import getLuminance from './getLuminance';

describe('getLuminance', () => {
  it('should calculate the luminance of a CSS HSL color', () => {
    const luminance = getLuminance('hsl(0, 0%, 100%)');
    expect(luminance).toBe(1);
  });

  it('should calculate the luminance of an RGB color', () => {
    const luminance = getLuminance('rgb(255,255,255)');
    expect(luminance).toBe(1);
  });

  it('should calculate the luminance of an RGBA color', () => {
    const luminance = getLuminance('rgb(255,255,255,0.8)');
    expect(luminance).toBe(1);
  });

  it('should calculate the luminance of a hex color', () => {
    const luminance = getLuminance('#1c1c1c');
    expect(luminance).toBe(0.01);
  });

  it('should calculate the luminance of a short hex color', () => {
    const luminance = getLuminance('#fff');
    expect(luminance).toBe(1);
  });
});
