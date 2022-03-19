import {combineReducers} from 'redux';
import ApiSetupReducer from './ApiSetupReducer';
import UserReducer from './UserReducer';
// import Setting from './SettingReducer';

export default combineReducers({
  api: ApiSetupReducer,
  user: UserReducer,
  // setting: Setting,
});
