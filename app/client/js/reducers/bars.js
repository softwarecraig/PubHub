const initialState = {
  list: []
};

const bars = function(state = initialState, action) {
  switch (action.type) {
    case 'BARS_LOAD':
      return Object.assign({}, state, {
        list: action.bars
      });
    default:
      return state;
  }
};

export default bars;
