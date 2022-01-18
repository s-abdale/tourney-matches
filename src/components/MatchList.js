import React from 'react'; // optional
import Match from "./Match"; // plugging this in to PlayerList component
// import matchData from "../data/matchData"; // match data


function MatchList(props) {
  const oneMatch = matchData[0];
  const {matchData} = props;
  return (
    <section className="PlayerList MatchList">
      <h1>Match list</h1>
      <Match {...oneMatch}/>
      {/* {matchData} */}
    </section>
  )
}

export default MatchList;