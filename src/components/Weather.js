import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fecthWeatherWithCity } from '../actions';

class WeatherSearch extends Component{
    state = {
        city:'chicago',
        country:'USA'
    };
    componentDidMount() {
        this.props.fecthWeatherWithCity(this.state.city);
    }
    cityChange = event => {
        this.setState({city:event.target.value});
    }
    weatherSubmit = event => {
        event.preventDefault();
        console.log('city' + this.state.city);

    }

    render(){
        // console.log(this.state.city);
        // console.log(this.state.country);

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

    };
}

export default connect(mapStateToProps,{fecthWeatherWithCity})
    (WeatherSearch);