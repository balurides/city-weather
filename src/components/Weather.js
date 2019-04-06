import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { updateCity } from '../actions';

class WeatherSearch extends Component{
    constructor(props){
        super(props);
        this.state = {
            city:'',
            country:'USA'
        };
        this.cityChange = _.debounce(this.cityChange.bind(this),1000);
    }
    
    cityChange = event => {
        this.setState({city:event.target.value});
        this.props.updateCity(this.state.city);
    }

    weatherSubmit = event => {
        event.preventDefault();
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
        city:state.city
    };  
}

export default connect(mapStateToProps, {updateCity})(WeatherSearch);