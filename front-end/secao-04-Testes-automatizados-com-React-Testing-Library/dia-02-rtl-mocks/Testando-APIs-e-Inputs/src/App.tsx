import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [joke, setJoke] = useState('');
  const [newJoke, setNewJoke] = useState(false);

  useEffect(() => {
    async function fetchJoke() {
      const API_URL = 'https://icanhazdadjoke.com/';
      const REQUEST_CONFIG = { headers: { Accept: 'application/json' } };
      const response = await fetch(API_URL, REQUEST_CONFIG);
      const data = await response.json();
      setJoke(data.joke)
    };
    fetchJoke();
  }, [newJoke]);

  const handleClick = () => {
   setNewJoke(!newJoke) 
  }

  return (
    <div className="App">
      <p data-testid="paragraph">{joke}</p>
      <button onClick={handleClick}>New Joke</button>
    </div>
  );
}

export default App;