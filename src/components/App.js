import React, { Component } from 'react';
import WeatherSearch  from "./Weather";
import ZipSearch from './zi[pSearch';

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
        <br />
        Weather history with zipcode search
        <ZipSearch />
      </div>
    );
  }
}
