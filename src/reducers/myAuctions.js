const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_MY_AUCTIONS":
      // let sortedAuctions = actions.auctions.sort();
      return action.auctions;
    case "ADD_AUCTION":
      return state.concat(action.auction);
    case "UPDATE_AUCTION":
      return state.map((auction) =>
        auction.id === action.auction.id ? action.auction : auction
      );
    case "DELETE_AUCTION":
      return state.filter((auction) =>
        auction.id === action.auctionId ? false : true
      );
    case "CLEAR_AUCTIONS":
      return initialState;
    default:
      return state;
  }
};
