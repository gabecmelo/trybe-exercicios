import { AnyAction } from "redux"
import { ThunkDispatch } from "redux-thunk"

export type ReduxState = {
  isFetching: boolean
  imgURL: string
  errorMessage: string
}

export type Dispatch = ThunkDispatch<ReduxState, null, AnyAction>;
