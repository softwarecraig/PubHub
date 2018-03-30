import React from 'react';
import ProductItem from '../containers/product';
import { Link } from 'react-router';

const groupBy = orders => {
	let counts = {};
	let newOrders = [];

	// work out count for each order
	orders.map((order) => { 
		if (order.id in counts) {
			counts[order.id] ++; 
		} else {
			counts[order.id] = 1; 
		}
	});

	// Now rework the orders array to group orders
	Object.keys(counts).map((key) => {
		for (let i=0; i<orders.length; i++) {
			if (key == orders[i].id) {
				orders[i].count = counts[key];
				newOrders.push(orders[i]);
				return;
			}
		}
	});

	return newOrders;
}

const ProductsList = ({ products, theme="products" }) => {

	let data = products;

	if (theme == "orders") {
		data = groupBy(products);
	}

	if (!products.length && theme === "orders") {
		return <p className="padded">You haven't added any orders yet. Go back to our <Link to="/">bars list</Link> to get adding orders.</p>
	}

	if (!products.length && theme === "products") {
		return <p className="padded">Sorry, we don't recognise this bar. Go back to our <Link to="/">bars list</Link> to get adding orders.</p>
	}
	
	return (
		<ul className="grid">
			{ data.map((product, index) => {
					return (
						<ProductItem
							key={`product-${index}`}
							index={index}
							id={product.id}
							name={product.name}
							image_url={product.image_url}
							current_price={product.current_price}
							count={product.count || null}
							theme={theme}
						/>
					)
				})
			}
		</ul>
	);
}

export default ProductsList;