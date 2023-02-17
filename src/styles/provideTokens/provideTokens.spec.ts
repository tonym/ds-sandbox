import provideTokens from './provideTokens';
import { store } from '../../store/index';

describe('provideTokens', () => {
  it('should provide default tokens', () => {
    provideTokens();
    const providedTokens = store.getState().tokens;
    expect(providedTokens).toEqual('opensesame');
  });

  it('should provide requested tokens', () => {
    const tokens = 'simon';
    provideTokens(tokens);
    const providedTokens = store.getState().tokens;
    expect(providedTokens).toEqual(tokens);
  });
});
