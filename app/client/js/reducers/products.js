const initialState = {
  list: []
};

const products = function(state = initialState, action) {
  switch (action.type) {
    case 'PRODUCTS_LOAD':
      return Object.assign({}, state, {
        list: action.products
      });
    default:
      return state;
  }
};

export default products;
