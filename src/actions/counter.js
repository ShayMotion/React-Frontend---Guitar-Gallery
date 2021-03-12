import { getMyAuctions } from "./myAuctions";

export function increment(auctionId) {
  return (dispatch) => {
    console.log("adding like to auction with id: " + auctionId);
    return fetch(`http://localhost:3002/api/v1/auctions/${auctionId}/like`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((r) => r.json())
      .then((response) => {
        if (response.error) {
          alert(response.error);
        } else {
          dispatch(getMyAuctions());
        }
      })
      .catch(console.log);
  };
}
