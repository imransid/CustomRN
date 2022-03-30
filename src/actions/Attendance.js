import {SIGN_IN, SIGN_OUT, CHECK_IN} from '../constant/Constants';

export function CheckIn(data) {
  return {
    type: CHECK_IN,
    data: data,
  };
}
