export default function isColor(color: string): boolean {
  const styledElement: CSSStyleDeclaration = new Option().style;
  styledElement.color = color;
  return styledElement.color !== '';
}
