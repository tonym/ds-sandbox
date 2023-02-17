export default function arrayify<T>(value: T | T[]): T[] {
  return value instanceof Array ? [...value] : [value];
}
