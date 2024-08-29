import './App.css';
import { Hero } from '../src/components/hero';
import { useEffect } from 'react';
import { fechData } from '../src/lib/fech-data'

function App() {
  const apiData = async () => {
    const data = await fechData();
    console.log(data);

  }

  useEffect(() => {
    apiData()
  })

  return (
    <>
      <Hero></Hero>
    </>
  );
}

export default App;
