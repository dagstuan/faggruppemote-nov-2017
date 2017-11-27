import { fromJS } from 'immutable';
import initReactComponent from '../utils/initReactComponent';
import { injectReducer } from '../store';
import rootReducer from '../data/reducer';
import { setState } from '../data/actions';
import RootComponent from '../components/root';

export default function initializeRoot(store, domEl) {
  injectReducer(store, 'rootReducer', rootReducer);

  store.dispatch(setState(fromJS({
    counter: 1,
    people: [
      {
        name: 'Dag',
        age: 100,
      },
      {
        name: 'Eirik',
        age: 99,
      },
    ],
  })));

  initReactComponent(RootComponent, domEl, store);
}
