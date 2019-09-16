import { UPDATE_STATE } from "./types"

export const updateState = newState => (
  {
    type: UPDATE_STATE,
    newState
  }
)
