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
                        <TempConversion 
                        city = {this.props.city}
                        weather={weather.main}/>
                    </div>
            )
        })
        );
    }

    render() {
        return(
            <div>
                Weather data at {this.props.city}
                <this.RenderWeather city = {this.props.city}
                    weatherData = {this.props.fetchWeather} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        fetchWeather: state.fetchWeather,
        // city:state.city
    }
}
export default connect(mapStateToProps ,{fecthWeatherWithCity})(WeatherData);