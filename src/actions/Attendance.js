import {SIGN_IN, SIGN_OUT, CHECK_IN, SET_LOCATION} from '../constant/Constants';

export function CheckIn(data) {
  return {
    type: CHECK_IN,
    data: data,
  };
}

export function setLocation(long, lat) {
  return {
    type: SET_LOCATION,
    long: long,
    lat: lat,
  };
}
