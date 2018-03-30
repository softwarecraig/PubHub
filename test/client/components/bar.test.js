import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Bar from '../../../app/client/js/components/bar';

describe('<Bar />', () => {
  it('should have the .grid-item class', () => {
    const wrapper = shallow(<Bar id={1} name="Craig's Bar" image_url="https://image.com/image.jpg" />);
    expect(wrapper.hasClass('grid-item')).to.equal(true);
  });

  it('should pass [name] prop into .content-item--footer', () => {
    const wrapper = shallow(<Bar id={1} name="Craig's Bar" image_url="https://image.com/image.jpg" />);
    expect(wrapper.find('.content-item--footer').text()).to.equal("Craig's Bar");
  });
});