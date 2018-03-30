import { expect } from 'chai';
import sinon from 'sinon';
import React from 'react';
import { Provider } from 'react-redux';
import Header from '../../../app/client/js/containers/header';
import shallowWithStore from '../helpers/shallow-with-store';
import { createMockStore } from 'redux-test-utils';

const sandbox = sinon.sandbox.create();

const state = {
  orders: [{ id: 1 }, { id: 2 }]
};

const store = createMockStore(state);

describe('<Header />', () => {

  describe('connect', () => {

    afterEach(() => {
      sandbox.restore();
    });

    it('maps orders state to orders prop', () => {
      const component = shallowWithStore(<Header />, store);
      const expected = state.orders;

      expect(component.props().orders).to.equal(expected);
    });

  });

});
