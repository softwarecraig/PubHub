import * as axios from 'axios';

export const updateList = bars => {
  return {
    type: 'BARS_LOAD',
    bars
  };
};

export const getBars = (search) => {
  return function action(dispatch) {

    let url = '/api/bars';

    if (search) {
      url += `?s=${search}`;
    }

    axios.get(url)
      .then(function(response) {
        dispatch(updateList(response.data));
    });
  };
};
