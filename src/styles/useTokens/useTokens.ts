import { store } from '../../store/index';
import * as Tokens from '../../tokens/index';

const TokensType = Tokens[store.getState().tokens];

export default function useTokens(): typeof TokensType {
  const tokens = Tokens[store.getState().tokens];
  return tokens;
}
