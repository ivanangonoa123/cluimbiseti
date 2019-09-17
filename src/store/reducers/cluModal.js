import { OPEN_MODAL, CLOSE_MODAL } from "../actions/types";

const INITIAL_STATE = {
  open: false,
  text: ''
}

const cluModal = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        open: true,
        text: action.text
      }
    case CLOSE_MODAL:
      return {
        ...state,
        open: false
      }
    default:
      return state
  }
}

export default cluModal;
