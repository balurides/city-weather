import React, { Component } from 'react';
import WeatherSearch  from "./Weather";

export default class App extends Component {
  
  render() {
    return (
      <div className="App">
        weather app
        <WeatherSearch />
      </div>
    );
  }
}
