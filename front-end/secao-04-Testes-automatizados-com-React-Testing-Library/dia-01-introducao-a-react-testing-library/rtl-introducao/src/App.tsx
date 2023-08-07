// src/App.tsx
import { ChangeEvent, useState } from 'react';
import './App.css';
import ValidEmail from './components/ValidEmail';

function App() {

  const [email, setEmail] = useState<string>('');
  const [title, setTitle] = useState<string>('');

  const handleChange = ({target}: ChangeEvent<HTMLInputElement>) => {
    setEmail(target.value)
  }

  const handleClick = () => {
    setTitle(email);
    setEmail('');
  }

  const handleBack = () => {
    setTitle('');
    setEmail('');
  }

  return (
    <div className="App">
      <label htmlFor="id-email">
        Email: 
        <input onChange={handleChange} id="id-email" type="email" value={email} placeholder='email@example.com'/>
      </label>
      <input data-testid="id-send" type="button" value="Enviar" onClick={handleClick} />
      <input type="button" value="Voltar" onClick={handleBack} />
      <ValidEmail email={title} />
    </div>
  );
}

export default App;