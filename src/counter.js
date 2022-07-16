import React, { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0, disable: false };
    //this.state is an object which contains variables , which will be used to manipulate ui
  }
  increment() {
    this.setState({ count: this.state.count + 1 });
  }
  decrement() {
    this.setState({ count: this.state.count - 1 });
  }
  enableDisable() {
    this.setState({ disable: true });
  }
  //The componentDidMount() method runs after the component output has been rendered to the DOM
  componentDidMount() {
    console.log("component mounted successfully");
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      if (this.state.count % 2 === 0) {
        console.log("even");
      }
      if (this.state.count <= 0) {
        this.enableDisable();
      }
      if (this.state.count > 0) {
        this.setState({ disable: false });
      }
    }
  }
  render() {
    let { count } = this.state;

    return (
      <div>
        <button onClick={() => this.increment()}>+</button>
        {count}
        <button disabled={this.state.disable} onClick={() => this.decrement()}>
          -
        </button>
      </div>
    );
  }
}
