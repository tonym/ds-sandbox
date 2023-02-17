import { Overrides, Styles } from '../../types/index';
import useTheme from '../../styles/useTheme/index';

const deepmerge = require('deepmerge');

export default function applyOverrides(styles: Styles, component: string): Styles {
  const theme = useTheme();
  const overrides: Overrides | undefined = { ...theme.overrides };
  const override: Styles = overrides[component] || {};
  return deepmerge(styles, override);
}
