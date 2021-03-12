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

  let displayedAuctions;

  let moreThan10Likes = props.auctions.filter(
    (auction) => auction.attributes.likes > 10
  );
  props.auctions.forEach(function (auction) {
    console.log(auction.attributes.title);
  });

  props.auctions.sort(function (auction1, auction2) {
    if (auction1.attributes.likes > auction2.attributes.likes) {
      return 1;
    } else {
      return -1;
    }
  });
  console.log(props.auctions);

  displayedAuctions = props.auctions;

  const auctionCards =
    displayedAuctions.length > 0
      ? displayedAuctions.map((a) => (
          <div key={a.id}>
            <Link to={`/auctions/${a.id}`}>{a.attributes.title}</Link>
            <Counter auctionId={a.id} auctionLikes={a.attributes.likes} />
          </div>
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
