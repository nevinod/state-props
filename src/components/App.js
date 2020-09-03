import React, { Component } from 'react';
import Child from './Child.js'

class App extends React.Component {
  state = {
    count: 0
  };

  increment = () => {
    let currentCount = this.state.count
    this.setState({ count: currentCount + 1})
  }

  componentDidMount = () => {
    console.log('Mounted')
  }

  componentDidUpdate = () => {
    console.log('Updated')
  }

  render() {
    return (
      <div>
        <button onClick={this.increment}>Click Me</button>
        <h4>{this.state.count}</h4>
        <Child myProp={this.state.count} />
      </div>
    );
  }
}

export default App;
