export function increment() {
  return {
    type: 'INCREMENT',
  };
}

export function setState(state) {
  return {
    type: 'SET_STATE',
    state,
  };
}
