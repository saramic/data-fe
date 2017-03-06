/* @flow */

import { combineReducers } from 'redux';
import type { Reducer } from 'redux';
import type { Action } from '../../types/redux';

import all, * as FromAll from './all';
import type { State as AllState } from './all';

// -----------------------------------------------------------------------------
// EXPORTED REDUCER STATE TYPE

//export type State = []; 
export type State = {
  all: []
};

// -----------------------------------------------------------------------------
// REDUCER

const asxData : Reducer<State, Action> = combineReducers({
  all,
});

// -----------------------------------------------------------------------------
// EXPORTED SELECTORS

export function getAll(state : State) {
  console.log('the state in getAll', state.all);
  return FromAll
    //.getAll(state);
    .getAll(state.all);
    //.getAll([]);
}

// -----------------------------------------------------------------------------
// REDUCER EXPORT

export default asxData;
