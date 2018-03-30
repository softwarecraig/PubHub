import React from 'react';
import BarItem from './bar';

const BarsList = ({ bars }) => (
	<ul className="grid">
		{ bars.map((bar, index) => {
				return (
					<BarItem
						key={`bar-${bar.id}`}
						id={bar.id}
						name={bar.name}
						image_url={bar.image_url}
					/>
				)
			})
		}
	</ul>
)

export default BarsList;