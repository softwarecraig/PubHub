const initialState = [];

const orders = function(state = initialState, action) {
  switch (action.type) {
    case 'ORDERS_ADD': {
      let newOrders = state.slice(0);
      newOrders.push(action.product);
      return newOrders;
    }
    case 'ORDERS_REMOVE': {
      let ordersToRemove = state.slice(0);
      const index = ordersToRemove.map(function(order) { return order.id; }).indexOf(action.id);
      ordersToRemove.splice(index, 1);
      return ordersToRemove;
    }
    default:
      return state;
  }
};

export default orders;
