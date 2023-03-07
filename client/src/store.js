import { combineReducers } from 'redux';
import newStore from './utils/redux/newStore';
import authReducer from './App/reducers/authReducer';
import setAuthToken from './utils/setAuthToken';

const reducers = combineReducers({
  auth: authReducer
});

const store = newStore(reducers, {});

export default store;
