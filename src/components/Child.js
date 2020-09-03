import React from 'react';

class Child extends React.Component {
  render() {
    return (
      <div>
        <h2>Count times 10: {this.props.myProp * 10}</h2>
      </div>
    );
  }
}

export default Child;
