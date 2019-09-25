import { UPDATE_STATE } from "../actions/types"
import moment from "moment";

const INITIAL_STATE = {
  lastTime: moment(),
  age: 0,
  hunger: 50,
  health: 100,
  sleep: 50
}

const cluimbiseti = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_STATE:
      return {
        ...state,
        ...action.newState
      }
    default:
      return state
  }
}

export default cluimbiseti
