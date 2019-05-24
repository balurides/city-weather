import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchWeatherHistoryWithZip,zipcodeUpdate  } from '../actions';

class ZipSearch extends Component{
    constructor(props){
        super(props);
        this.state = {
            zipcode:""
        }
    }
    zipChange = zipcode =>{
        this.setState({
            zipcode:zipcode
        })
        this.props.zipcodeUpdate(this.state.zipcode);
    }
    zipSubmit = event => {
        event.preventDefault();
        this.props.fetchWeatherHistoryWithZip(this.state.zipcode);
    }
    weatherHistoryTable = historyData =>{

        // inprogress hisory data
        var history;
        if (historyData === undefined || historyData.length === 0){
            history = <div> true</div>
        } else {
            history= <div>false </div>
        };
        return (history);
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
                    
                    <button>
                        Find Weather History
                    </button>
                </form>
                <form>
          
                    <this.weatherHistoryTable historyData={this.props.weatherHistory}/> :
                    <div>weather history </div>
                </form>
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