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