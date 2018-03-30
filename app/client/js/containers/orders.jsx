import React from 'react';
import { connect } from 'react-redux';
import ProductsList from '../components/products';

const mapStateToProps = state => ({
	orders: state.orders
});

const Orders = ({ orders }) => {
	return (
		<ProductsList
	  	products={orders}
	  	theme="orders"
	  />
	)
};

export default connect(mapStateToProps)(Orders);
