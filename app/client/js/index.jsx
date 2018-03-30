import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import React from 'react';
import thunk from 'redux-thunk';

import App from './layouts/app';
import Bars from './containers/bars';
import Products from './containers/products';
import Orders from './containers/orders';
import NotFound from './components/404';

import reducers from './reducers';

const middleware = applyMiddleware(thunk);
const store = createStore(reducers, middleware);

ReactDOM.render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Bars} />
        <Route path="/bar/:bar_id" component={Products} />
        <Route path="/orders" component={Orders} />
      </Route>
      <Route path="*" component={NotFound} />
    </Router>
  </Provider>
), document.getElementById('app'));
