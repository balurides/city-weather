import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateCity,fecthWeatherWithCity } from '../actions';
import WeatherData from './weatherData';

class WeatherSearch extends Component{
        state = {
            city:'',
            fetchWeather:[],
            country:'USA'
        };
    componentWillMount() {
            console.log('test componentDidmonnt' + this.state.city);
            this.props.fecthWeatherWithCity("chicago");
        }
    cityChange = event => {
            this.setState({city:event.target.value});
            this.props.updateCity(this.state.city); 
            this.props.fecthWeatherWithCity(this.state.city);
    }

    weatherSubmit = event => {
        event.preventDefault();
    }

    render(){
        // this.props.fecthWeatherWithCity(this.state.city);

        return(
            <div>
                <form onSubmit={this.weatherSubmit}>
                    <div>
                    <label> City : </label>
                    <input
                        type="textarea" 
                        placeholder="Enter city" 
                        value={this.state.city}
                        onChange={this.cityChange}
                    />
                    and
                    <label>
                        Country :
                        <input placeholder="enter country" />
                    </label>
                </div>
                <WeatherData cityName = {this.state.city} />
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return{
        city:state.city,
        fetchWeather: state.fetchWeather
    };  
}

export default connect(mapStateToProps, {updateCity,fecthWeatherWithCity})(WeatherSearch);