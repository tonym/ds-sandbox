import { Theme } from '../../types/index';
import { store } from '../../store/index';

export default function useTheme(): Theme {
  return store.getState().theme;
}
