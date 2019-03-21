import React, { Component } from 'react';

import DisplayUsers from './DisplayUser';
import DisplayAlbums  from './DisplayAlbums';

export default class App extends Component {
  
  render() {
    return (
      <div className="App">
        React Starter
        <DisplayUsers />
        ********************
        <DisplayAlbums />
      </div>
    );
  }
}
