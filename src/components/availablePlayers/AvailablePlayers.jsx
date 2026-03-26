import React from 'react';
import Card from '../ui/Card';

const AvailablePlayers = ({ playersData,coin, setCoin }) => {
  // console.log(playersData)
  return (
    <div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
        {playersData.map(player => {
          return <Card player={player} coin={coin} setCoin={setCoin}></Card>;
        })}
      </div>
    </div>
  );
};

export default AvailablePlayers;