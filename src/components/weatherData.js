import React from 'react';
import { connect } from 'react-redux';

import { fecthWeatherWithCity } from '../actions';

class WeatherData extends React.Component{
    renderWeather(weatherData) {
        return(
            weatherData.map((weather) => {
                return(
                    console.log(weather.main.temp)
                );
            })
        );
    }
    render() {
        var weatherData = this.props.fetchWeather;
        this.renderWeather(weatherData);
        return(
            <div>
                Weather data
                {/* <this.renderWeather weatherData = {this.props.fetchWeather}/> */}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return{
        fetchWeather: state.fetchWeather
    }
}
export default connect(mapStateToProps ,{fecthWeatherWithCity})(WeatherData);