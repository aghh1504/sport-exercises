import React, { Component } from 'react';
import './App.css';

class ExerciseItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      elapsed: 0
  }
}

  // componentDidMount(){
  //   const getRandomInt = (min, max) => {
  //       min = Math.ceil(min);
  //       max = Math.floor(max);
  //       return Math.floor(Math.random() * (max - min)) + min;
  //       }
  //         const synth = window.speechSynthesis
  //         const voices = synth.getVoices()
  //         const voice = voices[getRandomInt(0, voices.length-1)];
  //       	var utterThis = new SpeechSynthesisUtterance('hello Justynka')
  //       	utterThis.voice = voice;
  //           synth.speak(utterThis);
  // }

//   componentDidMount() {
//       this.timer = setInterval(this.tick, 50);
//     }
//     componentWillUnmount() {
//       clearInterval(this.timer);
//     }
//
//   tick = () => {
//    this.setState({elapsed: new Date() - this.props.start});
// }
  runProgram = () => {
    console.log('start');
    setTimeout(() => console.log('hello'), 3000)

  }


  render() {
    //  var elapsed = Math.round(this.state.elapsed / 100);
    //  var seconds = (elapsed / 10).toFixed(1);
    return (
      <div className="App">
        <div className='Exercise-item'>
          {this.runProgram()}
        </div>
      </div>
    );
  }
}

export default ExerciseItem;
