import { ColorObject } from '../../types/index';
import decomposeColor from '../decomposeColor';
import hslToRgb from '../hslToRgb';

export default function getLuminance(composedColor: string): number {
  const color: ColorObject = decomposeColor(composedColor);
  const rgbValues: Array<string | number> = color.type === 'hsl' ? decomposeColor(hslToRgb(composedColor)).values : color.values;
  const rgbLuminance: number[] = rgbValues.map((value: string | number) => {
    const val = parseInt(`${value}`, 10) / 255;
    return val <= 0.03928 ? val / 12.92 : ((val + 0.055) / 1.055) ** 2.4;
  });
  const luminance = 0.2126 * rgbLuminance[0] + 0.7152 * rgbLuminance[1] + 0.0722 * rgbLuminance[2];
  return parseFloat((Math.round(luminance * 10 ** 3) / 10 ** 3).toFixed(2));
}
