import { combineReducers } from 'redux';
import cluModal from './cluModal';
import egg from './egg';
import cluimbiseti from './cluimbiseti';

const rootReducer = combineReducers({
  cluModal,
  egg,
  cluimbiseti
})

export default rootReducer
