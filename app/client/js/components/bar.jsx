import React from 'react';
import { Link } from 'react-router';

const BarItem = ({ id, name, image_url }) => (
	<li className="grid-item">
		<Link to={`/bar/${id}`} className="content-item">
			<div className="content-item--image" style={{
				backgroundImage: `url(${image_url})`
			}}></div>
			<div className="content-item--footer">
				{name}
			</div>
		</Link>
	</li>
)

export default BarItem;