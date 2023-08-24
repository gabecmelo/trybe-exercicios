type ActionType = {
  type: string,
  payload: number
}

const INITIAL_COUNTER_VALUE = {
  count: 0
}

export const counterReducer = (state = INITIAL_COUNTER_VALUE, action: ActionType) =>  {
  switch (action.type) {
    case 'INCREMENT_COUNTER':
    return { count: state.count + action.payload};
    default:
      return state;
  }
}
