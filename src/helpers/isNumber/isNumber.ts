export default function isNumber(value: any): boolean {
  return !isNaN(parseFloat(value));
}
