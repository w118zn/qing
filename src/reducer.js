import { combineReducers } from 'redux'
import {instances} from "./reducer/hosts.reducer";

export const reducers = combineReducers({
  instances,
});

// export default reducers;