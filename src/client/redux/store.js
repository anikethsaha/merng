import { createStore }  from 'redux';
import { reducer } from './reducer'

const store = createStore(reducer);


store.subscribe(async () =>
  console.log("> ACTION DISPATCHED <" , await store.getState())
)

module.exports = {
    store
};