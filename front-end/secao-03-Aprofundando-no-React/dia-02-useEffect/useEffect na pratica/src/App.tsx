import './App.css';
import { useEffect, useState } from 'react';
import { fetchCoordinates } from './services';

type CoordinatesType = {
  latitude: number;
  longitude: number;
}

function App() {
  const [coordinates, setCoordinates] = useState<CoordinatesType | null>(null)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchCoordinates();
      setCoordinates({ latitude: data.latitude, longitude: data.longitude })
      setLoading(false);
    }

    fetchData()

    const intervalID = setInterval(() => {
        fetchData()
      }, 3000)


    return () => {
      clearInterval(intervalID)
    }
  }, [])

  if (loading) {
    return <h1>Carregando...</h1>
  }

  return (
    <>
      <h1>International Space Station Location Tracker</h1>
      {coordinates && (
        <>
          <h2>{`Latitude: ${coordinates.latitude}`}</h2>
          <h2>{`Longitude: ${coordinates.longitude}`}</h2>
        </>
      )}
    </>
  )
}

export default App
