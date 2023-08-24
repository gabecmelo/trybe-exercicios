type ActionType = {
  type: string,
  payload: number
}

const INITIAL_COUNTER_VALUE = {
  clicks: 0,
  count: 0
}

export const counterReducer = (state = INITIAL_COUNTER_VALUE, action: ActionType) => {
  switch (action.type) {
    case 'INCREMENT_COUNTER':
      return {
        ...state,
        count: state.count + action.payload,
        clicks: state.clicks + 1
      };
    default:
      return state;
  }
}
