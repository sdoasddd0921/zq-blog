const defaultState = 'default state test';

const testReducer = (state = defaultState, actions) => {
  switch (actions.type) {
    case 'TEST':
      return 'action type is TEST';
    default:
      return state;
  }
};

export default testReducer;