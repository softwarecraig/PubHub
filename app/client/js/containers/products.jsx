import React from 'react';
import { connect } from 'react-redux';
import { getProducts } from '../actions/products';
import ProductsList from '../components/products';

const mapStateToProps = state => ({
	products: state.products.list
});

const mapDispatchToProps = dispatch => ({
	load: bar_id => dispatch(getProducts(bar_id))
});

class Products extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.load(this.props.params.bar_id);
	}

	render() {
		return (
			<ProductsList
	    	products={this.props.products}
	    />
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);
