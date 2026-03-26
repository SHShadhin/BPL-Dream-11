import React, { use } from 'react';

const Players = ({ playerPromise }) => {
  const playersData = use(playerPromise)
  console.log(playersData)
  return (
    <div className='w-10/12'>
      <h2>Players: {playersData.length} </h2>
    </div>
  );
};

export default Players;