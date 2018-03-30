import React from 'react';
import { connect } from 'react-redux';
import { getBars } from '../actions/bars';
import Search from '../containers/search';
import BarsList from '../components/bars';

const mapStateToProps = state => ({
	bars: state.bars.list
});

const mapDispatchToProps = dispatch => ({
	load: () => dispatch(getBars())
});

class Bars extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.load();
	}

	render() {
		return (
			<div>
				<Search />
				<BarsList
		    	bars={this.props.bars}
		    />
			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Bars);
