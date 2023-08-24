import './style.css';
import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import CounterActionType from './types';
import INITIAL_COUNTER_STATE from './states';
import { ACTIONS, reducerActions } from './actions';

const reducer = (state = INITIAL_COUNTER_STATE, action: CounterActionType) => {

  switch (action.type) {
    case reducerActions.increment:
      return { count: state.count + 1 }
    case reducerActions.decrement:
      return { count: state.count - 1 }
    default:
      return state;
  }

};

const store = createStore(reducer, composeWithDevTools())

const DISPATCHS = {
  increment: () => store.dispatch(ACTIONS.incrementAction),
  decrement: () => store.dispatch(ACTIONS.decrementAction)
}

store.subscribe(() => {
  const state = store.getState()
  const countElement = document.querySelector('h2') as HTMLHeadingElement;
  countElement.innerHTML = state.count.toString();
})

const incrementButton = document.querySelector('.increment') as HTMLButtonElement;
const decrementButton = document.querySelector('.decrement') as HTMLButtonElement;

incrementButton.addEventListener('click', DISPATCHS.increment);
decrementButton.addEventListener('click', DISPATCHS.decrement);
