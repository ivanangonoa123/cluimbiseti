import { UPDATE_STATE, SLEEP } from "../actions/types";
import moment from "moment";

const INITIAL_STATE = {
  lastTime: moment(),
  sleeping: false,
  age: 0,
  hunger: 50,
  health: 100,
  sleep: 50,
}

const cluimbiseti = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_STATE:
      return {
        ...state,
        ...action.newState
      }
    case SLEEP:
      return {
        ...state,
        sleeping: !state.sleeping
      }
    default:
      return state
  }
}

export default cluimbiseti
