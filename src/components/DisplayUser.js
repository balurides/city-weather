import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fecthUsers } from '../actions/index';

class DisplayUser extends Component{
    componentDidMount(){
        this.props.fecthUsers();
      }
      renderUsers() {
        return this.props.users.map((user) => {
          return (
              <div key={user.id}>
                {user.name}
              </div>
          );
        });
    
      };
    render(){
        return(
            <div>
                {this.renderUsers()}
            </div>
        );
    }
} 


const mapStateToProps = (state) => {
    return{
      users:state.users
    }
  }
  
  export default connect(mapStateToProps,
    { fecthUsers })
    (DisplayUser);