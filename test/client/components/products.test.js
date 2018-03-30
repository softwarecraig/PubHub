import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Products from '../../../app/client/js/components/products';
import Product from '../../../app/client/js/containers/product';
import products from '../../../app/server/stubs/products.json';

describe('<Products />', () => {
	it('should render 5 <Product /> components', () => {
    const wrapper = shallow(<Products products={products[0].products} />);
    expect(wrapper.find(Product)).to.have.length(5);
  });
});