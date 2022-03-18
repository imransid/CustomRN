import {API_SETUP_SUCCESS} from '../constant/Constants';

const INITIAL_STATE = null;

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case API_SETUP_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};
