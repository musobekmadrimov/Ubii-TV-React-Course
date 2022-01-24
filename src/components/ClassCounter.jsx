import React from "react";
import MyButton from "./UI/Button/MyButton";

export default class ClassCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }
  decrement() {
    this.setState({ count: this.state.count - 1 });
  }

  render() {
    return (
      <div className="class-component-counter">
        <h1>Class Component Counter</h1>
        <h2>{this.state.count}</h2>
        <MyButton onClick={this.increment}>Increment</MyButton>
        <MyButton danger onClick={this.decrement}>
          Decrement
        </MyButton>
      </div>
    );
  }
}
