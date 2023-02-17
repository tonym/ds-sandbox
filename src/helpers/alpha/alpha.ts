import clamp from '../clamp/index';
import decomposeColor from '../decomposeColor';
import recomposeColor from '../recomposeColor';

export default function alpha(color: string, value: number) {
  const decomposedColor = decomposeColor(color);
  const clampedColor = clamp(value);

  if (decomposedColor.type === 'rgb' || decomposedColor.type === 'hsl') {
    decomposedColor.type += 'a';
  }
  decomposedColor.values[3] = clampedColor;

  return recomposeColor(decomposedColor);
}
