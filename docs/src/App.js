import React, { Component } from 'react';

import Hello from '../../src/Hello';
import '../../src/Hello.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Hello />
      </div>
    );
  }
}

export default App;
