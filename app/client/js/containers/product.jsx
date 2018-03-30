import React from 'react';
import { connect } from 'react-redux';
import { addProductToOrder } from '../actions/orders';
import { removeProductToOrder } from '../actions/orders';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
	addToOrder: product => dispatch(addProductToOrder(product)),
	removeFromOrder: id => dispatch(removeProductToOrder(id))
});

const ProductItem = ({ id, name, image_url, current_price, count, addToOrder, removeFromOrder, theme }) => {
	
	const product = {
		id: id,
		name: name,
		image_url: image_url,
		current_price: current_price
	};

	return (
		<li className="grid-item">
			<div className="content-item" href="">
				<div className="content-item--image" style={{
					backgroundImage: `url(${image_url})`
				}}>
					{ count !== null &&
						<span className="content-item--counts" title={`${count} ${name}'s`}>{count}</span>
					}
				</div>
				<div className="content-item--footer">
					{name}
					<span className="content-item--label">{current_price}</span>
					{ theme === "orders" ? (
						<a 
							href="" 
							title={`Remove ${name} from your order`} 
							onClick={(e) => {
								e.preventDefault();
								removeFromOrder(id)
							}
						}>
							<i aria-hidden="true" className="fa fa-times"></i>
							<span aria-hidden="true">Remove</span>
						</a>
					) : (
						<a 
							href="" 
							title={`Add ${name} to your order`} 
							onClick={(e) => {
								e.preventDefault();
								addToOrder(product)
							}
						}>
							<i aria-hidden="true" className="fa fa-plus"></i>
							<span aria-hidden="true">Add</span>
						</a>
					)}
				</div>
			</div>
		</li>
	)
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);