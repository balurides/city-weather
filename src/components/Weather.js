import React, { Component } from 'react';
import { connect } from 'react-redux';
import  updateCity from '../actions';

class WeatherSearch extends Component{
    state = {
        city:'',
        country:'USA'
    };
    
    cityChange = event => {
        this.setState({city:event.target.value});
        updateCity(city);
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
                        value={this.cityChange}
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
        city:state.city
    };  
}

export default connect(mapStateToProps,{updateCity})
    (WeatherSearch);