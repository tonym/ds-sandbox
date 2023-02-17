import { StyleOverrides } from '../../types/index';
import useTheme from '../useTheme/index';

export default function useStyleOverrides(): StyleOverrides {
  const theme = useTheme();

  const styleOverrides = {
    Button: {
      styleOverrides: {
        root: {
          ...theme.typography.variants.button,
          borderRadius: theme.shape.borderRadius * 10,
          minWidth: theme.spacing.unit * 8,
          padding: [theme.spacing.unit, theme.spacing.unit * 2.5]
        },
        sizeLg: {
          fontSize: '1.313rem',
          padding: [theme.spacing.unit * 2, theme.spacing.unit * 4]
        },
        sizeSm: {
          fontSize: '0.75rem',
          padding: [theme.spacing.unit - 2, theme.spacing.unit * 2]
        }
      }
    }
  };

  return styleOverrides;
}
