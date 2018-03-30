export const addProductToOrder = product => {
  return {
    type: 'ORDERS_ADD',
    product
  };
};

export const removeProductToOrder = id => {
  return {
    type: 'ORDERS_REMOVE',
    id
  };
};