import { combineReducers } from 'redux';
import { INCREMENT_CRACKS, SET_HATCHED } from '../actions/types';

const INITIAL_EGGS_STATE = {
  hatched: false,
  cracks: 0
}

const eggReducer = (state = INITIAL_EGGS_STATE, action) => {
  switch (action.type) {
  case INCREMENT_CRACKS:
    return {
      ...state,
      cracks: state.cracks + 1
    }
  case SET_HATCHED:
    return {
      ...state,
      hatched: action.hatched
    }
  default:
    return state
  }
}

const rootReducer = combineReducers({
  egg: eggReducer,
})

export default rootReducer
