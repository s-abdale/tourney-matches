import React from 'react'; // optional
import Match from "./Match"; // plugging this in to PlayerList component
// import matchData from "../data/matchData"; // match data


function MatchList(props) {
  // const oneMatch = matchData[0];
  const {matchData} = props;
  const parsedMatches = matchData.map(match => <Match key={match.matchNumber} {...match} />);

  return (
    <section className="PlayerList MatchList">
      <h1>Match list</h1>
      {/* <Match {...oneMatch}/> */}
      {parsedMatches}
    </section>
  )
}

export default MatchList;