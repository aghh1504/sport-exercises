import React, { Component } from 'react';
import './App.css';

class ExerciseBox extends Component {


  onClick = (e) => {
    this.props.onClick(e)
  }

  render() {
    return (
      <div className="App">
        <div className='Exercise-box' onClick={this.onClick}>{this.props.title}</div>
      </div>
    );
  }
}

export default ExerciseBox;
