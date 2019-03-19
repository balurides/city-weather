import React, { Component } from 'react';

import DisplayUsers from './DisplayUser';

export default class App extends Component {
  
  render() {
    return (
      <div className="App">
        React Starter
        <DisplayUsers />
      </div>
    );
  }
}
