import { expect } from 'chai';
import sinon from 'sinon';
import React from 'react';
import { Provider } from 'react-redux';
import Orders from '../../../app/client/js/containers/orders';
import shallowWithStore from '../helpers/shallow-with-store';
import { createMockStore } from 'redux-test-utils';

const sandbox = sinon.sandbox.create();

const state = {
  orders: [{ id: 1 }, { id: 2 }]
};

const store = createMockStore(state);

describe('<Orders />', () => {

	afterEach(() => {
    sandbox.restore();
  });

	describe('connect', () => {

	  it('maps orders state to orders prop', () => {
	    const component = shallowWithStore(<Orders />, store);
	    const expected = state.orders;

	    expect(component.props().orders).to.equal(expected);
	  });

	});

});
