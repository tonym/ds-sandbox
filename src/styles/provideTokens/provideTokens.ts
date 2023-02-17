import { store, setTokens } from '../../store/index';

export default function provideTokens(tokens: string = 'opensesame') {
  store.dispatch(setTokens(tokens));
}
