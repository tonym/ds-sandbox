import isColor from './isColor';

describe('isColor', () => {
  it('should return true for a valid HSL CSS color', () => {
    const colorTest = isColor('hsl(0, 0%, 100%))');
    expect(colorTest).toBeTruthy();
  });

  it('should return false for a phony HSL CSS color', () => {
    const colorTest = isColor('hsl(0, 0, 100)');
    expect(colorTest).toBeFalsy();
  });

  it('should return true for a valid RGB color', () => {
    const colorTest = isColor('rgb(255, 255, 255)');
    expect(colorTest).toBeTruthy();
  });

  it('should return false for a phony RGB color', () => {
    const colorTest = isColor('rgb(255, 0)');
    expect(colorTest).toBeFalsy();
  });

  it('should return true for a valid hex color', () => {
    const colorTest = isColor('#ffffff');
    expect(colorTest).toBeTruthy();
  });

  it('should return false for a phony hex color', () => {
    const colorTest = isColor('#fffffz');
    expect(colorTest).toBeFalsy();
  });

  it('should return true for a valid short hex color', () => {
    const colorTest = isColor('#fff');
    expect(colorTest).toBeTruthy();
  });

  it('should return false for a phony short hex color', () => {
    const colorTest = isColor('#ffz');
    expect(colorTest).toBeFalsy();
  });
});
