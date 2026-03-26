import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { IoFlagSharp } from 'react-icons/io5';

const Card = ({ player,coin, setCoin }) => {
  const [isSelected, setSelected] = useState(false);
  const handleChoosePlayer = () => {
    let newCoin = coin - player.Price;
    if (newCoin >= 0) {
      setCoin(coin - player.Price) 
    } else {
      alert('Coin not enough for purchase the player')
      return;
    }
    
    alert(`${player.playerName} is selected`)
    setSelected(true);
  };
  return (
    <div className="card bg-base-100 shadow-sm mt-5">
      <figure>
        <img className="w-full" src={player.playerImg} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {' '}
          <FaUser /> {player.playerName}{' '}
        </h2>

        <div className="flex justify-between items-center">
          <h3 className="flex gap-2 items-center">
            <IoFlagSharp /> {player.playerCountry}
          </h3>
          <button className="btn">{player.playerType}</button>
        </div>

        <div class="divider"></div>
        <h3 className="font-bold">{player.rating}</h3>
        <div className="flex justify-between items-center">
          <p className="font-bold">{player.battingStyle}</p>
          <p className="text-right font-bold">{player.bollwingStyle}</p>
        </div>

        <div className="card-actions justify-end items-center">
          <p>Price: ${player.Price}</p>
          <button
            onClick={handleChoosePlayer}
            disabled={isSelected}
            className="btn"
          >
            {isSelected == true ? 'Selected' : 'Choose Player'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;