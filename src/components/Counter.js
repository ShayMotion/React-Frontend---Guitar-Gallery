import { render } from "@testing-library/react";
import React from "react";
import MyAuctions from "./MyAuctions.js";

class Counter extends React.Component {
  state = { count: 0 };

  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  decrement = () => {
    // i want to reduce the count if this.state.count > 0
    if (this.state.count > 0) {
      this.setState({
        count: this.state.count - 1,
      });
    }
  };

  render() {
    return (
      <div>
        <button className="inc" onClick={this.increment}>
          Like
        </button>
        <div style={{ color: "white" }}>{this.state.count}</div>
        <div>
          <button className="dec" onClick={this.decrement}>
            Dislike
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
