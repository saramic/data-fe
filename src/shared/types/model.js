/* @flow */
/* eslint-disable import/prefer-default-export */

export type Post = {
  id: number,
  title: string,
  body: string,
};

export type AsxData = Array<JSON>;
export type AsxDataPoint = {
  Date: string,
  Open: string,
  High: string,
  Low: string,
  Close: string,
  Volume: string,
  'Adj Close': string
};
