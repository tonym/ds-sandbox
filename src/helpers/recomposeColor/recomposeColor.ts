import { ColorObject } from '../../types/index';

export default function recomposeColor(decomposedColor: ColorObject): string {
  const { type } = decomposedColor;
  let values: Array<string | number> = [...decomposedColor.values];
  if (type.indexOf('rgb') !== -1) {
    values = values.map((n, i) => (i < 3 ? parseInt('' + n, 10) : n));
  } else {
    values[1] = `${values[1]}%`;
    values[2] = `${values[2]}%`;
  }
  return `${type}(${values.join(', ')})`;
}
