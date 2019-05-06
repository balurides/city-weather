import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateCity,fecthWeatherWithCity,updateCountry } from '../actions';
import WeatherData from './weatherData';

class WeatherSearch extends Component{
        state = {
            city:'',
            fetchWeather:[],
            country:'USA',
            unit:''
        };
    // componentWillMount() {
    //         this.props.fecthWeatherWithCity("chicago");
    //     }
    cityChange = event => {
            this.setState({city:event.target.value});
            this.props.updateCity(this.state.city); 
    }
    unitChange = event => {
        this.setState({unit:event.target.value});
    }

    countryChange = e => {
        setTimeout(this.setState({country:e.target.value}),2000);
        this.props.updateCountry(this.state.country);
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
                        <input placeholder="enter country"
                            value={this.state.country}
                            onChange={this.countryChange}
                         />
                    </label>
                    <label>
                        units
                        <select value={this.state.unit} onChange={this.unitChange}>
                            <option value="celisius">celisius</option>
                            <option value="Fahrenheit">Fahrenheit</option>
                        </select>

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
        country:state.country,
        fetchWeather: state.fetchWeather
    };  
}

export default connect(mapStateToProps, {updateCity,fecthWeatherWithCity,updateCountry})(WeatherSearch);