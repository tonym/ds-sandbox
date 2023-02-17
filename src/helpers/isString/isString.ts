export default function isString(value: any): boolean {
  const dataType = typeof value;
  return dataType === 'string';
}
