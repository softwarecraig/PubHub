import React from 'react';
import Header from '../containers/header';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <main className="wrap">
          {this.props.children}
        </main>
      </div>
    );
  }
}

export default App;
