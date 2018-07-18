import { initialState } from './initialState'
import { resolve } from 'path';
import _ from 'lodash';



const reducer = async (state = initialState,Action) => {
    switch (Action.type) {
        default:
            return state;
    }
}








module.exports = {
    reducer
}