import React, { Component } from 'react'
import Child from './Child.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 }
    this.increment = this.increment.bind(this)
  }

  increment() {
    let currentCount = this.state.count
    this.setState({ count: currentCount })
  }

  componentDidMount() {
    console.log('Mounted')
  }

  componentDidUpdate() {
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

export default App
