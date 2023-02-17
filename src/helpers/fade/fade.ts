import { ColorObject } from '../../types/index';
import clamp from '../clamp';
import decomposeColor from '../decomposeColor';
import recomposeColor from '../recomposeColor';

export default function fade(color: string, value: number): string {
  const decomposedColor: ColorObject = decomposeColor(color);
  const clampedValue = clamp(value);
  if (decomposedColor.type === 'rgb' || decomposedColor.type === 'hsl') {
    decomposedColor.type = `${decomposedColor.type}a`;
  }
  decomposedColor.values[3] = clampedValue;
  return recomposeColor(decomposedColor);
}
