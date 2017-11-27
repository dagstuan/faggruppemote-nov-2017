export default function commonReducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state.updateIn(['counter'], 0, counter => counter + 1);
    case 'SET_STATE':
      return action.state;
    default:
      return state;
  }
}
