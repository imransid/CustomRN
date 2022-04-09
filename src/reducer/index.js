import {combineReducers} from 'redux';
import ApiSetupReducer from './ApiSetupReducer';
import UserReducer from './UserReducer';
import Setting from './SettingReducer';
import Asset from './Asset';

export default combineReducers({
  api: ApiSetupReducer,
  user: UserReducer,
  setting: Setting,
  asset: Asset,
});
