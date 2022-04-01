import {CHECK_OUT, CHECK_IN, SET_LOCATION} from '../constant/Constants';

export function CheckIn() {
  return {
    type: CHECK_IN,
    status: 'check in',
  };
}

export function CheckOut() {
  return {
    type: CHECK_OUT,
    status: 'check out',
  };
}

export function setLocation(long, lat) {
  return {
    type: SET_LOCATION,
    long: long,
    lat: lat,
  };
}
