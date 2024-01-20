import { store, setTokens } from '../../store/index';

export default function provideTokens(tokens: string = 'core') {
  store.dispatch(setTokens(tokens));
}
