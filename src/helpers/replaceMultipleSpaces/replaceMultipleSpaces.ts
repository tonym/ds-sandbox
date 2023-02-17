export default function replaceMultipleSpaces(value: string): string {
  const re = / +(?= )/g;
  return value.replace(re, '');
}
