import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/header';

const mapStateToProps = state => ({
	orders: state.orders
});

const HeaderContainer = ({ orders }) => (
	<Header 
		count={orders.length}
	/>
);

export default connect(mapStateToProps)(HeaderContainer);
