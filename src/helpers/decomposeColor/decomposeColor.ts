import { ColorObject } from '../../types/index';
import hexToRgb from '../hexToRgb';

export default function decomposeColor(composedColor: string): ColorObject {
  const color = composedColor.charAt(0) === '#' ? hexToRgb(composedColor) : composedColor;
  const marker = color.indexOf('(');
  const type = color.substring(0, marker);
  const colorValues: string[] = color.substring(marker + 1, color.length - 1).split(',');
  const values: Array<number | string> = colorValues.map(value => `${parseFloat(value)}`);
  return { type, values };
}
