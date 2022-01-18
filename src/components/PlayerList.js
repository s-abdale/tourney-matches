import React from 'react'; // optional
import Player from "./Player";

function PlayerList(props) {
  const playerDataArray = props.preparePlayerData(props.playerData);
  const parsedPlayerData = props.addWinsToPlayers(playerDataArray, props.matchData);

  const parsedPlayers = parsedPlayerData.map(player => <Player key={player.gamerTag} {...player} />);


  return (
    <section className="PlayerList">
      <h1>Current participating players</h1>
      {parsedPlayers}
    </section>
  )
}

export default PlayerList;