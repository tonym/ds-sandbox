import recomposeColor from './recomposeColor';

describe('recomposeColor', () => {
  it('should recompose RGB color', () => {
    const decomposedColor = { type: 'rgb', values: ['255', '255', '255'] };
    const composedColor = recomposeColor(decomposedColor);
    expect(composedColor).toBe('rgb(255, 255, 255)');
  });

  it('should recompose RGBA color', () => {
    const decomposedColor = { type: 'rgba', values: ['255', '255', '255', '0.8'] };
    const composedColor = recomposeColor(decomposedColor);
    expect(composedColor).toBe('rgba(255, 255, 255, 0.8)');
  });

  it('should recompose HSL color', () => {
    const decomposedColor = { type: 'hsl', values: ['0', '0', '100'] };
    const composedColor = recomposeColor(decomposedColor);
    expect(composedColor).toBe('hsl(0, 0%, 100%)');
  });
});
