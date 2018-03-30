import * as axios from 'axios';

export const updateList = products => {
  return {
    type: 'PRODUCTS_LOAD',
    products
  };
};

export const getProducts = bar_id => {
  return function action(dispatch) {

    const url = `/api/bars/${bar_id}/products`;

    axios.get(url)
      .then(function(response) {
        dispatch(updateList(response.data));
    });
  };
};
