import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { fetchDogImage } from './redux/actions'
import { Dispatch, ReduxState } from './types';

function App() {

  const dispatch: Dispatch = useDispatch();
  const rootState = useSelector((state: ReduxState) => state)

  if (rootState.isFetching) return <p>Carregando...</p>

  return (
    <div>
      {
      }
      <button onClick={() => dispatch(fetchDogImage())}>Fetch</button>
      {
        rootState.imgURL && <img width="250px" src={rootState.imgURL} alt='Imagem aleatória de um cachorro' />
      }
    </div>
  )
}

export default App