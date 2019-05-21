import React, { Component } from 'react';
import WeatherSearch  from "./Weather";

export default class App extends Component {
  componentDidMount(){
    console.log('mount');
    this.setState({
      city:'',
      unit:''
    })
}

componentWillUnmount(){
  console.log("unmount");
}
  render() {
    return (
      <div className="App">
        weather app
        <WeatherSearch />
      </div>
    );
  }
}
