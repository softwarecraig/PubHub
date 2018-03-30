import React from 'react';
import { connect } from 'react-redux';
import { getBars } from '../actions/bars';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
	search: term => dispatch(getBars(term))
});

const delay = (function(){
  let timer = 0;
  return function(callback, ms){
    clearTimeout (timer);
    timer = setTimeout(callback, ms);
  };
})();

class SearchContainer extends React.Component {

	keyUp(e) {
		delay(() => {
      this.props.search(this.searchInput.value);
    }, 400 );
	}
	
	render() {
		return (
			<div className="search">
				<input 
					type="text" 
					placeholder="Filter bars..." 
					ref={(input) => { this.searchInput = input; }}
					onKeyUp={this.keyUp.bind(this)}
				/>
			</div>
		);
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
