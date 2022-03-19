import {SIGN_IN} from '../constant/Constants';

export function LogIn(data) {
  return {
    type: SIGN_IN,
    data: data,
  };
}
