import { ColorObject } from '../../types/index';
import clamp from '../clamp';
import decomposeColor from '../decomposeColor';
import recomposeColor from '../recomposeColor';

export default function darken(composedColor: string, unclampedCoefficient: number = 0): string {
  const color: ColorObject = decomposeColor(composedColor);
  const coefficient = clamp(unclampedCoefficient);

  if (color.type.indexOf('hsl') !== -1) {
    color.values[2] = parseInt(`${color.values[2]}`, 10) * (1 - coefficient);
  }
  if (color.type.indexOf('rgb') !== -1) {
    color.values = color.values.map(value => parseInt(`${value}`, 10) * (1 - coefficient));
  }
  return recomposeColor(color);
}
