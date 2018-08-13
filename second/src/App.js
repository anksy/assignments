import React, { Component } from 'react';
import HomePage from '././components/HomePage/HomePage.js';
import AppRouter   from './router/index.js';

class App extends Component {
  render() {
    const {history}=this.props;
    return (
      <div className="App">
        <AppRouter history={history}/>
      </div>
    );
  }
}

export default App;
