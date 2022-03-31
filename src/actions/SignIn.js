import {SIGN_IN, SIGN_OUT} from '../constant/Constants';

export function LogIn(data) {
  return {
    type: SIGN_IN,
    data: data,
  };
}

export function LogOut() {
  return {
    type: SIGN_OUT,
  };
}
