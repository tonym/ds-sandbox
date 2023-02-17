import { createStore, Store } from 'redux';
import { reducer } from './reducer';

export const store: Store = createStore(reducer);
