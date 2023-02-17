import darken from './darken';

describe('darken', () => {
  it('should darken HSL color', () => {
    const darkenedColor = darken('hsl(0, 0%, 100%)', 0.2);
    expect(darkenedColor).toBe('hsl(0, 0%, 80%)');
  });

  it('should darken RGB color', () => {
    const darkenedColor = darken('rgb(255, 255, 255)', 0.2);
    expect(darkenedColor).toBe('rgb(204, 204, 204)');
  });

  it('should darken RGBA color', () => {
    const darkenedColor = darken('rgba(255, 255, 255, 0.8)', 0.2);
    expect(darkenedColor).toBe('rgba(204, 204, 204, 0)');
  });

  it('should darken hex color', () => {
    const darkenedColor = darken('#ffffff', 0.2);
    expect(darkenedColor).toBe('rgb(204, 204, 204)');
  });

  it('should darken a short hex color', () => {
    const darkenedColor = darken('#fff', 0.2);
    expect(darkenedColor).toBe('rgb(204, 204, 204)');
  });

  it('should darken a color using the default coefficient', () => {
    const darkenedColor = darken('#fff');
    expect(darkenedColor).toBe('rgb(255, 255, 255)');
  });
});
