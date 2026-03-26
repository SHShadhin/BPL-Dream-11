import React from 'react';
import Card from '../ui/Card';

const AvailablePlayers = ({
  playersData,
  coin,
  setCoin,
  selectedPlayers,
  setSelectedPlayers,
}) => {
  // console.log(playersData)
  return (
    <div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
        {playersData.map((player, ind) => {
          return  <Card player={player} key={ind} coin={coin} setCoin={setCoin} selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers}></Card>;
        })}
      </div>
    </div>
  );
};

export default AvailablePlayers;