import {
  SIGH_IN_ERROR,
  SIGH_IN_SUCCESSFULLY,
  SIGN_IN,
} from '../constant/Constants';

const INITIAL_STATE = {
  errorMsg: '',
  username: null,
  token: null,
  expireTime: '',
  userAllData: {},
  loader: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        loader: true,
      };
    case SIGH_IN_SUCCESSFULLY:
      return {
        ...state,
        loader: false,
        username: action.payload.username,
        token: action.payload.token,
        expireTime: action.payload.expireTime,
        userAllData: action.payload.userAllData,
        errorMsg: '',
      };
    case SIGH_IN_ERROR:
      return {
        ...state,
        loader: false,
        errorMsg: action.payload.errorMsg,
      };
    default:
      return state;
  }
};
