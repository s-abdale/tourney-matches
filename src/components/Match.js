import React from 'react'; // optional

function Match(props) {
  if(props.winner) {
    {/* To be shown when there is a winner */}
    return (
      <article className="Match">
        <h1>
          {props.players[0]} <span>vs</span> {props.players[1]}
        </h1>
        <h2>{props.winner} is the winner by {props.scoreDifference}!</h2>
      </article>
    )
  } else {
    {/* To be shown when there is no winner */}
    return (
      <article className="Match">
        <h1>
          {props.players[0]} <span>vs</span> {props.players[1]}
        </h1>
        <h2>No winners yet!</h2>
      </article>
    )
  };
}

export default Match;