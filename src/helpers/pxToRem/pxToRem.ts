import useTheme from '../../styles/useTheme/index';
import useInt from '../useInt/index';

export default function pxToRem(size: number | string): string {
  const theme = useTheme();
  const { fontSize } = theme.typography;
  const calculatedFontSize = parseFloat(`${fontSize}`);
  const parsedSize = useInt(size);
  return `${parsedSize / calculatedFontSize}rem`;
}
