import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import NotFound from '../../../app/client/js/components/404';

describe('<NotFound />', () => {
  it('should render a h3', () => {
    const wrapper = shallow(<NotFound />);
    expect(wrapper.find('h3')).to.have.length(1);
  });

  it('should render a p', () => {
    const wrapper = shallow(<NotFound />);
    expect(wrapper.find('p')).to.have.length(1);
  });
});