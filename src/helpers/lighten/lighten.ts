import { ColorObject } from '../../types/index';
import clamp from '../clamp';
import decomposeColor from '../decomposeColor';
import recomposeColor from '../recomposeColor';

export default function lighten(composedColor: string, baseCoefficient: number = 1): string {
  const color: ColorObject = decomposeColor(composedColor);
  const coefficient = clamp(baseCoefficient);
  if (color.type.indexOf('hsl') !== -1) {
    const val = parseInt(`${color.values[2]}`, 10);
    color.values[2] = val + (100 - val) * coefficient;
  } else {
    color.values = color.values.map((value, index) => {
      const val = parseInt(`${value}`, 10);
      return index < 3 ? val + (255 - val) * coefficient : value;
    });
  }
  return recomposeColor(color);
}
