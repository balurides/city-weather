import React from 'react';
import { connect } from 'react-redux';

import { fecthWeatherWithCity } from '../actions';
import TempConversion from './tempConversion';
import { updateUnit } from '../actions';

class WeatherData extends React.Component{
    
    RenderWeather= ({weatherData}) => {
        
        return(
            weatherData.map((weather) => {
                return(
                    <div key={indexedDB}>
                        <TempConversion 
                        unit = {this.props.unit}
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
        unit:state.unit
        // city:state.city

    }
}
export default connect(mapStateToProps ,{fecthWeatherWithCity,updateUnit})(WeatherData);