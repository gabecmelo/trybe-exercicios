import { useState } from 'react';
import './App.css'
import Button from './Components/Button/Button';
import Image from './Components/Image';

function App() {

  const [showImg, setShowImg] = useState<boolean>(false);

  function handleClick() {
    setShowImg(!showImg)
  }

  return (
    <div>
      {showImg && <Image />}
      <Button onClick={handleClick}>{showImg ? 'ocultar' : 'mostrar'} imagem</Button>
    </div>
  )
}

export default App
