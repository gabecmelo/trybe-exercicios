import { useSelector, useDispatch } from "react-redux";
import { actionCreator } from "./redux/actions";
import './App.css'

function App() {

  const dispatch = useDispatch();

  type RootState = {
    count: number,
    clicks: number
  }

  const rootState = useSelector((state: RootState) => state);

  return (
    <>
      <h1>Contador</h1>
      <h2>{rootState.count}</h2>
      <div className="button-container">
        <button onClick={() => dispatch(actionCreator(1))}>Incrementar 1</button>
        <button onClick={() => dispatch(actionCreator(5))}>Incrementar 5</button>
        <button onClick={() => dispatch(actionCreator(250))}>Incrementar 250</button>
      </div>
      <p>Total de incrementos: {rootState.clicks}</p>
    </>
  );
}

export default App;