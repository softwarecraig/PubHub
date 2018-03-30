import React from 'react';
import { Link } from 'react-router';

const Header = ({ count=0 }) => {
	return (
		<header>
		<div className="wrap">
			<Link className="logo" to="/">
				<img src="/img/logo.png" alt="PubHub" />
			</Link>
			<Link className="icon-btn" to="/orders">
				<i className="fa fa-list-ul" aria-hidden="true"></i>
				{ count != 0 &&
					<span className="icon-btn--count">{count}</span>
				}
			</Link>
		</div>
  </header>
	)
}

export default Header;