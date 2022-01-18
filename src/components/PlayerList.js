import React from 'react'; // optional
import Player from "./Player"; // plugging this in to PlayerList component
// import playerData from "../data/playerData"; // player data
// import matchData from "../data/matchData"; // match data
// import { preparePlayerData, addWinsToPlayers } from '../helpers/playerHelpers'; // helper functions


function PlayerList(props) {
  // const preparedPlayerData = preparePlayerData(playerData);
  const playerDataArray = props.preparePlayerData(props.playerData);
  // const parsedPlayerData = props.addWinsToPlayers(preparedPlayerData, matchData);
  const parsedPlayerData = props.addWinsToPlayers(playerDataArray, props.matchData);
  // const onePlayer = parsedPlayerData[0];

  const parsedPlayers = parsedPlayerData.map(player => <Player key={player.gamerTag} {...player} />);


  return (
    <section className="PlayerList">
      <h1>Current participating players</h1>
      {/* <Player {...onePlayer}/> */}
      {parsedPlayers}
    </section>
  )
}

export default PlayerList;