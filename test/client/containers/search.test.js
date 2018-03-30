import { expect } from 'chai';
import sinon from 'sinon';
import React from 'react';
import { Provider } from 'react-redux';
import Search from '../../../app/client/js/containers/search';
import shallowWithStore from '../helpers/shallow-with-store';
import { createMockStore } from 'redux-test-utils';

const sandbox = sinon.sandbox.create();

const state = {
  search: sandbox.spy()
};

const store = createMockStore(state);

describe('<Search />', () => {

	afterEach(() => {
    sandbox.restore();
  });

	describe('connect', () => {

    it('maps search prop to dispatch', () => {
      sandbox.stub(store, 'dispatch');
      const component = shallowWithStore(<Search />, store);

      component.props().search();

      expect(store.dispatch.calledOnce).to.be.true;
      expect(store.dispatch.calledWith).to.be.a('function');
    });

	});

});
