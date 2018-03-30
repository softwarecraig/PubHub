import { expect } from 'chai';
import sinon from 'sinon';
import React from 'react';
import { Provider } from 'react-redux';
import Bars from '../../../app/client/js/containers/bars';
import shallowWithStore from '../helpers/shallow-with-store';
import { createMockStore } from 'redux-test-utils';

const sandbox = sinon.sandbox.create();

const state = {
  bars: {
    list: [{ id: 1 }, { id: 2 }]
  },
  load: sandbox.spy()
};

const store = createMockStore(state);

describe('<Bars />', () => {

  describe('connect', () => {

    afterEach(() => {
      sandbox.restore();
    });

    it('maps bars.list state to bars prop', () => {
      const component = shallowWithStore(<Bars />, store);
      const expected = state.bars.list;

      expect(component.props().bars).to.equal(expected);
    });

    it('maps load prop to dispatch', () => {
      sandbox.stub(store, 'dispatch');
      const component = shallowWithStore(<Bars />, store);

      component.props().load();

      expect(store.dispatch.calledOnce).to.be.true;
      expect(store.dispatch.calledWith).to.be.a('function');
    });

  });

});
