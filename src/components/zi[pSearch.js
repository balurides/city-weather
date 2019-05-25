import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchWeatherHistoryWithZip,zipcodeUpdate  } from '../actions';
import WeatherHistoryChart from './weatherHistoryCharts';

class ZipSearch extends Component{
    constructor(props){
        super(props);
        this.state = {
            zipcode:""
        }
    }
    zipChange = zipcode =>{
        if(zipcode.length > 0){ 
            this.setState({
                zipcode:zipcode
            })};
        this.props.zipcodeUpdate(this.state.zipcode);
    }
    zipSubmit = event => {
        event.preventDefault();
        this.props.fetchWeatherHistoryWithZip(this.state.zipcode);
    }
    
   
    render(){

        return(
            <div>
                <form onSubmit={this.zipSubmit}>
                    <label> Zipcode
                        <input type="text"
                            placeholder="please enter zipcode"
                            value={this.state.zipcode}
                            onChange={event => {this.zipChange(event.target.value)}
                            }
                            required>
                        </input>
                    </label>
                    
                    <button type="submit">
                        Find Weather History
                    </button>
                 </form>
                {/* <form> */}
                     <WeatherHistoryChart historyData={this.props.weatherHistory}/>
                    <div>weather history </div>
                {/* </form> */}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        weatherHistory:state.weatherHistory,
    }
}
export default connect(mapStateToProps,{fetchWeatherHistoryWithZip,zipcodeUpdate})
(ZipSearch);