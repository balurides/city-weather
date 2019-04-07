import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateCity,fecthWeatherWithCity } from '../actions';

class WeatherSearch extends Component{
        state = {
            city:'chicago',
            fetchWeather:[],
            country:'USA'
        };
    componentDidMount() {
        console.log(this.state.city);
        this.props.fecthWeatherWithCity(this.state.city);
    }
    
  
    cityChange = event => {
            this.setState({city:event.target.value});
            this.props.updateCity(this.state.city);   
    }

    weatherSubmit = event => {
        event.preventDefault();
    }

    render(){
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
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return{
        city:state.city,
        fetchWeather:state.fetchWeather
    };  
}

export default connect(mapStateToProps, {updateCity,fecthWeatherWithCity})(WeatherSearch);