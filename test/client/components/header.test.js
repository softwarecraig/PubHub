import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Header from '../../../app/client/js/components/header';

describe('<Header />', () => {
  it('should render an .icon-btn', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('.icon-btn')).to.have.length(1);
  });

  it('should not render an .icon-btn--count element when no count is passed in', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('.icon-btn--count')).to.have.length(0);
  });

  it('should render an .icon-btn--count element when count is passed in', () => {
    const wrapper = shallow(<Header count={5} />);
    expect(wrapper.find('.icon-btn--count')).to.have.length(1);
    expect(wrapper.find('.icon-btn--count').text()).to.equal('5');
  });
});