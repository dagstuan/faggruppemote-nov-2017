import { List } from 'immutable';

export function getCounter(state) {
  return state.get('counter', 0);
}

export function getPeople(state) {
  return state.get('people', List());
}









































// import { createSelector } from 'reselect';
//
// export const getNames = createSelector(
//   [getPeople],
//   people => people.map(person => person.get('name')),
// );
