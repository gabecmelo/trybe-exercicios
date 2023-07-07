import { useState } from 'react'
import './App.css'
import Swal from 'sweetalert2'

function App() {

  const [index, setIndex] = useState<number>(0);

  const [toolList, setToolList] = useState<string[]>([])

  const [inputValue, setInputValue] = useState<string>('')

  const handlePreviousButton = (): void => {
    index - 1 >= 0 ? setIndex(index - 1) : setIndex(toolList.length - 1);
    
  }

  const handleNextButton = ():void => {
    index + 1 < toolList.length ? setIndex(index + 1) : setIndex(0);
    
  }

  const handleInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  const handleClick = () => {
    const newTool: string = inputValue 
    
    if (toolList.some((tool) => tool === newTool)) {
      Swal.fire ({
        title: 'Opa!',
        text: 'Você já adicionou esta ferramenta',
        icon: 'error',
        confirmButtonText: 'Obrigado'
      })
    } else {
      setToolList([...toolList, newTool ])
    }
  }

  return (
    <>
      <h1>Caixa de ferramentas de uma Pessoa Desenvolvedora</h1>
      <h2>{toolList[index]}</h2>
      <div className='butoes'>
      <button onClick={handlePreviousButton}>Anterior</button>
      <button onClick={handleNextButton}>Próximo</button>
      </div>

      <div>
      <input onChange={handleInputValue} className='addTool' type="text" placeholder='Bota um bagui ai'/>
      </div>
      <button onClick={() => handleClick}>Adicionar</button>

      <ul>
        {toolList.map((tool) => (
          <li>{tool}</li>
        ))}
      </ul>
    </>
  )
}

export default App
