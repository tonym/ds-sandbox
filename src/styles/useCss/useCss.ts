import { store } from '../../store/index';

export default function useCss(): string {
  return store.getState().css;
}
