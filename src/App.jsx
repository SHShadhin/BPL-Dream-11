import { Suspense, useState } from 'react';
import './App.css'
import Banner from './components/banner/Banner';
import Navbar from './components/navbar/Navbar';
import Players from './components/players/Players';

const fetchPlayer = async () => {
  const res = await fetch("/data.json");
  return res.json();
}
function App() {
  const [coin, setCoin] = useState(100000)
  const playerPromise = fetchPlayer();
  return (
    <>
      <Navbar coin={coin}></Navbar>
      <Banner></Banner>
      <Suspense
        fallback={<span className="loading loading-dots loading-xl"></span>}
      >
        <Players playerPromise={playerPromise} coin={coin} setCoin={setCoin}>
          {playerPromise.length}
        </Players>
      </Suspense>
    </>
  );
}

export default App
