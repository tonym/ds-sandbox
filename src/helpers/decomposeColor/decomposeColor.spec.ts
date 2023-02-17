import decomposeColor from './decomposeColor';

describe('decomposeColor', () => {
  it('should decompose an HSL color', () => {
    const color = decomposeColor('hsl(0,0,100)');
    const expectedColor = { type: 'hsl', values: ['0', '0', '100'] };
    expect(color).toEqual(expectedColor);
  });

  it('should decompose an RGB color', () => {
    const color = decomposeColor('rgb(0,0,0)');
    const expectedColor = { type: 'rgb', values: ['0', '0', '0'] };
    expect(color).toEqual(expectedColor);
  });

  it('should decompose an RGBA color', () => {
    const color = decomposeColor('rgba(0,0,0,0.8)');
    const expectedColor = { type: 'rgba', values: ['0', '0', '0', '0.8'] };
    expect(color).toEqual(expectedColor);
  });

  it('should decompose a hex color', () => {
    const color = decomposeColor('#ffffff');
    const expectedColor = { type: 'rgb', values: ['255', '255', '255'] };
    expect(color).toEqual(expectedColor);
  });

  it('should decompose a short hex color', () => {
    const color = decomposeColor('#fff');
    const expectedColor = { type: 'rgb', values: ['255', '255', '255'] };
    expect(color).toEqual(expectedColor);
  });
});
