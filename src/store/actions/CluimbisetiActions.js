import { UPDATE_STATE, SLEEP } from "./types";

export const updateState = newState => (
  {
    type: UPDATE_STATE,
    newState
  }
)

export const sleep = () => (
  {
    type: SLEEP
  }
)
