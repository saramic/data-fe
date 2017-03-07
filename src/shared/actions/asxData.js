/* @flow */
/* eslint-disable import/prefer-default-export */

import type { AsxData } from '../types/model';
import type { Action, ThunkAction } from '../types/redux';

function fetching() : Action {
  return { type: 'FETCHING_ASX_DATA' };
}

function fetched(asxData: AsxData) : Action {
  return { type: 'FETCHED_ASX_DATA', payload: asxData };
}

export function fetch() : ThunkAction {
  return (dispatch, getState, { axios }) => {
    dispatch(fetching());

    return axios
      .get(`http://localhost:1337/api/asx/ncm`) // TODO fix the address here
      .then(({ data }) => dispatch(fetched(data)))
      // We use 'react-jobs' to call our actions.  We don't want to return
      // the actual action to the 'react-jobs' withJob as it will cause
      // the data to be serialized into the react-jobs state by the server.
      // As we already have the state in the redux state tree, which is also
      // getting serialized by the server we will just return a simple "true"
      // here to indicate to react-jobs that all is well.
      .then(() => true);
  };
}
