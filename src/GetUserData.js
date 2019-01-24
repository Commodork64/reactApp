import React, { Component } from 'react';
import axios from 'axios';

class GetUserData extends Component {
  state = {
    userData: [] 
  }

  getDatData = () => {
      axios.get("localhost:8000/getUserData")
      .then(res => {
        const userData =  res.data;
        this.setState({ userData })
      })  
      }

  render() {
    return (
      <div className="GetUserData">
      { this.getDatData() }
      </div>
    );
  }
}

export default GetUserData;
