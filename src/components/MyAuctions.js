import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { getMyAuctions } from "../actions/myAuctions";
import Counter from "./Counter";

const MyAuctions = (props) => {
  var getMyAuctions = props.getMyAuctions;

  useEffect(() => {
    getMyAuctions();
  }, [getMyAuctions]);

  const auctionCards =
    props.auctions.length > 0
      ? props.auctions.map((a) => (
          <p key={a.id}>
            <Link to={`/auctions/${a.id}`}>{a.attributes.title}</Link>
            <Counter></Counter>
          </p>
        ))
      : null;

  return auctionCards;
};

const mapStateToProps = (state) => {
  return {
    auctions: state.myAuctions,
  };
};
export default connect(mapStateToProps, { getMyAuctions })(MyAuctions);
