/* @flow */

import Axios from 'axios';
import type { Post, AsxData } from './model';
import type { State } from '../reducers';

export type Action =
  | { type: 'FETCHING_POST', payload: number }
  | { type: 'FETCHED_POST', payload: Post }
  | { type: 'FETCHING_ASX_DATA', payload: '' }
  | { type: 'FETCHED_ASX_DATA', payload: AsxData };

export type ThunkLocals = {
  axios: typeof Axios
};

export type Dispatch<A: Action | ThunkAction> = (action: A) => A;

export type ThunkAction =
  (dispatch : Dispatch<Action>, getState : () => State, locals: ThunkLocals) => Promise<any>;
