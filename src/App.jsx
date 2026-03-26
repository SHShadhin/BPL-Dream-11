import { Suspense } from 'react';
import './App.css'
import Banner from './components/banner/Banner';
import Navbar from './components/navbar/Navbar';
import Players from './components/players/Players';

const fetchPlayer = async () => {
  const res = await fetch("/data.json");
  return res.json();
}
function App() {
  const playerPromise = fetchPlayer();
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Suspense
        fallback={<span className="loading loading-dots loading-xl"></span>}
      >
        <Players playerPromise={playerPromise}>
          {playerPromise.length}
        </Players>
      </Suspense>
    </>
  );
}

export default App
