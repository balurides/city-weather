import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import { updateCity,fecthWeatherWithCity,updateCountry,updateUnit } from '../actions';
import WeatherData from './weatherData';

 class WeatherSearch extends Component{
    constructor(props){
        super(props);
        this.state ={
            city:``,
            fetchWeather:[],
            country:'',
            unit:'none', 
        }
        
    }
 /*    componentWillMount() {
            this.props.fecthWeatherWithCity("chicago");
        } */
        // componentDidMount(){
        //     this.props.fecthWeatherWithCity(this.state.city);
        // }
        
    cityChange = city => {
      
        if(city.length >0) {
            this.setState({
                city:city
            })
        }
        this.props.updateCity(city); 
    }
    unitChange = event => {
        this.setState({unit:event.target.value});
        this.props.updateUnit(event.target.value);
    }

    countryChange = country => {
        if(country.length>0) {
            this.setState({country});
        } 
        this.props.updateCountry(country);
    }
    weatherSubmit = event => {
        event.preventDefault();
        this.props.fecthWeatherWithCity(this.state.city,this.state.country);
    }

   
    render(){
        return(
                <div>
                <form onSubmit={this.weatherSubmit}>
                    <div>
                    <label> City : </label>
                    <input
                        type="text" 
                        placeholder="Enter city" 
                        onChange={event =>{
                            this.cityChange(event.target.value)}
                        }
                        required
                    />
                    and
                    <label>
                        Country :
                        <input placeholder="enter country"
                            value={this.state.country}
                            onChange={event => {
                                this.countryChange(event.target.value)}
                            }
                         />
                    </label>
                    <label>
                        units
                        <select value={this.state.unit} onChange={this.unitChange}>
                            <option value="none">Select units</option>
                            <option value="celisius">celisius</option>
                            <option value="Fahrenheit">Fahrenheit</option>
                        </select>

                    </label>
                    <button type="submit">Submit</button>
                </div>
                </form>
                <WeatherData city={this.state.city}/>
                </div>
        );
    }

}

const mapStateToProps = state => {
    return{
        city:state.city,
        country:state.country,
        fetchWeather: state.fetchWeather,
    };  
}

export default connect(mapStateToProps, {updateCity,fecthWeatherWithCity,
    updateCountry,updateUnit})(WeatherSearch);

WeatherSearch.propTypes ={
    city : propTypes.string
}