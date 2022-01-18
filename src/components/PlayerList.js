import React from 'react'; // optional
import Player from "./Player"; // plugging this in to PlayerList component


function PlayerList() {
  return (
    <section className="PlayerList">
      <h1>Current participating players</h1>
      <Player />
    </section>
  )
}

export default PlayerList;