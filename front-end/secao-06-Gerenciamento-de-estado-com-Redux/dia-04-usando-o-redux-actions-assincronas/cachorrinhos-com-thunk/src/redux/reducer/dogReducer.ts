import { REQUEST_FAILED, REQUEST_STARTED, REQUEST_SUCCESSFUL } from "../actions";

const INITIAL_STATE = {
  isFetching: false,
  imgURL: '',
  errorMessage: '',
};

type AcionType = {
  payload: string
  type: string
};

function dogReducer(state = INITIAL_STATE, action: AcionType) {
  switch (action.type) {
    case REQUEST_STARTED:
      return {
        ...state,
        isFetching: true,
        imgURL: '',
        errorMessage: '',
      }
    case REQUEST_SUCCESSFUL:
      return {
        ...state,
        isFetching: false,
        imgURL: action.payload,
        errorMessage: '',
      }
    case REQUEST_FAILED:
      return {
        ...state,
        isFetching: false,
        imgURL: '',
        errorMessage: action.payload,
      }
    default:
      return state
  }
}

export default dogReducer;
