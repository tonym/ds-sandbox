import getContrastRatio from './getContrastRatio';

describe('getContrastRatio', () => {
  it('should calculate a contrast ratio', () => {
    const contrastRatio = getContrastRatio('#000', '#fff');
    expect(contrastRatio).toBe(21);
  });
});
