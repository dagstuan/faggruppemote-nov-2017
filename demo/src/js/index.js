import { configureStore } from './store';
import initializeRoot from './utils/initializeRoot';

const roots = [
  'root',
];

function initialize() {
  const store = configureStore();

  roots.map(rootName =>
    initializeRoot(store, `js-${rootName}`, rootName));
}

initialize();
