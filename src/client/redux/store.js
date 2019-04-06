import { createStore }  from 'redux';
import { reducer } from './reducer'

store.subscribe(async () =>
  console.log("> ACTION DISPATCHED <" , await store.getState())
)

export const store = createStore(reducer);
