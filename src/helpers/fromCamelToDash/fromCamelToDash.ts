export default function fromCamelToDash(value: string): string {
  function converter(g) {
    return '-' + g[0].toLowerCase();
  }
  return value.replace(/([A-Z])/g, converter);
}
