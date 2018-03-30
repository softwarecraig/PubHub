import { expect } from 'chai';
import sinon from 'sinon';
import React from 'react';
import { Provider } from 'react-redux';
import Product from '../../../app/client/js/containers/product';
import shallowWithStore from '../helpers/shallow-with-store';
import { createMockStore } from 'redux-test-utils';

const sandbox = sinon.sandbox.create();

const state = {
  addToOrder: sandbox.spy(),
	removeFromOrder: sandbox.spy()
};

const store = createMockStore(state);

describe('<Product />', () => {

	afterEach(() => {
    sandbox.restore();
  });

	describe('connect', () => {

	  it('maps addToOrder prop to dispatch', () => {
      sandbox.stub(store, 'dispatch');
      const component = shallowWithStore(<Product />, store);

      component.props().addToOrder();

      expect(store.dispatch.calledOnce).to.be.true;
      expect(store.dispatch.calledWith).to.be.a('function');
    });

    it('maps removeFromOrder prop to dispatch', () => {
      sandbox.stub(store, 'dispatch');
      const component = shallowWithStore(<Product />, store);

      component.props().removeFromOrder();

      expect(store.dispatch.calledOnce).to.be.true;
      expect(store.dispatch.calledWith).to.be.a('function');
    });

	});

});
