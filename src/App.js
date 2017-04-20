import React, { Component } from 'react';
import './App.css';
import ExerciseBox from './ExerciseBox';
import ExerciseItem from './ExerciseItem';

class App extends Component {

  constructor(props){
  super(props);
  this.state = {
    exercise: false
  }
  }

  onClick = (e) => {
    this.setState({exercise: !this.state.exercise })
  }



  renderExercise() {
    return (
      <ExerciseItem start={Date.now()}/>
    )
  }

  render() {
    return (
      <div className="App">
          <ExerciseBox title='cardio' onClick={this.onClick} />
          {this.state.exercise ? this.renderExercise() : null}
      </div>
    );
  }
}

export default App;
