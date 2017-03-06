/* @flow */

import { combineReducers } from 'redux';
import type { Reducer } from 'redux';
import type { Action } from '../types/redux';

import posts, * as FromPosts from './posts';
import asxData, * as FromAsxData from './asxData';
import type { State as PostsState } from './posts';
import type { State as AsxDataState } from './asxData';

// -----------------------------------------------------------------------------
// EXPORTED REDUCER STATE TYPE

export type State = {
  posts: PostsState,
  asxData: AsxDataState,
};

// -----------------------------------------------------------------------------
// REDUCER

const rootReducer: Reducer<State, Action> = combineReducers({
  posts, asxData
});

// -----------------------------------------------------------------------------
// EXPORTED SELECTORS

export function getPostById(state: State, id: number) {
  return FromPosts.getById(state.posts, id);
}

export function getAsxData(state: State) {
  return FromAsxData.getAll(state.asxData);
}

// -----------------------------------------------------------------------------
// REDUCER EXPORT

export default rootReducer;
