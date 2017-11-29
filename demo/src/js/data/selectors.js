import { List } from 'immutable';
import { createSelector } from 'reselect';

export function getPeople(state) {
  return state.get('people', List());
}

export const getNames = createSelector(
  [getPeople],
  people => people.map(person => person.get('name')),
);

export function getCounter(state) {
  return state.get('counter', 0);
}
