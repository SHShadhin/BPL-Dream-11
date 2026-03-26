import React, { use } from 'react';
import AvailablePlayers from '../availablePlayers/AvailablePlayers';

const Players = ({ playerPromise }) => {
  const playersData = use(playerPromise)
  return (
    <div className="w-11/12 mx-auto text-2xl">
      <h2>Players: {playersData.length} </h2>
      <AvailablePlayers playersData={playersData}></AvailablePlayers>
    </div>
  );
};

export default Players;