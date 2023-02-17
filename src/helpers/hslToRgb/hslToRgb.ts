import { ColorObject } from '../../types/index';
import decomposeColor from '../decomposeColor';
import recomposeColor from '../recomposeColor';

export default function hslToRgb(composedColor: string): string {
  const color: ColorObject = decomposeColor(composedColor);
  const { values } = color;
  const h = parseInt(`${values[0]}`, 10);
  const s = parseInt(`${values[1]}`, 10) / 100;
  const l = parseInt(`${values[2]}`, 10) / 100;
  const a = s * Math.min(l, 1 - l);
  const f = (n: number, k = (n + h / 30) % 12) => l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
  let type = 'rgb';
  const rgb: number[] = [Math.round(f(0) * 255), Math.round(f(8) * 255), Math.round(f(4) * 255)];
  if (values[3]) {
    type += 'a';
    rgb.push(parseFloat(`${values[3]}`) / 100);
  }
  return recomposeColor({ type, values: rgb });
}
