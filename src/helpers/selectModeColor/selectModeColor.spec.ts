import darken from '../darken/index';
import lighten from '../lighten/index';
import selectModeColor from './selectModeColor';

describe('selectModeColor', () => {
  it('should lighten an RGB color by default', () => {
    const color = 'rgb(100, 100, 100)';
    const expectedColor = lighten(color, 0.62);
    const selectedColor = selectModeColor(color);
    expect(selectedColor).toBe(expectedColor);
  });

  it('should lighten an RGBA color by default', () => {
    const color = 'rgba(100, 100, 100, 0.8)';
    const expectedColor = lighten(color, 0.62);
    const selectedColor = selectModeColor(color);
    expect(selectedColor).toBe(expectedColor);
  });

  it('should lighten a hex color by default', () => {
    const color = '#6f6f6f';
    const expectedColor = lighten(color, 0.62);
    const selectedColor = selectModeColor(color);
    expect(selectedColor).toBe(expectedColor);
  });

  it('should lighten a shorthand RGB color by default', () => {
    const color = '#999';
    const expectedColor = lighten(color, 0.62);
    const selectedColor = selectModeColor(color);
    expect(selectedColor).toBe(expectedColor);
  });

  it('should lighten an HSL color by default', () => {
    const color = 'hsl(0, 0%, 0%)';
    const expectedColor = lighten(color, 0.62);
    const selectedColor = selectModeColor(color);
    expect(selectedColor).toBe(expectedColor);
  });

  it('should lighten a color when type is light', () => {
    const color = 'rgb(100, 100, 100)';
    const expectedColor = lighten(color, 0.62);
    const selectedColor = selectModeColor(color, 'light');
    expect(selectedColor).toBe(expectedColor);
  });

  it('should darken a color when type is dark', () => {
    const color = 'rgb(100, 100, 100)';
    const expectedColor = darken(color, 0.5);
    const selectedColor = selectModeColor(color, 'dark');
    expect(selectedColor).toBe(expectedColor);
  });

  it('should lighten a color by an optional value when type is light', () => {
    const color = 'rgb(100, 100, 100)';
    const expectedColor = lighten(color, 0.5);
    const selectedColor = selectModeColor(color, 'light', { lightenBy: 0.5 });
    expect(selectedColor).toBe(expectedColor);
  });

  it('should darken a color by an optional value when type is dark', () => {
    const color = 'rgb(100, 100, 100)';
    const expectedColor = darken(color, 0.68);
    const selectedColor = selectModeColor(color, 'dark', { darkenBy: 0.68 });
    expect(selectedColor).toBe(expectedColor);
  });
});
