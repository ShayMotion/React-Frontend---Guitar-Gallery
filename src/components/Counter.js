import React from "react";
import { connect } from "react-redux";
import { increment } from "../actions/counter";

class Counter extends React.Component {
  render() {
    return (
      <div>
        <button
          className="inc"
          onClick={() => this.props.increment(this.props.auctionId)}
        >
          Like: {this.props.auctionLikes}
        </button>
      </div>
    );
  }
}

export default connect(null, { increment })(Counter);
