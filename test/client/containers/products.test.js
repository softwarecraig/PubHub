import { expect } from 'chai';
import sinon from 'sinon';
import React from 'react';
import { Provider } from 'react-redux';
import Products from '../../../app/client/js/containers/products';
import shallowWithStore from '../helpers/shallow-with-store';
import { createMockStore } from 'redux-test-utils';

const sandbox = sinon.sandbox.create();

const state = {
  products: [{id: 1}, {id: 2}, {id: 3}],
  load: sandbox.spy()
};

const store = createMockStore(state);

describe('<Products />', () => {

	afterEach(() => {
    sandbox.restore();
  });

	describe('connect', () => {

	  it('maps products.list state to products prop', () => {
      const component = shallowWithStore(<Products />, store);
      const expected = state.products.list;

      expect(component.props().products).to.equal(expected);
    });

    it('maps load prop to dispatch', () => {
      sandbox.stub(store, 'dispatch');
      const component = shallowWithStore(<Products />, store);

      component.props().load();

      expect(store.dispatch.calledOnce).to.be.true;
      expect(store.dispatch.calledWith).to.be.a('function');
    });

	});

});
