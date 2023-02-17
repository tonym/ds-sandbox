export default function useInt(value: any): number {
  return typeof value === 'number' ? value : parseInt(value, 10);
}
