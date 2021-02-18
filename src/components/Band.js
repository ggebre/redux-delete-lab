import React, { Component } from 'react';

class Band extends Component {

  render() {
    
    return(
     
      <React.Fragment>
        <li> Band Name: {this.props.band.name} <button onClick={() => this.props.handleDelete(this.props.band.id)}>DELETE</button></li> 
      </React.Fragment>
    );
  }
};

export default Band;
