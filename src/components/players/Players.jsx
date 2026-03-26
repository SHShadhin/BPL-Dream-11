import React, { use, useState } from 'react';
import AvailablePlayers from '../availablePlayers/AvailablePlayers';
import SelectedPlayers from '../navbar/selectedPlayers/SelectedPlayers';

const Players = ({ playerPromise,coin, setCoin }) => {
  const playersData = use(playerPromise)

  const [selectedType, setSelectedType] = useState('available')
  console.log(selectedType, 'Selected')
  return (
    <div className="w-11/12 mx-auto text-2xl">
      <div className="flex justify-between space-y-4">
        {selectedType === 'available' ? (
          <h2 className="font-bold text-2xl">Available Players</h2>
        ) : (
          <h2 className="font-bold text-2xl">Selected Players (2/10)</h2>
        )}
        <div>
          <button
            onClick={() => setSelectedType('available')}
            className={`btn ${selectedType === 'available' ? 'bg-[#E7FE29]' : ''} rounded-r-none rounded-l-xl`}
          >
            Available
          </button>
          <button
            onClick={() => setSelectedType('selected')}
            className={`btn ${selectedType === 'selected' ? 'bg-[#E7FE29]' : ''} rounded-l-none rounded-r-xl`}
          >
            Selected (0)
          </button>
        </div>
      </div>

      {selectedType === 'available' ? (
        <AvailablePlayers
          playersData={playersData}
          coin={coin}
          setCoin={setCoin}
        ></AvailablePlayers>
      ) : (
        <SelectedPlayers></SelectedPlayers>
      )}
    </div>
  );
};

export default Players;