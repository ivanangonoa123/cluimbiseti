import { combineReducers } from 'redux';
import cluModal from './cluModal';
import egg from './egg';

const rootReducer = combineReducers({
  cluModal,
  egg
})

export default rootReducer
