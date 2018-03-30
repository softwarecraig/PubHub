import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Bars from '../../../app/client/js/components/bars';
import Bar from '../../../app/client/js/components/bar';
import bars from '../../../app/server/stubs/bars.json';

describe('<Bars />', () => {
  it('should render 5 <Bar /> components', () => {
    const wrapper = shallow(<Bars bars={bars} />);
    expect(wrapper.find(Bar)).to.have.length(5);
  });
});