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

  render() {
    return (
      <div>
        <button className="inc" onClick={this.increment}>
          Like: {this.state.count}
        </button>
      </div>
    );
  }
}

export default Counter;
