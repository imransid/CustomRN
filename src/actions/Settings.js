import {DRAWER_CHANGE} from '../constant/Constants';

export function DrawerChange(data) {
  return {
    type: DRAWER_CHANGE,
    payload: data,
  };
}
