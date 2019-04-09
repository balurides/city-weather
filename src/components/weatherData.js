import React from 'react';
import { connect } from 'react-redux';

import { fecthWeatherWithCity } from '../actions';
import TempConversion from './tempConversion';

class WeatherData extends React.Component{

    RenderWeather= ({weatherData}) => {
        return(
            weatherData.map((weather) => {
                return(
                    <div key={weather.id}>
                        <span> Today temparature at {this.props.cityName} 
                        {isNaN(weather.main.temp) ? TempConversion(weather.main.temp) :null }
                        </span>
                    </div>
            )
        })
        );
    }

    render() {
        return(
            <div>
                Weather data at {this.props.cityName}
                <this.RenderWeather weatherData = {this.props.fetchWeather} />
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