export default function hexToRgb(composedColor: string): string {
  const color = composedColor.substr(1);
  const matcher: RegExp = new RegExp(`.{1,${color.length / 3}}`, 'g');
  const colorValues: RegExpMatchArray | null = color.match(matcher);
  const colors: string[] | null = colorValues && colorValues[0].length === 1 ? colorValues.map(value => `${value}${value}`) : colorValues;
  const validColors: (number | 'NaN')[] | null = colors
    ? colors.map(color => {
        const parsedColor = parseInt(color, 16);
        return isNaN(parsedColor) ? 'NaN' : parsedColor;
      })
    : null;
  return validColors && !validColors.includes('NaN') ? `rgb(${validColors.join(', ')})` : '';
}
