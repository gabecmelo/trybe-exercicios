import { useState } from 'react';
import { Article, Button, ButtonChange } from './styles/styles';

function App() {
  const [primaryColor, setPrimaryColor] = useState(true);

  return (
    <Article>
      {primaryColor ? <Button>Não acontece nada se clicar aqui</Button> : <Button $primary>Não acontece nada se clicar aqui</Button>}
      <ButtonChange onClick={() => setPrimaryColor(!primaryColor)}>Mudar Cor</ButtonChange>
    </Article>
  );
}

export default App;
