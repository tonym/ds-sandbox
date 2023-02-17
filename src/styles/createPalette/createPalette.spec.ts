import createPalette from './createPalette';
import defaultTheme from '../defaultTheme/index';
import { PaletteOptions } from '../../types/index';
import { Blue } from '../../colors/index';

const { palette } = defaultTheme;

describe('createPalette', () => {
  it('should return the default palette if no options are given', () => {
    const createdPalette = createPalette();
    expect(createdPalette).toEqual(palette);
  });

  it('should return a palette with updated action', () => {
    const paletteOptions: PaletteOptions = {
      action: {
        active: Blue[500]
      }
    };
    const createdPalette = createPalette(paletteOptions);
    const action = { ...palette.action, ...paletteOptions.action };
    const expectedPalette = { ...palette, action };
    expect(createdPalette).toEqual(expectedPalette);
  });

  it('should return a palette with updated background', () => {
    const paletteOptions: PaletteOptions = {
      background: {
        default: Blue[500]
      }
    };
    const createdPalette = createPalette(paletteOptions);
    const background = { ...palette.background, ...paletteOptions.background };
    const expectedPalette = { ...palette, background };
    expect(createdPalette).toEqual(expectedPalette);
  });

  it('should return a palette with updated common', () => {
    const paletteOptions: PaletteOptions = {
      common: {
        black: '#020202'
      }
    };
    const createdPalette = createPalette(paletteOptions);
    const common = { ...palette.common, ...paletteOptions.common };
    const expectedPalette = { ...palette, common };
    expect(createdPalette).toEqual(expectedPalette);
  });

  it('should return a palette with updated contrast threshold', () => {
    const paletteOptions: PaletteOptions = {
      contrastThreshold: 2.5
    };
    const createdPalette = createPalette(paletteOptions);
    const expectedPalette = { ...palette, contrastThreshold: paletteOptions.contrastThreshold };
    expect(createdPalette).toEqual(expectedPalette);
  });

  it('should return a palette with updated divider', () => {
    const paletteOptions: PaletteOptions = {
      divider: Blue[500]
    };
    const createdPalette = createPalette(paletteOptions);
    const expectedPalette = { ...palette, divider: paletteOptions.divider };
    expect(createdPalette).toEqual(expectedPalette);
  });

  it('should return a palette with updated error', () => {
    const paletteOptions: PaletteOptions = {
      error: {
        main: Blue[500]
      }
    };
    const createdPalette = createPalette(paletteOptions);
    const error = { ...palette.error, ...paletteOptions.error };
    const expectedPalette = { ...palette, error };
    expect(createdPalette).toEqual(expectedPalette);
  });

  it('should return a palette with updated grey', () => {
    const paletteOptions: PaletteOptions = {
      grey: { ...Blue }
    };
    const createdPalette = createPalette(paletteOptions);
    const grey = { ...palette.grey, ...paletteOptions.grey };
    const expectedPalette = { ...palette, grey: grey };
    expect(createdPalette).toEqual(expectedPalette);
  });

  it('should return a palette with updated info', () => {
    const paletteOptions: PaletteOptions = {
      info: {
        main: Blue[500]
      }
    };
    const createdPalette = createPalette(paletteOptions);
    const info = { ...palette.info, ...paletteOptions.info };
    const expectedPalette = { ...palette, info };
    expect(createdPalette).toEqual(expectedPalette);
  });

  it('should return a palette with updated primary', () => {
    const paletteOptions: PaletteOptions = {
      primary: {
        main: Blue[500]
      }
    };
    const createdPalette = createPalette(paletteOptions);
    const primary = { ...palette.primary, ...paletteOptions.primary };
    const expectedPalette = { ...palette, primary };
    expect(createdPalette).toEqual(expectedPalette);
  });

  it('should return a palette with updated secondary', () => {
    const paletteOptions: PaletteOptions = {
      secondary: {
        main: Blue[500]
      }
    };
    const createdPalette = createPalette(paletteOptions);
    const secondary = { ...palette.secondary, ...paletteOptions.secondary };
    const expectedPalette = { ...palette, secondary };
    expect(createdPalette).toEqual(expectedPalette);
  });

  it('should return a palette with updated success', () => {
    const paletteOptions: PaletteOptions = {
      success: {
        main: Blue[100]
      }
    };
    const createdPalette = createPalette(paletteOptions);
    const success = { ...palette.success, ...paletteOptions.success };
    const expectedPalette = { ...palette, success };
    expect(createdPalette).toEqual(expectedPalette);
  });

  it('should return a palette with updated text', () => {
    const paletteOptions: PaletteOptions = {
      text: {
        primary: Blue[500]
      }
    };
    const createdPalette = createPalette(paletteOptions);
    const text = { ...palette.text, ...paletteOptions.text };
    const expectedPalette = { ...palette, text };
    expect(createdPalette).toEqual(expectedPalette);
  });

  it('should return a palette with updated tonal offset', () => {
    const paletteOptions: PaletteOptions = {
      tonalOffset: 0.3
    };
    const createdPalette = createPalette(paletteOptions);
    const expectedPalette = { ...palette, tonalOffset: paletteOptions.tonalOffset };
    expect(createdPalette).toEqual(expectedPalette);
  });

  it('should return a palette with updated type', () => {
    const paletteOptions: PaletteOptions = {
      mode: 'dark'
    };
    const createdPalette = createPalette(paletteOptions);
    const expectedPalette = { ...palette, mode: paletteOptions.mode };
    expect(createdPalette).toEqual(expectedPalette);
  });

  it('should return a palette with updated warning', () => {
    const paletteOptions: PaletteOptions = {
      warning: {
        main: Blue[500]
      }
    };
    const createdPalette = createPalette(paletteOptions);
    const warning = { ...palette.warning, ...paletteOptions.warning };
    const expectedPalette = { ...palette, warning };
    expect(createdPalette).toEqual(expectedPalette);
  });
});
