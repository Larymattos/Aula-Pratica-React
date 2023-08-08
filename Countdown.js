import React, { Component } from 'react';

class Countdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeLeft: props.initialTime,
    };
  }

  componentDidMount() {
    this.intervalId = setInterval(this.tick, 1000);
  }

  componentDidUpdate() {
    if (this.state.timeLeft === 0) {
      clearInterval(this.intervalId);
    }
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  tick = () => {
    this.setState((prevState) => ({
      timeLeft: prevState.timeLeft > 0 ? prevState.timeLeft - 1 : 0,
    }));
  };

  render() {
    return (
      <div>
        <h1>Contagem regressiva: {this.state.timeLeft}</h1>
      </div>
    );
  }
}

export default Countdown;


